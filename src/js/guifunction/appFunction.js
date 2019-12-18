import visFunction from "./visFunction";
import GlycosidicLinkage from "../models/glycomics/linkages/GlycosidicLinkage";
import SubstituentsPositions from "../models/io/glycoCT/SubstituentsPositions";
import Substituent from "../models/glycomics/nodes/Substituent";
import DonorPosition from "../models/glycomics/dictionary/DonorPosition";
import AcceptorPosition from "../models/glycomics/dictionary/AcceptorPosition";

const vf = new visFunction();

// Get an array of all Repeating Units
export default class appFunction {
    constructor() {
    }

    generateRepeatingUnits (nodes)
    {
        let output = [];
        for (let node of nodes)
        {
            if (node.node.repeatingUnit !== undefined) // the node is in a repeating unit
            {
                if (output.includes(node.node.repeatingUnit))
                {
                    for (let repUnit of output)
                    {
                        if (repUnit === node.node.repeatingUnit)
                        {
                            if (!repUnit.nodes.includes(node))
                            {
                                repUnit.nodes.push(node);
                            }
                        }
                    }
                }
                else
                {
                    output.push(node.node.repeatingUnit);
                }
            }
        }
        return output;
    }

    // Used to select from one node to another
    selectAllNodesBetween (node1, node2, _treeData, _selectedNodes)
    {
        let root = findNodeInTree(_treeData,node1);
        let node = findNodeInTree(_treeData,node2);
        if (root.depth < node.depth)
        {
            _selectedNodes = selectAllChildrenBetween(node2,node1, root.depth, _treeData, _selectedNodes);
        }
        else
        {
            _selectedNodes = [];
            _selectedNodes = selectAllParentsBetween(node1, node2, _treeData, _selectedNodes);
        }

        return _selectedNodes;
    }

    /**
     * Finds a spot where a substituant Label is readable (i.e no link going through it)
     * @param x : Coordinates of the source
     * @param y : Coordinates of the source
     * @param donorPosition
     */
    /*
    findSubstituantLabelSpot (x, y, donorPosition)
    {
        let subsXY = {1: [x-7, y+20], 2: [x+16, y], 3: [x+16,y-16], 4: [x-7, y-28], 5: [x+16, y+8], 6: [x-28, y-16], 7: [x-28, y+8], 8: [x-28, y+16], 9: [x+16, y+16], "undefined": [x-28, y]};
        return subsXY[donorPosition];
    }
     */

    clickedNodeHasSubs (_clickedNode, _glycan)
    {
        let name = _clickedNode.monosaccharideType.name;
        if (SubstituentsPositions[name])//sb.SubstituentsPositions[name])
            return true;
        for (let edge of _glycan.graph.edges())
        {
            if (edge.sourceNode === _clickedNode && edge.targetNode instanceof Substituent)//sb.Substituent)
            {
                return true;
            }
        }
        return false;
    }

    // Get the coordinates of the repeating unit's brackets considering the nodes that are inside
    getRepCoord (repeatingUnit, _shapes)
    {
        let output = [];
        const gap = 50;
        const circleRadius = 15; // Radius of a circle shape
        let minX = _shapes[repeatingUnit.nodes[0].node.id][0];
        for (let node of repeatingUnit.nodes)
        {
            if (_shapes[node.node.id][0] < minX)
            {
                minX = _shapes[node.node.id][0];
            }
        }
        output.push(minX-gap+3*circleRadius/2);
        let maxX = _shapes[repeatingUnit.nodes[0].node.id][0];
        for (let node of repeatingUnit.nodes)
        {
            if (_shapes[node.node.id][0] > maxX)
            {
                maxX = _shapes[node.node.id][0];
            }
        }
        output.push(maxX+gap-3*circleRadius/2);
        let minY = _shapes[repeatingUnit.nodes[0].node.id][1];
        for (let node of repeatingUnit.nodes)
        {
            if (_shapes[node.node.id][1] < minY)
            {
                minY = _shapes[node.node.id][1];
            }
        }
        output.push(minY-3*circleRadius/2); // 10px is the width of the base of the bracket
        let maxY = _shapes[repeatingUnit.nodes[0].node.id][1];
        for (let node of repeatingUnit.nodes)
        {
            if (_shapes[node.node.id][1] > maxY)
            {
                maxY = _shapes[node.node.id][1];
            }
        }
        output.push(maxY+gap/4); // 10px is the width of the base of the bracket
        return output;
    }

    pasteNewNode (node, _glycan, _treeData, _copiedNode, _shapes)
    {
        let foundNodeInTree = searchNodeInTree(_treeData, _copiedNode); // Search the copied node in the tree data
        let linksRelatedToNode = findLinksForCopy(foundNodeInTree, _glycan); // Find all links related to this node and its children
        let copyOfLinks = _.cloneDeep(linksRelatedToNode); // Copy of the links
        let copyOfNode = _.cloneDeep(foundNodeInTree); // Copy of the tree node
        copyOfNode.node.id+= this.randomString(7); // Change node id (to avoid error with twice same id in tree)
        let linkage = vf.findLinkForMono(_copiedNode, _glycan); // Search the link which has the copied node as target
        let copyOfLinkage; // Copy of the link
        let nodeToAppend = searchNodeInTree(_treeData, node); // Search the node  to which we want to paste
        if (linkage != null) { // If the linkage exists (so if the copied node is not the root)
            copyOfLinkage = _.cloneDeep(linkage); // Copy the link
            copyOfLinkage.id += this.randomString(7); // Change its id
            copyOfLinkage.source = nodeToAppend.node.id; // Change the source with the id of the node to append
            copyOfLinkage.sourceNode = nodeToAppend.node; // Change the sourceNode with the node to append
        } else { // If we copied the root, then create a new linkage with undefined anomer and linked carbons
            copyOfLinkage = new GlycosidicLinkage(this.randomString(7), //new sb.GlycosidicLinkage(this.randomString(7),
                _glycan.getNodeById(nodeToAppend.node.id),
                _glycan.getNodeById(foundNodeInTree.node.id),
                AcceptorPosition.UNDEFINED,
                DonorPosition.UNDEFINED);
        }
        changeChildrenIds(copyOfNode); // Change all the children nodes ids (to avoid error of twice same id in tree)
        if (typeof nodeToAppend.children == 'undefined') { // Add children property if the node doesn't have children yet
            nodeToAppend.children = [];
        }
        nodeToAppend.children.push(copyOfNode); // Push the copy to the children of the node to append
        _glycan = addNodeCopyInGraph(copyOfNode, _glycan); // Add the new copy in the graph structure
        // Update the source of the first linkage (search the copied node which corresponds to the first of the copy)
        for (let i = 0; i < copyOfNode.length; i++) {
            let idBeforeChange = copyOfNode[i].node.id.substring(0, copyOfNode[i].node.id.length - 7);
            if (idBeforeChange === copyOfLinkage.source) {
                copyOfLinkage.source = copyOfNode[i].node.id;
                copyOfLinkage.sourceNode = copyOfNode[i].node;
            }
        }
        searchFirstPasteNodeAndUpdateLink(_treeData,copyOfLinkage); // Update the target of the first linkage
        updateLinksRelated(copyOfNode, copyOfLinks); // Update all links (ids to avoid twice same ids
        for (let j = 0; j < copyOfLinks.length; j++) { // Update ids of all links
            copyOfLinks[j].id += this.randomString(7);
        }
        if (typeof nodeToAppend.children === 'undefined') {
            nodeToAppend.children = [];
        }
        _glycan.graph.addEdge(copyOfLinkage); // Add the first edge to the graph
        for (let link of copyOfLinks) { // Add all links to the graph
            _glycan.graph.addEdge(link);
        }
        fadeOutContextMenu();

        let ret = vf.generateShapes(_glycan, _shapes, _treeData);

        displayTree(ret[1], ret[0], _glycan); // Display the tree with new structure
    }

    /**
     * Generate a random string (used for identifiers) with a given length
     * @param length The length of the string we want to generate
     * @returns {string}
     */
    randomString (length)
    {
        // Possible chars in the generated string
        let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz'.split('');

        if (! length) { // If no length specified, get a random length
            length = Math.floor(Math.random() * chars.length);
        }

        let str = '';
        for (let i = 0; i < length; i++) { // Add random chars till length is the one specified
            str += chars[Math.floor(Math.random() * chars.length)];
        }
        return str;
    }

    getNodeParent(node, _glycan)
    {
        for (var e of _glycan.graph.edges())
        {
            if (e.target === node.id)
            {
                return e.sourceNode;
            }
        }
    }
}

/**
* Change children ids of a node
* @param node
*/
const changeChildrenIds = (node) =>
{
    if (node.children != null) {
        for (let i = 0; i < node.children.length; i++) {
            node.children[i].node.id += this.randomString(7);
            changeChildrenIds(node.children[i]);
        }
    }
};

const getSelectedNodeIndex = (node, _selectedNodes) =>
{
    for (let i in _selectedNodes)
    {
        if (_selectedNodes[i].id === node.id)
        {
            return i;
        }
    }
    return -1;
};

/**
 * Search the first node we paste, and change the first link target to this node
 * @param root The node from which we start the search
 * @param linkageToUpdate The linkage to update
 */
const searchFirstPasteNodeAndUpdateLink = (root, linkageToUpdate) => {
    let idBeforeChange = root.node.id; // Get the id of the current node
    if (idBeforeChange === linkageToUpdate.source) { // If it corresponds to the source of the linkage
        if (root.children != null) { // If the node has children
            linkageToUpdate.target = root.children[root.children.length -1].node.id; // Update target with last child of node id
            linkageToUpdate.targetNode = root.children[root.children.length -1].node; // Update targetNode with last child of node
        }
    } else { // If its not the good node
        if (root.children != null) { // Recursivity on children
            for (let i = 0; i < root.children.length; i++) {
                searchFirstPasteNodeAndUpdateLink(root.children[i], linkageToUpdate);
            }
        }
    }
};

/**
 * Update links source and target ids to paste a node
 * @param node The node we are currently checking
 * @param links The links we want to update
 */
const updateLinksRelated = (node, links) => {
    let idBeforeChange = node.node.id.substring(0, node.node.id.length - 7); // Get teh id before the update (we add 7 chars each time)
    for (let i = 0; i < links.length; i++) { // Loop on links
        if (links[i].source === idBeforeChange) { // If source correspondance, update it
            links[i].source = node.node.id;
            links[i].sourceNode = node.node;
        }
        if (links[i].target === idBeforeChange) { // If target correspondance, update it
            links[i].target = node.node.id;
            links[i].targetNode = node.node;
        }
    }
    if (node.children != null) { // Recursivity if children existing
        for (let j = 0; j < node.children.length; j++) {
            updateLinksRelated(node.children[j], links);
        }
    }
};

/**
 * Find all links in relation with a node and its children
 * @param node The root node of the copy
 * @param _glycan
 */
const findLinksForCopy = (node, _glycan) => {
    let allLinks = [];
    if (node.children != null) {
        for (let i = 0; i < node.children.length; i++) {
            allLinks.push(_glycan.getEdge(node.node, node.children[i].node));
            allLinks = allLinks.concat(findLinksForCopy(node.children[i], _glycan));
        }
    }
    return allLinks;
};

/**
 * Add a node from d3js tree and its children in the sigma graph, copying links
 * @param node The node to add
 * @param _glycan
 */
const addNodeCopyInGraph = (node, _glycan) => {
    _glycan.graph.addNode(node.node);
    if (node.children != null) {
        for (let i = 0; i < node.children.length; i++) {
            _glycan = addNodeCopyInGraph(node.children[i], _glycan);
        }
    }
    return _glycan;
};

/**
 * Search a node in the tree structure
 * @param node The node we are looking for
 * @param root The root from which we want to search
 */
const searchNodeInTree = (root, node) => {
    if(root.node.id === node.id){
        return root;
    }else if (root.children != null){
        // If the node has children, recursivity on each child to find the source node
        let i;
        let result = null;
        for(i=0; result == null && i < root.children.length; i++){
            result = searchNodeInTree(root.children[i], node);
        }
        return result;
    }
};

const findNodeInTree = (tree,node1) =>
{
    let stack = [], node, i;
    stack.push(tree);

    while (stack.length > 0) {
        node = stack.pop();
        if (node.node === node1) {
            return node;
        } else if (node.children !== undefined) {
            for (i = 0; i < node.children.length; i += 1) {
                stack.push(node.children[i]);
            }
        }
    }
    return null;
};

// Unselect a node's children (used when we already have a selection, and we make a new smaller selection over it)
const removeChildrenFromSelection = (node, _treeData, _selectedNodes) =>
{
    let finedNode = findNodeInTree(_treeData,node);
    if (finedNode.children !== undefined)
    {
        for (let child of finedNode.children)
        {
            if (_selectedNodes.includes(child.node))
            {
                _selectedNodes.splice(getSelectedNodeIndex(child.node, _selectedNodes),1);
            }
            _selectedNodes = removeChildrenFromSelection(child.node, _treeData, _selectedNodes);
        }
    }

    return _selectedNodes;
};

const selectAllParentsBetween = (node1, node2, _treeData, _selectedNodes) => {
    let selectParents = [];
    let currentNode = findNodeInTree(_treeData, node1);
    if (node1 !== clickedNode && !_selectedNodes.includes(node1) && !selectParents.includes(node1))
        selectParents.push(node1);
    while (currentNode.parent !== undefined)
    {
        if (currentNode.parent.node !== clickedNode && !_selectedNodes.includes(currentNode.parent.node) && !selectParents.includes(currentNode.parent.node))
            selectParents.push(currentNode.parent.node);
        if (currentNode.parent.node === node2)
        {
            _selectedNodes = _selectedNodes.concat(selectParents);
            return _selectedNodes;
        }
        currentNode = currentNode.parent;
    }

    return _selectedNodes;
};

const selectAllChildrenBetween = (node1, node2, rootDepth, _treeData, _selectedNodes) =>
{
    if (_selectedNodes.length === 0 || rootDepth > findNodeInTree(_treeData,_selectedNodes[0]).depth)
    {
        _selectedNodes = [];
    }
    _selectedNodes = selectAllParentsBetween(node1,node2, _treeData, _selectedNodes);
    _selectedNodes = removeChildrenFromSelection(node1, _treeData, _selectedNodes);

    return _selectedNodes;
};