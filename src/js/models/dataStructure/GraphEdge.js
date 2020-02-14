/**
 * Author:  Davide Alocci
 * Version: 0.0.1
 */

//import createjs from "createjs-easeljs";
if (typeof window !== "undefined") {
    createjs = require("createjs-easeljs");
}

export default class Edge extends createjs.Container {
    /**
     * Create a new Edge using nodes.
     * @param {string} id the edge id
     * @param {Node} sourceNode The source node
     * @param {Node} targetNode The target Node
     */
    constructor(id, sourceNode, targetNode){
        super();
        if (typeof id == 'undefined' || typeof sourceNode == 'undefined' || typeof targetNode  == 'undefined'){
            throw "The parameter id, sourceNode and targetNode cannot be undefined";
        }

        //WARNING: Do not change this properties name !
        //They are used by the graph class in Sigma.js
        this.id = id;
        try {
            this.source = sourceNode.getId();
            this.target = targetNode.getId();
        } catch (err){
            throw 'SourceNode and TargetNode must have a getId() method. Please use or extend the Node obj like in Monosaccharide or Substituent';
        }
        // end sigma.js strict parameter

        this.sourceNode = sourceNode;
        this.targetNode = targetNode;
    }

    getEdgeId(){
        return this.id;
    }

    getEdgeSource(){
        return this.sourceNode;
    }

    getEdgeTarget(){
        return this.targetNode;
    }
}

