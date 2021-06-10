/**
 * Created by Renaud on 05/07/2017.
 */

import Substituent from "../../glycomics/nodes/Substituent";
import SubstituentType from "../../glycomics/dictionary/SubstituentType";
import GlycosidicLinkage from "../../glycomics/linkages/GlycosidicLinkage";
import GlycoCTSubstituents from "./SubstituentsGlycoCT";
import MonosaccharideType from "../../../views/glycomics/dictionary/MonosaccharideType";
import EdgeComparator from "../EdgeComparator";
import RepeatingUnit from "../../glycomics/RepeatingUnit";
import MonosaccharideGlycoCT from "./MonosaccharideGlycoCT";
import SubstituentLinkage from "../../glycomics/linkages/SubstituentLinkage";
import SubstituentsPositions from "./SubstituentsPositions";
import DonorPosition from "../../glycomics/dictionary/DonorPosition";
import AcceptorPosition from "../../glycomics/dictionary/AcceptorPosition";
import appFunction from "../../../guifunction/appFunction";
import Monosaccharide from "../../glycomics/nodes/Monosaccharide";

export default class GlycoCTWriter{

    constructor(glycan,tree){
        this.glycan = glycan;
        this.tree = tree;
        this.res = [];
        this.rep = [];
        this.edges = [];

        // 20210609, S.TSUCHIYA added
        this.nodeLists = {};
    }

    // Get SubstituentType
    getSub(label)
    {
        if (label === "Gc")
        {
            return SubstituentType.NGlycolyl;
        }
        for (let sub of SubstituentType)
        {
            if (sub.label.toLowerCase() === label.toLowerCase())
                return sub;
        }
        return undefined;
    }

    // Get MonosaccharideType
    getMono(name)
    {
        for (let mono of MonosaccharideType)
        {
            if (mono.name.toLowerCase() === name.toLowerCase())
                return mono;
        }
    }

    // Add a Substituent residue line to the formula
    writeSub(i, substituent)
    {
        let formula = "";
        // Substituents start with index + "s"
        formula += i+1 + "s:";
        let subName = substituent.substituentType.name;
        let substituentType = "";
        for (let sub of GlycoCTSubstituents) {
            if (subName.toLowerCase() === sub.name.toLowerCase()) {
                substituentType = sub.glycoct;
            }
        }
        if (substituentType === "")
        {
            for (sub of SubstituentType) {
                if (subName.toLowerCase() === sub.name.toLowerCase()) {
                    substituentType = sub.name.toLowerCase();
                }
            }
        }
        formula += substituentType + "\n";
        return formula;
    }

    // Add a substituent link to the formula
    writeSubLink(i,source, target, donorPosition, acceptorPosition)
    {
        let formula = "";
        // Substituent links start with index, and "d" or "o"
        formula += i+1 + ":" + source + this.checkSubLinkageType(source, target);

        formula += "(" + donorPosition;
        formula += "+";
        formula += acceptorPosition + ")";

        // They end with "n"
        formula += target + "n";

        formula += "\n";

        return formula;
    }

    // Add a Monosaccharide link to the formula
    writeMonoLink(i, source, target, donorPosition, acceptorPosition, prefix = "o", suffix = "d")
    {
        let formula = "";
        // Monosaccharide links start by either "n" if the source node is ending a Repeating Unit, or "o" otherwise
        formula += i + ":" + source + prefix;

        formula += "(" + donorPosition;
        formula += "+";
        formula += acceptorPosition + ")";

        // They end with "n" if the target node starts a Repeating Unit, "d" otherwise
        formula += target + suffix;

        formula += "\n";

        return formula;
    }


    // Compares 2 nodes a and b using the EdgeComparator first, then the NodeComparator if we can't decide
    comparatorFunction(a,b) {
        if (b === undefined)
        {
            return -1;
        }
        let comp = new EdgeComparator();
        let edge1 = this.getLink(a.parent.node.id,a.node.id);
        let edge2 = this.getLink(b.parent.node.id, b.node.id);
        return comp.compare(edge1,edge2);
    }

    // Basic sorting algorithm to sort a node's children to get the right order for the GlycoCT
    sort(arr) {

        let arr2 = Object.assign({},arr);
        let len = arr.length;

        for (let i = 0; i < len; i++) {
            while (i > -1) {
                if (this.comparatorFunction(arr[i],arr[i + 1]) > 0) {
                    let temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    i--;
                } else {
                    break;
                }
            }
        }
        return arr;
    }

    // Get a link between two nodes whose ids are given
    getLink(id1, id2)
    {
        for (let edge of this.glycan.graph.edges())
        {
            if ((edge.source === id1 && edge.target === id2) || (edge.source === id2 && edge.target === id1))
            {
                return edge;
            }
        }
    }

    /**
     * Puts all the info we need in the arrays res, edges and rep
     * This function is used for the main RES, but also for the RES inside a REP so we have this "unit" let to keep track of this
     * @param root
     * @param unit: id of the repeating unit if we're writing lines within a rep
     */
    generateArrays(root, unit = "")
    {
        this.res = [];
        this.edges = [];
        if (root === undefined)
        {
            this.res = [];
            this.edges = [];
            this.rep = [];
            return;
        }
        let stack = [];
        stack.push(root);
        if (root.node !== undefined)
        {
            // We go through the tree
            while (stack.length > 0)
            {
                let node = stack.pop();
                let nodeUnit = node.node.repeatingUnit;
                // if (we're not writing for a REP && current node is in no REP) || (we're writing for a REP && the current's node's repeating unit is the unit we're writing for)
                if (unit === "" && nodeUnit === undefined || unit !== "" && (nodeUnit !== undefined && nodeUnit.id === unit))
                {
                    this.res.push(node);
                    if (this.res.length > 1) // if we have at least 2 nodes : add link
                    {
                        this.edges.push(this.getLink(node.parent.node.id,node.node.id));
                    }
                }
                else
                {
                    if (unit === "") // we're not writing for a unit
                    {
                        if (node.parent !== undefined && node.parent.node.repeatingUnit !== nodeUnit) // If child is the first of the repeating unit
                        {
                            this.edges.push(this.getLink(node.parent.node.id,node.node.id));
                        }
                        else if (nodeUnit !== undefined)
                        {
                            if (node.children !== undefined)
                            {
                                // We go through the children, if they are also part of the unit we add the link
                                for (let rootChild of node.children)
                                {
                                    if (rootChild.node.repeatingUnit !== nodeUnit)
                                    {
                                        this.edges.push(this.getLink(rootChild.node.id,node.node.id));
                                    }
                                }
                            }
                        }
                        // we add the res to the residue list
                        if (!this.res.includes(nodeUnit))
                        {
                            this.res.push(nodeUnit);
                        }
                    }

                }

                // Finally we add the children to the stack, in the right order
                let children = node.children;
                if (children !== undefined)
                {
                    if (children.length > 1)
                    {
                        children = this.sort(children);
                    }
                    for (let child of children) {
                        stack.push(child);
                    }
                }
            }
        }
        else
        {
            this.res = [];
        }
    }

    /**
     * This function writes a RES section (main or in a REP) by reading in the arrays prepared by generateArrays()
     * @param resId
     * @param repId
     * @param res
     * @param associatedSubs: e.g: GalNAc -> Gal + associatedSub (NAc)
     * @param repNumber: number of the current REP (REP1, REP2...)
     * @param offset: when we call it several times, the residues' indices don't start from 0
     * @returns {[*,*]}
     */
    generateRES(resId, repId, res, associatedSubs, repNumber, offset = 0) { // Offset: if we have some Repeating Units, we generate the RES section within the REP
        // with this function, but the offset will create a continuity with the previous indexes
        let formula = "RES\n";
        let i;
        // For every residue (whether it's a sub, mono, or rep)
        for (i = 0; i < res.length; i++)
        {
            if (res[i] instanceof RepeatingUnit) // If the residue is a REP
            {
                formula += i+1+offset + "r:r" + repNumber;
                resId[res[i].id] = i+1+offset;
                repId[res[i].id] = repNumber;
                repNumber++;
                formula += "\n";
            }
            else if (res[i].node instanceof Substituent) // If the residue is a sub
            {
                formula += this.writeSub(i+offset,res[i].node);
                resId[res[i].node.id] = i+1+offset;
            }
            else // If the residue is a Monosaccharide
            {
                resId[res[i].node.id] = i+1+offset;
                formula += i+1+offset + "b:";
                switch(res[i].node._anomericity.name) {
                    case "ALPHA":
                        formula += "a";
                        break;
                    case "BETA":
                        formula += "b";
                        break;
                    default:
                        formula += "x";
                        break;
                }
                formula += "-";

                let resName = res[i].node._monosaccharideType.name;

                // In this function, we'll rename weird Monosaccharides names so we can recognize them more easily.
                // E.g: Neu5Ac => KdnNAc so we can recognize Kdn and NAc
                // Nonulosonates exceptions:
                switch (resName)
                {
                    case "Neu5Ac":
                        resName = "KdnNAc";
                        break;
                    case "Neu5Gc":
                        resName = "KdnGc";
                        break;
                    case "Neu":
                        resName = "KdnN";
                        break;
                    case "MurNGc":
                        resName = "MurGc";
                        break;
                }

                let transform;
                let appFunc = new appFunction();

                // These types either don't need a specified isomericity or already bear it by default in their glycoct in the database
                const isoExceptions = ["Hex","dHex","HexA","HexN","ddHex","HexNAc","dHexNAc","Pen","Oli","Abe","Col","Nonu","LDManHep","DDManHep"];

                if (!isoExceptions.includes(resName)) // Exceptions
                {
                    switch(res[i].node._isomer.name) {
                        case "L":
                            formula += "l";
                            break;
                        case "D":
                            formula += "d";
                            break;
                        default:
                            formula += "x";
                            break;
                    }
                }

                if (MonosaccharideGlycoCT[resName] !== undefined) // if the residue has a defined name
                {
                    formula += MonosaccharideGlycoCT[resName].glycoct;
                    transform = MonosaccharideGlycoCT[resName].transform;
                }
                else // It can be that the residue is a Mono+Sub (GalNAc...)
                {
                    let monoName, subName, assocSubType, assocSub, donorPosition;
                    if (MonosaccharideGlycoCT[resName.substring(0,3)] !== undefined) // If the 3 first letters make a monosaccharide
                    {
                        // We get the raw monosaccharide type, and we put the substituent in an array to be treated later
                        monoName = resName.substring(0,3);
                        subName = resName.substring(3);
                        formula += MonosaccharideGlycoCT[monoName].glycoct;
                        transform = MonosaccharideGlycoCT[monoName].transform;
                        assocSubType = this.getSub(subName);
                        assocSub = new Substituent(appFunc.randomString(7),assocSubType);
                        if (SubstituentsPositions[resName] !== undefined) // Should always be defined
                        {
                            donorPosition = SubstituentsPositions[resName].position;
                        }
                        associatedSubs.push([assocSub,i+1+offset,donorPosition]);
                    }
                    else if (MonosaccharideGlycoCT[resName.substring(0,4)] !== undefined) // If the 4 first letters make a monosaccharide. e.g Nonu
                    {
                        // See above
                        monoName = resName.substring(0,4);
                        subName = resName.substring(4);
                        formula += MonosaccharideGlycoCT[monoName].glycoct;
                        transform = MonosaccharideGlycoCT[monoName].transform;
                        assocSubType = this.getSub(subName);
                        assocSub = new Substituent(appFunc.randomString(7),assocSubType);
                        if (SubstituentsPositions[resName] !== undefined) // Should always be defined
                        {
                            donorPosition = SubstituentsPositions[resName].position;
                        }
                        associatedSubs.push([assocSub,i+1+offset, donorPosition]);
                    }
                }


                // These exceptions already bear their ringType in their glycoct
                const ringExceptions = ["Kdn", "KdnNAc", "KdnGc", "KdnN", "Kdo", "Fru"];
                if (!ringExceptions.includes(resName)) // Ring exceptions
                {
                    formula += "-";
                    switch (res[i].node._ringType.name) {
                        case "P":
                            formula += "1:5";
                            break;
                        case "F":
                            formula += "1:4";
                            break;
                        default:
                            formula += "x:x";
                            break;
                    }
                }

                formula += transform;


                formula += "\n";
            }
            // 20210609, S.TSUCHIYA added
            this.nodeLists[i + 1] = res[i].node;
            //
        }
        // Finally we treat the associatedSubs
        for (let pair of associatedSubs)
        {
            let associatedSub = pair[0];
            formula += this.writeSub(i+offset, associatedSub);
            i++;
            pair[0] = i + offset; // 20210601, S.TSUCHIYA modified

            // 20210609, S.TSUCHIYA added
            this.nodeLists[i + offset] = associatedSub;
            //
        }

        return [i+offset,formula];
    }

    /**
     * This function writes a LIN section (main or in a REP) by reading in the arrays prepared by generateArrays()
     * @param resId
     * @param associatedSubs: e.g: GalNAc -> Gal + associatedSub (NAc)
     * @param offset: when we call it several times, the residues' indices don't start from 0
     * @param unit: if we are writing for a unit
     * @returns {[*,*]}
     */
    generateLIN(resId, associatedSubs, offset = 0, unit = "") {
        let formula = "";
        let i;
        if (this.res.length + associatedSubs.length > 1)
        {
            formula += "LIN\n";
            let edges = this.edges;
            let prevSource = 0, prevTarget = 0;
            for (i = 0; i < edges.length; i++)
            {
                // We get the link information
                let source = (edges[i].sourceNode.repeatingUnit === undefined || unit !== "") ? resId[edges[i].sourceNode.getId()] : resId[edges[i].sourceNode.repeatingUnit.id];
                let donorPosition = edges[i].donorPosition.value === "undefined" ? -1 : edges[i].donorPosition.value;
                let acceptorPosition;
                if (edges[i] instanceof SubstituentLinkage)
                    acceptorPosition = 1;
                else if (edges[i].acceptorPosition.value === "undefined")
                    acceptorPosition = 1;
                else
                    acceptorPosition = edges[i].acceptorPosition.value;


                let target = (edges[i].targetNode.repeatingUnit === undefined || unit !== "") ? resId[edges[i].targetNode.getId()] : resId[edges[i].targetNode.repeatingUnit.id];

                if (prevSource !== source || prevTarget !== target) // Cheap fix to this bug: When operating with repeating units, some links are duplicated
                {
                    prevSource = source;
                    prevTarget = target;

                    if (edges[i] instanceof GlycosidicLinkage)
                    {
                        let prefix = "o";
                        let suffix = "d";
                        let sourceRep = this.findNodeInTree(this.tree,edges[i].sourceNode).node.repeatingUnit;
                        let targetRep = this.findNodeInTree(this.tree,edges[i].targetNode).node.repeatingUnit;
                        // Set the prefix and suffix to get the right ones according to repeating units
                        if (sourceRep !== targetRep)
                        {
                            if (sourceRep !== undefined)
                            {
                                prefix = "n";
                            }
                            if (targetRep !== undefined)
                            {
                                suffix = "n";
                            }
                        }
                        formula += this.writeMonoLink(i+1+offset, source, target, donorPosition, acceptorPosition, prefix, suffix);
                    }
                    else
                    {
                        formula += this.writeSubLink(i+offset, source, target, donorPosition, acceptorPosition);
                    }
                }
                else
                {
                    offset--; // The following of the cheap fix above: As the link gets duplicated, "i" is 1 higher than wanted, so let's decrease "offset"
                }

            }


            for (let pair of associatedSubs)
            {
                // 20210601, S.TSUCHIYA modified
                formula += this.writeSubLink(i+offset, pair[1], pair[0], pair[2], 1);
                i++;
            }
            return [i+offset, formula];
        }
        return [0, ""];
    }

    /**
     * Main function called from outside the class to return the final formula
     * @returns {*}
     */
    exportGlycoCT() {
        let resId = {};
        let repId = {};
        this.generateArrays(this.tree);
        let res = this.res;
        let associatedSubs = [];
        if (res.length === 0)
        {
            return "";
        }
        let repNumber = 1;

        // RES
        let resInfo = this.generateRES(resId, repId, res, associatedSubs, repNumber);
        let formula = resInfo[1];
        let lastResId = resInfo[0];

        // LIN
        let linInfo = this.generateLIN(resId, associatedSubs);
        formula += linInfo[1];
        let lastLinId = linInfo[0];


        // REP

        for (let residue of this.res)
        {
            if (residue instanceof RepeatingUnit)
            {
                this.rep.push(residue);
            }
        }
        if (this.rep.length !== 0) // if we have REPs
        {
            formula += "REP\n";
            for (let rep of this.rep)
            {
                this.generateArrays(this.findRepMinDepth(rep),rep.id);
                let entryId = lastResId+1;
                associatedSubs = [];
                resInfo = this.generateRES(resId,repId,this.res,associatedSubs,repNumber,lastResId);
                lastResId = resInfo[0];
                let exitId = lastResId;
                formula += "REP" + repId[rep.id] + ":" + exitId + "o(";
                //TODO: 結合位置がundefinedの場合に対応できていない
                formula += rep.donorPosition === DonorPosition.UNDEFINED ? "-1" : rep.donorPosition;
                formula += "+";
                formula += rep.acceptorPosition === AcceptorPosition.UNDEFINED ? "-1" : rep.acceptorPosition;
                formula += ")" + entryId + "d=";
                formula += rep.min === "?" ? "-1" : rep.min;
                formula += "-";
                formula += rep.max === "?" ? "-1" : rep.max;
                formula += "\n" + resInfo[1];
                linInfo = this.generateLIN(resId,associatedSubs,lastLinId,rep.id);
                lastLinId = linInfo[0];
                formula += linInfo[1];
            }
        }

        if (formula.substring(formula.length-1) === '\n') // Remove final \n
        {
            formula = formula.substring(0,formula.length-1);
        }

        return formula;
    }

    // Returns the node with the minimum depth in tree (aka the entry)
    findRepMinDepth(rep)
    {
        let minVal = rep.nodes[0].depth;
        let minNode = rep.nodes[0];
        for (let node of rep.nodes)
        {
            if (node.depth < minVal)
            {
                minVal = node.depth;
                minNode = node;
            }
        }
        return minNode;
    }

    findNodeInTree (tree, node1) {
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
    }

    // 20210609, S.TSUCHIYA added
    checkSubLinkageType (sourceID, targetID) {
        const source = this.nodeLists[sourceID];
        const target = this.nodeLists[targetID];

        if (target instanceof Monosaccharide) return;

        const substituentType = target.substituentType;

        if (substituentType.label.startsWith("N")) {
            return "d";
        } else {
            return "o";
        }
    }
}