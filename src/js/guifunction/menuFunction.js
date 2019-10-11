import visFunction from "./visFunction";
import appFunction from "./appFunction";
import emFunction from "./emFunction";
import RepeatingUnit from "../models/glycomics/RepeatingUnit";
import Monosaccharide from "../models/glycomics/nodes/Monosaccharide";
import Substituent from "../models/glycomics/nodes/Substituent";
import SubstituentsPositions from "../models/io/glycoCT/SubstituentsPositions";
import MonosaccharideType from "../views/glycomics/dictionary/MonosaccharideType";
import Glycan from "../models/glycomics/Glycan";
import GlycosidicLinkage from "../models/glycomics/linkages/GlycosidicLinkage";
import XYvalues from "../views/parametors/XYvalues";
import OriginalPosition from "../views/parametors/OriginalPosition";
import colorDivisions from "../views/parametors/colorDivisions";
const vf = new visFunction();
const af = new appFunction();
const ef = new emFunction();

export default class menuFunction {
    constructor() {
    }

    /**
     * Get SubDivisions of a searched division, using recursive calls
     * @param divisionToCheck The currently checked division
     * @param searchedDivision The division searched
     * @returns {*}
     */
    getSubDivisions (divisionToCheck, searchedDivision) {
        // If current division is shape, next step is color choice
        if (searchedDivision.indexOf("shape") > -1) {
            return makeDivisionBlocks();
        }
        if (divisionToCheck) {
            // Loop on divisions, recursive calls on subDivisions if needed
            for (let div of divisionToCheck) {
                if (div.division == searchedDivision) {
                    return div.subDivisions;
                }

                let found = this.getSubDivisions(div.subDivisions, searchedDivision);
                if (found) return found;
            }
        }
    }

    // Verifies if the selection is legal for a repetion, then creates it
    handleRepetition (_shapes, _treeData, _glycan, _clickedNode, _selectedNodes)
    {
        let nodes = [_clickedNode].concat(_selectedNodes);
        if (!isRepeated(nodes))
        {
            findNodesInTree(nodes, _treeData);
            let repEntry, repExit;
            if (isBranchSelected(nodes)) // BRANCH
            {
                repEntry = nodes[0].node;
                repExit = findRepExit(nodes[0], _treeData, _clickedNode, _selectedNodes);
                if (repExit.length != 1) // If the rep unit has 2 exits
                {
                    return;
                }
                repExit = repExit[0].node;
            }
            else // NO BRANCH
            {
                let entryExit = findEntryAndExit(nodes);
                if (!entryExit)
                {
                    return;
                }
                repEntry = entryExit[0];
                repExit = entryExit[1];
            }

            if (repExit != undefined) // Doesn't finish by a fork
            {
                let min = prompt("Minimum number of repetitions");
                if (min == null || min == "")
                {
                    return;
                }
                let max = prompt("Maximum number of repetitions");
                if (max == null || max == "")
                {
                    return;
                }
                let donor = prompt("Donor Position on the "+repExit.monosaccharideType.name + " (\"?\" for unknown linkage)");
                if (donor != "?" && (donor > ef.getNumberCarbons(repExit) || donor < 1))
                    return;
                let acceptor = prompt("Acceptor Position on the "+repEntry.monosaccharideType.name + " (\"?\" for unknown linkage)");
                if (acceptor != "?" && (acceptor > 3 || acceptor < 1))
                    return;
                let id = af.randomString(7);
                let repeatingUnit = new RepeatingUnit(id,nodes,min,max,repEntry,repExit,donor,acceptor);
                //let repeatingUnit = new sb.RepeatingUnit(id,nodes,min,max,repEntry,repExit,donor,acceptor);
                for  (let node of nodes)
                {
                    node.node.repeatingUnit = repeatingUnit;
                }
                _shapes = moveNodesInsideRep(_shapes, _treeData, _glycan);
                displayTree(_treeData, _shapes, _glycan);
                updateMenu();
            }
        }

        return;
    }

    /**
     * Deletes all the subs of a node.
     * If the node is a mono+sub (e.g GulNAc), when called for the first time the function will only delete the substituents except NAc on donorPosition 2
     * If called again on it, the GulNAc will turn to Gul.
     * @param node
     */
    deleteSubs (node, _glycan, _treeData, _shapes)
    {
        let name = node.monosaccharideType.name;
        let deleted = 0;
        for (let edge of _glycan.graph.edges())
        {
            if (edge.sourceNode == node)
            {
                if (edge.targetNode instanceof Substituent)
                {
                    deleteNode(edge.targetNode);
                    deleted++;
                }
            }
        }
        if (deleted == 0 && SubstituentsPositions[name])
        { // Has an embedded sub to be deleted
            if (name.substring(0,3) == "Neu")
            {
                _glycan = this.updateNodeType(node, MonosaccharideType.Kdn, _glycan);
            }
            else
            {
                let i = 1;
                while ((!MonosaccharideType[name.substring(0,name.length-i)] || SubstituentsPositions[name.substring(0,name.length-i)])&& i < 10)
                {
                    i++;
                }
                _glycan = this.updateNodeType(node, MonosaccharideType[name.substring(0,name.length-i)], _glycan);
            }
        }
        displayTree(_treeData, _shapes, _glycan);
        updateMenu();
    }

    /**
     * Visually gathers all the scattered nodes
     * (because after a deletion some nodes can stay far away for no reason anymore)
     */
    reassembleNodes(_glycan, _shapes)
    {
        for (let edge of _glycan.graph.edges())
        {
            let source = edge.source;
            let target = edge.target;
            let donorPosition = edge.donorPosition.value;
            let dx = XYvalues.prototype.getXYvalue(donorPosition).y;
            let dy = XYvalues.prototype.getXYvalue(donorPosition).x;
            let usualX = _shapes[source][0]+dx;
            let usualY = _shapes[source][1]+dy;
            if (_shapes[target] != undefined && (_shapes[target][0] != usualX || _shapes[target][1] != usualY)) // If the node is not where it should be
            {
                if (af.isAvailible(usualX, usualY, _shapes) == "")
                {
                    _shapes[target] = [usualX, usualY];
                }
                else
                {
                    _shapes[target] = af.findNewSpot(usualX, usualY, _shapes, donorPosition);
                }
            }
        }

        return _shapes;
    }

    /**
     * Delete all children nodes in the graph structure
     * @param node The node from which we want to delete children
     */
    deleteAllChildrenInGraph(node, _glycan) {
        for (let edge of _glycan.graph.edges()) {
            if (edge.sourceNode == node) {
                _glycan = this.deleteAllChildrenInGraph(edge.targetNode, _glycan);
            }
        }
        if (node.children === undefined) // leaf
        {
            _glycan.removeNodeById(node.id);
        }

        return _glycan;
    }

    deleteAllShapesInGraph(node, _glycan, _shapes) { // has to be separate from deleteAllChildrenInGraph because it updates the glycan on the fly
        for (let edge of _glycan.graph.edges()) {
            if (edge.sourceNode == node) {
                delete _shapes[node.id];
                delete _shapes[edge.target];
                this.deleteAllShapesInGraph(edge.targetNode, _glycan, _shapes);
            }
        }

        return _shapes
    }

    /**
     * Create a new node using the informations selected by the user
     */
    createNewNode(_infosTable, _glycan, _treeData, _shapes, _progress) {
        let typeNodeToAdd = _infosTable[1]; // Selected type, monosaccharide or substituent
        if (typeNodeToAdd == "Monosaccharide") {
            let shape = _infosTable[2]; // Selected shape
            let isBisected = (shape.indexOf("bisected") != -1); // Check if the shape is bisected
            if (isBisected) {
                shape = shape.split("bisected")[1]; // We update the value of the shape by removing keywork "bisected"
            }
            let color = colorDivisions.prototype.getColor(_infosTable[3]); // Selected color
            //let color = vf.getColorCodeFromString(infosTable[3]); // Selected color
            let anomericity = vf.getAnomericityWithSelection(_infosTable[4]); // Anomericity
            let isomer = vf.getIsomerWithSelection(_infosTable[5]); // Isomer
            let ring = vf.getRingTypeWithSelection(_infosTable[6]); // Ring type
            let donorPosition = vf.getDonorPositionWithSelection(_infosTable[7]); // Get the donor position
            let acceptorPosition = vf.getAcceptorPositionWithSelection(_infosTable[8]); // Get the acceptor position
            let monoType = vf.getMonoTypeWithColorAndShape(color, shape, isBisected); // Get the monosaccharide type
            let generatedNodeId = af.randomString(7); // Generate an id
            let monosaccharide = new Monosaccharide(generatedNodeId,monoType,anomericity, isomer, ring); // Create new monosaccharide

            let node;
            const gap = 50;
            if (Object.keys(_treeData).length === 0) { // If tree is empty, instantiate the glycan with the monosaccharide as the root
                _glycan = new Glycan("glycan", monosaccharide);
                node = {"node":monosaccharide};
                shape = vf.calculateXandYNode(node, _glycan, _shapes);
                _shapes[generatedNodeId] = shape;
                let rootShape = [OriginalPosition.x.value, OriginalPosition.y.value+gap];
                _shapes.root = rootShape;
                rootDonorPosition = donorPosition;
                rootAcceptorPosition = acceptorPosition;
                _treeData = vf.updateTreeVisualization(undefined, _glycan, _treeData); // Update visualization in the svg
            } else {
                let generatedEdgeId = af.randomString(7); // If tree not empty, generate id, create linkage and update visualziation
                let glycosidicLink = new GlycosidicLinkage(generatedEdgeId, clickedNode, monosaccharide, acceptorPosition, donorPosition);
                _glycan.addMonosaccharide(monosaccharide, glycosidicLink);
                _treeData = vf.updateTreeVisualization(glycosidicLink, _glycan, _treeData);
                let parent = af.getNodeParent(monosaccharide, _glycan);
                node = {"node":monosaccharide, "parent":parent};
                shape = vf.calculateXandYNode(node, _glycan, _shapes);
                _shapes[generatedNodeId] = shape;
            }
            _shapes = moveNodesInsideRep(_shapes, _treeData, _glycan);
            clickedNode = monosaccharide;
            displayTree(_treeData, _shapes, _glycan);
            updateMenu();
            redrawProgress(_progress, 0);
            _progress = 0;
            return [generatedNodeId, _shapes, _treeData, _progress];
        }
    }

    updateNodeType(node, type, _glycan)
    {
        //this.glycan
        for (let glycanNode of _glycan.graph.nodes())
        {
            if (node === glycanNode)
            {
                glycanNode.monosaccharideType = type;
            }
        }
//        return _glycan;
    }
}

// Checks if the selection array "nodes" is linear or has a fork
const isBranchSelected = (nodes) =>
{
    for (let node of nodes)
    {
        if (node.children != undefined)
        {
            let selectedChildren = 0;
            for (let child of node.children)
            {
                if (nodes.includes(child))
                {
                    selectedChildren++;
                }
            }
            if (selectedChildren > 1)
            {
                return true;
            }
        }
    }
    return false;
};

/**
 *
 * @param startX
 * @param startY
 * @param dx
 * @param dy
 * @param repCoord
 * This function will check if a node can escape a repeating unit without hitting another node
 */
const checkNodesInLine = (startX, startY, dy, dx, repCoord, _shapes) =>
{
    let limit;
    let x = startX+dx, y = startY+dy;
    if (dx == 0) // Horizontal
    {
        if (dy > 0) // going to the right
        {
            limit = repCoord[3];
            while (y < limit)
            {
                if (af.isAvailible(x, y, _shapes) != "")
                    return true;
                y += dy;
            }
        }
        else if (dy < 0) // going to the left
        {
            limit = repCoord[2];
            while (y > limit)
            {
                if (af.isAvailible(x, y, _shapes) != "")
                    return true;
                y += dy;
            }
        }
    }
    else if (dy == 0) // Vertical
    {
        if (dx > 0) // going to the bottom
        {
            limit = repCoord[1];
            while (x < limit)
            {
                if (af.isAvailible(x, y, _shapes) != "")
                    return true;
                x += dx;
            }
        }
        else if (dx < 0) // going to the top
        {
            limit = repCoord[0];
            while (x > limit)
            {
                if (af.isAvailible(x, y, _shapes) != "")
                    return true;
                x += dx;
            }
        }
    }
    return false;
};

// Find the entry and exit of a bunch of nodes (for repeating units)
const findEntryAndExit = (nodes) =>
{
    let maxDepth = nodes[0].depth;
    let minDepth = nodes[0].depth;
    let maxNode = nodes[0].node;
    let minNode = nodes[0].node;
    let unselectedChildren = 0;
    for (let node of nodes)
    {
        unselectedChildren += countUnselectedChildren(node, nodes);
        if (node.depth > maxDepth)
        {
            maxDepth = node.depth;
            maxNode = node.node;
        }
        if (node.depth < minDepth)
        {
            minDepth = node.depth;
            minNode = node.node;
        }
    }
    if (unselectedChildren > 1)
    {
        return false;
    }
    else
    {
        return [minNode,maxNode];
    }
};

// Used to check if the repetition can be done on the array "nodes"
// If there are more than 1 unselected children in the array, there are several exits to the repeating unit, which is impossible.
// If there are 0 unselected children, the repetition is only possible if there are no branches selected:
// if you select the end of a linear glycan, there are no exits because the last selected node is the last node of the glycan (Repetition OK)
// however, if there is a branch an no unselected children, the group of nodes ends with a fork, which is impossible
const countUnselectedChildren = (node, nodes) =>
{
    let count = 0;
    if (node.children != undefined)
    {
        for (let child of node.children)
        {
            if (!nodes.includes(child) && child.node instanceof Monosaccharide)
            {
                count++;
            }
        }
        return count;
    }
    else
    {
        return 0;
    }
};

// Find the exit(s) of a group of nodes (for repeating unit)
const findRepExit = (root, _treeData, _clickedNode, _selectedNodes) =>
{
    let wholeSelection = [_clickedNode].concat(_selectedNodes);
    findNodesInTree(wholeSelection, _treeData);
    let exits = [];
    let stack = [root];

    while (stack.length > 0)
    {
        let node = stack.pop();
        if (countUnselectedChildren(node, wholeSelection) == 1)
        {
            if (!exits.includes(node))
                exits.push(node);
        }
        if (node.children != undefined)
        {
            for (let child of node.children)
            {
                if (wholeSelection.includes(child))
                    stack.push(child);
            }
        }
    }
    return exits;
};


// Turns an array of Monosaccharides into an array of tree nodes
const findNodesInTree = (arr, _treeData) =>
{
    for (let i in arr)
    {
        arr[i] = vf.findNodeInTree(_treeData,arr[i]);
    }
    return arr;
};

// Check if any of the nodes in arr are already in a REP
const isRepeated = (arr) =>
{
    for (let node of arr)
    {
        if (node.repeatingUnit !== undefined)
        {
            return true;
        }
    }
    return false;
};

const makeDivisionBlocks = () => {
    let ret = [];

    for (let cd in colorDivisions) {
        let item = {};
        if (cd === 'enumValues') continue;
        item.division = colorDivisions[cd].division;
        item.display_division = colorDivisions[cd].display_division;
        ret.push(item);
    }
    return ret;
};

/* This function is used to visually move the nodes out of a repetition if they are not part of it
  A repetition is shown on the screen as a rectangle area bordered by brackets. However there can be
  nodes inside this rectangle even though they don't belong in the repetition. To avoid a confusion, this
  function pushes them out of this area

  However, if a node cannot escape (other nodes are blocking the way out), it won't move
   */
const moveNodesInsideRep = (_shapes, _treeData, _glycan) =>
{
    let nodes = tree.nodes(_treeData);
    let repeatingUnits = af.generateRepeatingUnits(nodes);
    for (let rep of repeatingUnits) // for each Repeating unit
    {
        let repCoord = af.getRepCoord(rep, _shapes);
        for (let node of nodes) // and for each node
        {
            if (node.node instanceof Monosaccharide)
            {
                let donorPosition;
                let dontMove = false;
                // if the node is not part of the repeating unit AND is located inside the square, move it
                while (((node.node.repeatingUnit == undefined || node.node.repeatingUnit.id != rep.id) &&
                    (_shapes[node.node.id][0] >= repCoord[0] &&
                        _shapes[node.node.id][0] <= repCoord[1] &&
                        _shapes[node.node.id][1] >= repCoord[2] &&
                        _shapes[node.node.id][1] <= repCoord[3])) && !dontMove)
                {
                    let link;
                    for (let e of _glycan.graph.edges())
                    {
                        if (e.target == node.node.id)
                            link = e;
                    }
                    donorPosition = link.donorPosition.value;
                    let dy = XYvalues.prototype.getXYvalue(donorPosition).x;
                    let dx = XYvalues.prototype.getXYvalue(donorPosition).y;
                    let startX = _shapes[node.node.id][0];
                    let startY = _shapes[node.node.id][1];
                    if (!checkNodesInLine(startX, startY, dy, dx, repCoord, _shapes))
                        _shapes = vf.moveNodeAndChildren(node,dx,dy);
                    else
                    {
                        dontMove = true;
                    }
                }
            }
        }
    }

    return _shapes;
};