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
import colorDivisions from "../views/parametors/colorDivisions";
import RepetitionUtility from "../utils/RepetitionUtility";
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
        let repFunc = new RepetitionUtility(_glycan, _treeData, _shapes);
        repFunc.start(_clickedNode, _selectedNodes);
        _shapes = moveNodesInsideRep(repFunc.shapes, repFunc.treeData, repFunc.glycan);
        displayTree(repFunc.treeData, _shapes, repFunc.glycan);
        updateMenu();

        return _shapes;
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
            let dx = XYvalues.prototype.getXYvalue(donorPosition).x * 50;
            let dy = XYvalues.prototype.getXYvalue(donorPosition).y * 50;
            let usualX = _shapes[source][0]+dx;
            let usualY = _shapes[source][1]+dy;
            if (_shapes[target] != undefined && (_shapes[target][0] != usualX || _shapes[target][1] != usualY)) { // If the node is not where it should be{
                if (af.isAvailible(usualX, usualY, _shapes) == "") {
                    _shapes[target] = [usualX, usualY];
                } else {
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
                _shapes = this.deleteAllShapesInGraph(edge.targetNode, _glycan, _shapes);
            }
        }
        return _shapes;
    }

    /**
     * Create a new node using the informations selected by the user
     */
    createNewNode(_infosTable, _glycan, _treeData, _shapes) {
        let typeNodeToAdd = _infosTable.display_division; // Selected type, monosaccharide or substituent
        if (typeNodeToAdd == "Monosaccharide") {
            let shape = _infosTable.shape; // Selected shape
            let isBisected = (shape.indexOf("bisected") != -1); // Check if the shape is bisected
            if (isBisected) {
                shape = shape.split("bisected")[1]; // We update the value of the shape by removing keywork "bisected"
            }
            let color = colorDivisions.prototype.getColor(_infosTable.color); // Selected color
            let anomericity = vf.getAnomericityWithSelection(_infosTable.anomericity); // Anomericity
            let isomer = vf.getIsomerWithSelection(_infosTable.isomer); // Isomer
            let ring = vf.getRingTypeWithSelection(_infosTable.ringType); // Ring type
            let donorPosition = vf.getDonorPositionWithSelection(_infosTable.donorPosition); // Get the donor position
            let acceptorPosition = vf.getAcceptorPositionWithSelection(_infosTable.acceptorPosition); // Get the acceptor position
            let monoType = vf.getMonoTypeWithColorAndShape(color, shape, isBisected); // Get the monosaccharide type
            let generatedNodeId = af.randomString(7); // Generate an id
            let monosaccharide = new Monosaccharide(generatedNodeId,monoType,anomericity, isomer, ring); // Create new monosaccharide

            let node;
            if (Object.keys(_treeData).length === 0) { // If tree is empty, instantiate the glycan with the monosaccharide as the root
                _glycan = new Glycan("glycan", monosaccharide);
                node = {"node":monosaccharide};
                shape = vf.calculateXandYNode(node, _glycan, _shapes);
                _shapes[generatedNodeId] = shape;
                let rootShape = [rootPos.x, rootPos.y];
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
            return [_glycan, _shapes, _treeData];
        }
    }

    updateNodeType(node, type, _glycan)
    {
        for (let glycanNode of _glycan.graph.nodes())
        {
            if (node === glycanNode)
            {
                glycanNode.monosaccharideType = type;
            }
        }
        return _glycan;
    }
}

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
                    let dy = XYvalues.prototype.getXYvalue(donorPosition).y * 50;
                    let dx = XYvalues.prototype.getXYvalue(donorPosition).x * 50;
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