import MonosaccharideGlycoCT from "../models/io/glycoCT/MonosaccharideGlycoCT";

export default class emFunction {

    /**
     * Creates a tree from the Glycan
     * Called after using the parser, which only returns a Glycan
     * @returns {Array}
     */
    generateTree(_glycan) {
        // Put parentId in each node
        let nodes = _glycan.graph.nodes();
        for (let nodePos in nodes)
        {
            let parent;
            for (let edge of _glycan.graph.edges())
            {
                if (edge.target == nodes[nodePos].id)
                {
                    parent = edge.sourceNode;
                }
            }
            if (parent !== undefined)
                nodes[nodePos] = {"node":nodes[nodePos],"parentId":parent.id,"children":[]};
            else
                nodes[nodePos] = {"node":nodes[nodePos],"children":[]};
        }

        // Switch to tree view
        let map = {}, node, roots = [];
        let parentsIds = {};
        let nodesDepths = {};
        for (let i = 0; i < nodes.length; i += 1) {
            node = nodes[i];
            node.children = [];
            map[node.node.id] = i; // use map to look-up the parents
            if (node.parentId !== undefined) {
                nodes[map[node.parentId]].children.push(node);
                parentsIds[node.node.id] = node;
                if (node.node.id !== node.parentId)
                    nodes[map[node.parentId]].parent = parentsIds[node.parentId];

                if (nodesDepths[node.node.id] === undefined)
                {
                    nodes[map[node.parentId]].depth = nodesDepths[node.parentId]+1;
                    nodesDepths[node.node.id] = nodesDepths[node.parentId]+1;
                }

                delete nodes[map[node.parentId]].parentId;
            } else {
                roots = node;
                parentsIds[node.node.id] = node;
                nodesDepths[node.node.id] = 0;
                roots.depth = 0;
            }
        }

        delete roots.parent;

        return roots;
    }

    /**
     * Returns the number of carbons the residue can be linked by
     */
    getNumberCarbons(node)
    {
        if (node === undefined)
        {
            return 6;
        }
        const monoName = node.monosaccharideType.name;
        let monoType = MonosaccharideGlycoCT[monoName];
        if (monoType === undefined)
        {
            if (monoName.startsWith("d")) {
                monoType = MonosaccharideGlycoCT[monoName.substring(0, 4)];
            }
            if (monoName.startsWith("Sixd")) {
                monoType = MonosaccharideGlycoCT[monoName.substring(0, 7)];
            }
            if (monoName.startsWith("Neu")) {
                monoType = MonosaccharideGlycoCT.Kdn;
            }
            if (monoType === undefined) {
                monoType = MonosaccharideGlycoCT[monoName.substring(0, 3)];
            }

            /*
            monoType = MonosaccharideGlycoCT[monoName.substring(0,3)];
            if (monoType === undefined)
            {
                monoType = MonosaccharideGlycoCT[monoName.substring(0,4)];
                if (monoType === undefined && monoName.substring(0,3) === "Neu")
                {
                    monoType = MonosaccharideGlycoCT.Kdn;
                }
            }
             */
        }
        let glycoct = monoType.glycoct;
        if (glycoct.indexOf("PEN") !== -1)
        {
            return 5;
        }
        else if (glycoct.indexOf("NON") !== -1)
        {
            return 9;
        }
        else
        {
            return 6;
        }
    }
}