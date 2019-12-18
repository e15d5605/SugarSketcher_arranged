import RepeatingUnit from "../models/glycomics/RepeatingUnit";
import Monosaccharide from "../models/glycomics/nodes/Monosaccharide";
import emFunction from "../guifunction/emFunction";
import appFunction from "../guifunction/appFunction";
import visFunction from "../guifunction/visFunction";

/**
    This source code moved from src/js/views/menu.js
 */

export default class RepetitionUtility {
    constructor(_glycan, _treeData, _shapes) {
        this._shapes = _shapes;
        this._treeData = _treeData;
        this._glycan = _glycan;
    }

    set glycan (_glycan) {
        this._glycan = _glycan;
    }

    get glycan () {
        return this._glycan;
    }

    set treeData (_treeData) {
        this._treeData = _treeData;
    }

    get treeData () {
        return this._treeData;
    }

    set shapes (_shapes) {
        this._shapes = _shapes;
    }

    get shapes () {
        return this._shapes;
    }

    // Verifies if the selection is legal for a repetion, then creates it
    start (_clickedNode, _selectedNodes) {
        const ef = new emFunction();
        const af = new appFunction();
        const vf = new visFunction();
        let nodes = [_clickedNode].concat(_selectedNodes);
        if (!this.isRepeated(nodes))
        {
            let treeNodes = this.findNodesInTree(nodes, this.treeData);
            let repEntry, repExit;
            if (this.isBranchSelected(treeNodes)) // BRANCH
            {
                repEntry = treeNodes[0].node;
                repExit = this.findRepExit(treeNodes[0], this.treeData, _clickedNode, _selectedNodes);
                if (repExit.length !== 1) // If the rep unit has 2 exits
                {
                    return;
                }
                repExit = repExit[0].node;
            }
            else // NO BRANCH
            {
                let entryExit = this.findEntryAndExit(treeNodes);
                if (!entryExit)
                {
                    return;
                }
                repEntry = entryExit[0];
                repExit = entryExit[1];
            }

            if (repExit !== undefined) // Doesn't finish by a fork
            {
                let min = prompt("Minimum number of repetitions");
                if (min == null || min === "")
                {
                    return;
                }
                let max = prompt("Maximum number of repetitions");
                if (max == null || max === "")
                {
                    return;
                }
                let donor = prompt("Donor Position on the "+repExit.monosaccharideType.name + " (\"?\" for unknown linkage)");
                if (donor !== "?" && (donor > ef.getNumberCarbons(repExit) || donor < 1))
                    return;
                let acceptor = prompt("Acceptor Position on the "+repEntry.monosaccharideType.name + " (\"?\" for unknown linkage)");
                if (acceptor !== "?" && (acceptor > 3 || acceptor < 1))
                    return;
                let id = af.randomString(7);
                let repeatingUnit = new RepeatingUnit(id,treeNodes,min,max,repEntry,repExit,donor,acceptor);
                for  (let node of nodes)
                {
                    vf.findNodeInTree(this.treeData, node).node = repeatingUnit;
                    node.repeatingUnit = repeatingUnit;
                }
            }
        }

        return;
    }

    // Checks if the selection array "nodes" is linear or has a fork
    isBranchSelected (nodes) {
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
    }

    // Find the entry and exit of a bunch of nodes (for repeating units)
    findEntryAndExit (nodes) {
        let maxDepth = nodes[0].depth;
        let minDepth = nodes[0].depth;
        let maxNode = nodes[0].node;
        let minNode = nodes[0].node;
        let unselectedChildren = 0;
        for (let node of nodes)
        {
            unselectedChildren += this.countUnselectedChildren(node, nodes);
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
    }

    // Find the exit(s) of a group of nodes (for repeating unit)
    findRepExit (root, _treeData, _clickedNode, _selectedNodes) {
        let wholeSelection = [_clickedNode].concat(_selectedNodes);
        let treeNode = this.findNodesInTree(wholeSelection, _treeData);
        let exits = [];
        let stack = [root];

        while (stack.length > 0)
        {
            let node = stack.pop();
            if (this.countUnselectedChildren(node, treeNode) === 1)
            {
                if (!exits.includes(node))
                    exits.push(node);
            }
            if (node.children !== undefined)
            {
                for (let child of node.children)
                {
                    if (treeNode.includes(child))
                        stack.push(child);
                }
            }
        }
        return exits;
    }

    // Turns an array of Monosaccharides into an array of tree nodes
    findNodesInTree (arr, _treeData) {
        let ret = [];
        const vf = new visFunction();
        for (let i in arr)
        {
            ret[i] = vf.findNodeInTree(_treeData,arr[i]);
        }
        return ret;
    }

    // Check if any of the nodes in arr are already in a REP
    isRepeated (arr) {
        for (let node of arr)
        {
            if (node.repeatingUnit !== undefined)
            {
                return true;
            }
        }
        return false;
    }

    /**
        Used to check if the repetition can be done on the array "nodes".
        If there are more than 1 unselected children in the array, there are several exits to the repeating unit, which is impossible.
        If there are 0 unselected children, the repetition is only possible if there are no branches selected:
        If you select the end of a linear glycan, there are no exits because the last selected node is the last node of the glycan (Repetition OK)
        however, if there is a branch an no unselected children, the group of nodes ends with a fork, which is impossible
     */
    countUnselectedChildren (node, nodes) {
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
    }
}