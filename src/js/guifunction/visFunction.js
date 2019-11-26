import GlycosidicLinkage from "../models/glycomics/linkages/GlycosidicLinkage";
import DonorPosition from "../models/glycomics/dictionary/DonorPosition";
import AcceptorPosition from "../models/glycomics/dictionary/AcceptorPosition";
import MonosaccharideType from "../views/glycomics/dictionary/MonosaccharideType";
import Anomericity from "../models/glycomics/dictionary/Anomericity";
import Isomer from "../models/glycomics/dictionary/Isomer";
import RingType from "../models/glycomics/dictionary/RingType";
import XYvalues from "../views/parametors/XYvalues";
import colorDivisions from "../views/parametors/colorDivisions";
import emFunction from "./emFunction";

export default class visFunction {

    constructor() {
    }

    /**
     * Update the treeData, and then call the displayTree function to display it with the new data
     */
    updateTreeVisualization (newLink, _glycan, _treeData) {
        // If the tree is empty, we just initialize it with the node as a root
        if (typeof newLink === 'undefined') {
            _treeData = {"node":_glycan.getRootNode(), "children":[]};
        } else { // If tree already has a root, add the node in the tree
            _treeData = this.searchAndAddNodeInTree(_treeData, newLink);
        }
        return _treeData;
    }

    /**
     * Search a node in a tree
     * @param root The root of the tree
     * @param link The link used for new node
     * @returns {*}
     */
    searchAndAddNodeInTree (root, link){
        // If the current node is the source of the link
        if(root.node == link.sourceNode){
            // If the node doesn't have children, add an empty array as children property
            if (typeof root.children === 'undefined') root.children = [];
            root.children.push({"node":link.targetNode, "children": []}); // Push the target of the link
        }else if (root.children != null){
            // If the node has children, recursivity on each child to find the source node
            let i;
            let result = null;
            for(i=0; result == null && i < root.children.length; i++){
                this.searchAndAddNodeInTree(root.children[i], link);
            }
        }

        return root;
    }

    /**
     * Update an existing node
     */
    updateExistingNode(_glycan, _infosTable, _treeData, _shapes) {
        let newShape = _infosTable.shape; // Selected shape
        //let newColor = this.getColorCodeFromString(_infosTable[2]); // Selected color
        let newColor = colorDivisions.prototype.getColor(_infosTable.color); // Selected color
        let anomericity = this.getAnomericityWithSelection(_infosTable.anomericity); // Anomericity
        let isomer = this.getIsomerWithSelection(_infosTable.isomer); // Isomer
        let ringType = this.getRingTypeWithSelection(_infosTable.ringType); // Ring type
        let donorPosition = this.getDonorPositionWithSelection(_infosTable.donorPosition); // Donor position
        let acceptorPosition = this.getAcceptorPositionWithSelection(_infosTable.acceptorPosition); // Acceptor position
        let monoToUpdate = _glycan.getNodeById(clickedNode.id); // Get the node we want to update in the graph
        monoToUpdate.anomericity = anomericity; // Update anomericity
        monoToUpdate.ringType = ringType; // Update ring type
        monoToUpdate.isomer = isomer; // Update isomer
        let isBisected = (newShape.indexOf("bisected") != -1); // Check if the shape is bisected
        if (isBisected) {
            newShape = newShape.split("bisected")[1]; // We update the value of the shape by removing keywork "bisected"
        }
        let newMonoType = this.getMonoTypeWithColorAndShape(newColor, newShape, isBisected); // Find new monosaccharide type
        monoToUpdate.monosaccharideType = newMonoType; // Update monosaccharide type
        if (monoToUpdate == _treeData.node)
        {
            rootDonorPosition = donorPosition;
            rootAcceptorPosition = acceptorPosition;
        }
        else
        {
            let linkToUpdate = this.findLinkForMono(monoToUpdate, _glycan); // Get the link to update (if exists)
            let prevDonorPosition = linkToUpdate.donorPosition.value;
            if (linkToUpdate != null) {
                linkToUpdate.donorPosition = donorPosition; // Update donor position
                linkToUpdate.acceptorPosition = acceptorPosition; // Update acceptor position
            }
            let dx = XYvalues.prototype.getXYvalue(donorPosition.value).x*50 - XYvalues.prototype.getXYvalue(prevDonorPosition).x*50;
            let dy = XYvalues.prototype.getXYvalue(donorPosition.value).y*50 - XYvalues.prototype.getXYvalue(prevDonorPosition).y*50;
            _shapes = this.moveNodeAndChildren(this.findNodeInTree(_treeData,monoToUpdate), dx, dy, _shapes);
        }
        updateNodeInTree(_treeData,monoToUpdate, _treeData, _shapes, _glycan); // Update the node in the tree
    }

    /**
     * Search and remove a node from the tree
     * @param root The node from which we search in the tree
     * @param node The node we are searching
     */
    searchAndRemoveNodeInTree(root, node) {
        if(root.children != null) { // If the root has children
            for (let i = 0; i < root.children.length; i++) { // Loop on children
                if (root.children[i].node == node) { // If one child corresponds, remove it
                    let removed = node;
                    root.children.splice(i, 1);
                    return removed;
                } else {
                    node = this.searchAndRemoveNodeInTree(root.children[i], node); // Recursivity call on children
                }
            }
        }
        return node;
    }

    // Visually moves a node and its children
    moveNodeAndChildren(node, dx, dy, _shapes)
    {
        let stack = [node];
        while (stack.length != 0)
        {
            let n = stack.pop();
            _shapes[n.node.id][0] += dx;
            _shapes[n.node.id][1] += dy;
            if (n.children != undefined)
            {
                for (let child of n.children)
                {
                    stack.push(child);
                }
            }
        }

        return _shapes;
    }

    /**
     * Find in the MonosaccharideType enum the corresponding type for a given color and shape
     * @param color The color of the MonosaccharideType
     * @param shape The shape of the MonosaccharideType
     * @param isBisected Boolean telling if the shape is bisected
     */
    getMonoTypeWithColorAndShape(color, shape, isBisected) {
        // Loop on monosaccharide types, and return the one we want
        for (let type of MonosaccharideType) {
            if(type.color == color && type.shape == shape && type.bisected == isBisected) {
                return type;
            }
        }
        return MonosaccharideType.UNDEFINED; // Return undefined if combination doesn't exist
    }

    /**
     * Find in the Anomericity enum the corresponding value for a given selected value
     * @param anomericity The anomericity we are seeking
     * @returns {*}
     */
    getAnomericityWithSelection(anomericity) {
        let anomericityName;
        // Get the string associated to display label
        if (anomericity == "α") {
            anomericityName = "ALPHA";
        } else if (anomericity == "β") {
            anomericityName = "BETA";
        }

        // Loop on anomericity values, and return the one we want
        for (let anom of Anomericity) {//sb.Anomericity) {
            if (anom.name == anomericityName)
                return anom;
        }
        return Anomericity.UNDEFINED; // Return undefined if not found (not supposed to happen)
        //return sb.Anomericity.UNDEFINED; // Return undefined if not found (not supposed to happen)
    }

    /**
     * Find in the Isomer enum the corresponding value for a given selected value
     * @param isomer The isomer we are seeking
     * @returns {*}
     */
    getIsomerWithSelection(isomer) {
        // Loop on isomers, and return the one we want
        for (let anom of Isomer) {//sb.Isomer) {
            if (anom.name == isomer)
                return anom;
        }
        return Isomer.UNDEFINED; // Return undefined if not found (not supposed to happen)
        //return sb.Isomer.UNDEFINED; // Return undefined if not found (not supposed to happen)
    }

    /**
     * Find in the RingType enum the corresponding value for a given selected value
     * @param ringType The ring type we are seeking
     * @returns {*}
     */
    getRingTypeWithSelection(ringType) {
        // Loop on ring types, and return the one we want
        for (let ring of RingType) {//sb.RingType) {
            if (ring.name == ringType)
                return ring;
        }
        return RingType.UNDEFINED; // Return undefined if not found (not supposed to happen)
    }

    /**
     * Find in the AcceptorPosition enum the corresponding value for a given selected value
     * @param acceptorPosition The acceptor position we are seeking
     * @returns {*}
     */
    getAcceptorPositionWithSelection(acceptorPosition) {
        // Loop on acceptor positions, and return the one we want
        for (let carbon of AcceptorPosition) {//sb.AcceptorPosition) {
            if (carbon.value == acceptorPosition)
                return carbon;
        }
        return AcceptorPosition.UNDEFINED; // Return undefined if not found (not supposed to happen)
    }

    /**
     * Find in the DonorPosition enum the corresponding value for a given selected value
     * @param donorPosition The donor position we are seeking
     * @returns {*}
     */
    getDonorPositionWithSelection(donorPosition) {
        // Loop on donor positions, and return the one we want
        for (let carbon of DonorPosition) {//sb.DonorPosition) {
            if (carbon.value == donorPosition)
                return carbon;
        }
        return DonorPosition.UNDEFINED; // Return undefined if not found (not supposed to happen)
    }

    /**
     * Get color code from a string, using colorDivisions
     * @param colorName The color string we are seeking the translated code
     * @returns {string|string|string|string|string|string|*}
     */
    /*
    getColorCodeFromString(colorName) {
        // Loop on colors, and return the code when found
        for (let color of colorDivisions) {
            if (color.division == colorName) {
                return color.display_division;
            }
        }
    }
     */

    generateShapes(_glycan, _shapes, _treeData)
    {
        _shapes = [];
        for (let mono of _glycan.graph.nodes())
        {
            let link;
            for (let edge of _glycan.graph.edges())
            {
                if (edge.target == mono.id)
                {
                    link = edge;
                }
            }

            let node;
            let shape;
            if (_shapes.length === 0) { // If tree is empty, instantiate the glycan with the monosaccharide as the root
                node = {"node":mono};
                shape = this.calculateXandYNode(node, _glycan, _shapes);
                _shapes[node.node.id] = shape;

                //let rootShape = [OriginalPosition.x.value, OriginalPosition.y.value+50]; //バグの原因
                let rootShape = [rootPos.x, rootPos.y];
                _shapes.root = rootShape;
                rootDonorPosition = DonorPosition.UNDEFINED;
                rootAcceptorPosition = AcceptorPosition.ONE;
                _treeData = this.updateTreeVisualization(undefined, _glycan, _treeData); // Update visualization in the svg
            } else {
                if (link instanceof GlycosidicLinkage) {//sb.GlycosidicLinkage) {
                    _treeData = this.updateTreeVisualization(link, _glycan, _treeData);
                    //this.updateTreeVisualization(link);
                    node = {"node":mono};
                    shape = this.calculateXandYNode(node, _glycan, _shapes);
                    _shapes[node.node.id] = shape;
                }
                else
                {
                    _treeData = this.updateTreeVisualization(link, _glycan, _treeData);
                }
            }
        }

        return [_shapes, _treeData];
    }

    /**
     * Calculate X and Y for a node (using our fixed modification values), recursivity from node to root
     * @param node The node for which we want to calculate new coordinates
     */
    calculateXandYNode (node, _glycan, _shapes)
    {
        let link = this.findLinkForMono(node.node, _glycan); // Find the link which has the node as target
        if (typeof link != 'undefined') { // If the link exists
            let donorPosition = link.donorPosition.value; // Get linked carbon value
            let sourceX;
            let sourceY;
            let sourceId;
            let sourceNode;

            // Calculate new coordinates for the wanted node
            for (let n of _glycan.graph.nodes()) {
                if (n == link.sourceNode) {
                    sourceId = n.id;
                    let source = _shapes[sourceId];
                    sourceX = source[0];
                    sourceY = source[1];
                    sourceNode = n;
                }
            }

            // Modifications we have to do on the obtained value
            const usablePos = this.extractUsablePosition(sourceNode, _glycan);
            if (donorPosition === "undefined" && !("undefined" in usablePos)) {
                donorPosition = parseInt(Object.keys(usablePos)[0]);
            }
            let newX = sourceX + XYvalues.prototype.getXYvalue(donorPosition).x*50; // Apply the modification on x
            let newY = sourceY + XYvalues.prototype.getXYvalue(donorPosition).y*50; // Apply the modification on y

            let availible = this.isAvailible(newX, newY, _shapes);
            if (availible != "")
            {
                let newPos = this.findNewSpot(newX,newY, link.donorPosition.value, _shapes, sourceId);
                newX = newPos[0];
                newY = newPos[1];
            }

            return [newX, newY]; // Return the obtained coordinates

        } else { // If the node is the root, just add 150 to the x and 900 to y to display it on the right of the svg
            //return [OriginalPosition.x, OriginalPosition.y.value];
            return [rootPos.x, rootPos.y];
        }
    }


    /**
     * Finds the edge in the glycan which has the monosaccharide as target
     * @param monosaccharide The monosaccharide which is the target fo the searched link
     * @returns {*}
     */
    findLinkForMono (monosaccharide, _glycan)
    {
        let links = _glycan.graph.edges(); // Tree links
        for (let link of links) {
            // If the link has the node as target, return the edge from the graph s
            if (link.target == monosaccharide.id) {
                return _glycan.getEdge(link.sourceNode, link.targetNode);
            }
        }
        return undefined;
    }


    /**
     * Tells if there is already a node at a given position x, y and returns its id if so
     * @param x
     * @param y
     */
    isAvailible (x, y, _shapes)
    {
        for (let shape in _shapes)
        {
            if (_shapes[shape][0] == x && _shapes[shape][1] == y)
                return shape;
        }
        return "";
    }

    /**
     * Returns a new availible position for a shape to be at.
     * @param x, y, donorPosition
     * @param y
     * @param linked
     * @param sourceId
     */
    findNewSpot (x, y, linked, _shapes, sourceId = clickedNode.id)
    {
        let limit;
        const gap = 50;
        switch(linked) {
            case 1: // Right
                y = _shapes[sourceId][1];
                limit = y;
                for (let id in _shapes)
                {
                    if (_shapes[id][1] <= limit)
                    {
                        _shapes = moveShape(id, 0, -1*gap, _shapes);
                    }
                }
                break;
            case 2: // Down
                x = _shapes[sourceId][0];
                limit = x;
                for (let id in _shapes)
                {
                    if (_shapes[id][0] <= limit) // if the shape is higher or same Y as clickedNode
                    {
                        _shapes = moveShape(id, -1*gap, 0, _shapes);
                    }
                }
                break;
            case 3:
                x += this.gap;
                while (this.isAvailible(x, y, _shapes) != "")
                    x += gap;
                break;
            case 4: // Left
                y = _shapes[sourceId][1];
                limit = y;
                for (let id in _shapes)
                {
                    if (_shapes[id][1] >= limit)
                    {
                        _shapes = moveShape(id, 0, gap, _shapes);
                    }
                }
                break;
            case 5: // Left
                y = _shapes[sourceId][1];
                limit = y;
                for (let id in _shapes)
                {
                    if (_shapes[id][1] >= limit)
                    {
                        _shapes = moveShape(id, 0, gap, _shapes);
                    }
                }
                break;
            case 6:
                x -= gap;
                while (this.isAvailible(x, y, _shapes) != "")
                    x -= gap;
                break;
            case "undefined": // Up
                x = _shapes[sourceId][0];
                limit = x;
                for (let id in _shapes)
                {
                    if (_shapes[id][0] >= limit) // if the shape is higher or same Y as clickedNode
                    {
                        _shapes = moveShape(id, gap, 0, _shapes);
                    }
                }
                break;
        }
        return [x, y];
    }

    findNodeInTree (tree,node1)
    {
        let stack = [], node, i;
        stack.push(tree);

        while (stack.length > 0) {
            node = stack.pop();
            if (node.node == node1) {
                return node;
            } else if (node.children != undefined) {
                for (i = 0; i < node.children.length; i += 1) {
                    stack.push(node.children[i]);
                }
            }
        }
        return null;
    }

    extractUsablePosition (_sourceNode, _glycan) {
        let ret = {
            "undefined": true
        };

        if (this.getNodeChild(_sourceNode, _glycan).length < 2) return ret;

        const emFunc = new emFunction();

        for (let i = 1; i < emFunc.getNumberCarbons(_sourceNode) + 1; i++) {
            ret[i] = true;
        }

        let undefCnt = 0;
        for(let edge of _glycan.graph.edges()) {
            if (edge.targetNode === _sourceNode && edge.acceptorPosition !== AcceptorPosition.UNDEFINED) {
                delete ret[edge.acceptorPosition.value];
            }
            if (edge.sourceNode === _sourceNode) {
                if (edge.donorPosition !== DonorPosition.UNDEFINED) {
                    delete ret[edge.donorPosition.value];
                } else {
                    if (undefCnt === 0) {
                        delete ret.undefined;
                    } else {
                        delete ret[parseInt(Object.keys(ret)[0])];
                    }
                    undefCnt++;
                }
            }
        }

        return ret;
    }

    getNodeChild (_node, _glycan) {
        let ret = [];
        _glycan.graph.edges().map( function (edge) {
            if (edge.source === _node.id) {
                ret.push(edge.targetNode);
            }
        });

        return ret;
    }
}


/**
 * Update a node in the tree, and then display the tree again
 * @param root The root of the tree
 * @param newMonosaccharide The updated monosaccharide
 */
const updateNodeInTree = (root, newMonosaccharide, _treeData, _shapes, _glycan) => {
    // Compare id's, and update if found the node to update
    if(root.node.id == newMonosaccharide.id){
        root.node = newMonosaccharide;
    } else if (root.children != null){
        // If has children, recursivity on each child to find the node to uodate
        let i;
        let result = null;
        for(i=0; result == null && i < root.children.length; i++){
            updateNodeInTree(root.children[i], newMonosaccharide, _treeData, _shapes, _glycan);
        }
    }
    displayTree(_treeData, _shapes, _glycan); // Display the tree after the update
};


/**
 * Visually moves a node
 * @param id, addX, addY
 */
const moveShape = (id, addX, addY, _shapes) =>
{
    _shapes[id][0] += addX;
    _shapes[id][1] += addY;

    return _shapes;
};