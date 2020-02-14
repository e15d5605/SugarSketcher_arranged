/**
 * Author:  Davide Alocci
 * Version: 0.0.1
 */

//import createjs from "createjs-easeljs";
const createjs = require("createjs-easeljs");

export default class Node extends createjs.Container {
    constructor(id){
        super();
        if(typeof id == 'undefined'){
            throw "The parameter id be undefined";
        } else{
            this.id = id;
        }
    }

    getId(){
        return this.id;
    }
}