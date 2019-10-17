/**
 * Created by Renaud on 17/07/2017.
 */


import DonorPosition from "./dictionary/DonorPosition";
import AcceptorPosition from "./dictionary/AcceptorPosition";
import createjs from "createjs-easeljs";

export default class RepeatingUnit extends createjs.Container {
    constructor(id,nodes,min,max,entry,exit,donorPosition,acceptorPosition)
    {
        super();
        this.id = id;
        this.nodes = nodes;

        if (min === "?") {
            this.min = min;
        } else {
            this.min = parseInt(min);
        }

        if (max === "?") {
            this.max = max;
        } else {
            this.max = parseInt(max);
        }

        if (donorPosition === "?") {
            this.donorPosition = DonorPosition.UNDEFINED;
        } else {
            this.donorPosition = donorPosition;
        }

        if (acceptorPosition === "?") {
            this.acceptorPosition = AcceptorPosition.UNDEFINED;
        } else {
            this.acceptorPosition = acceptorPosition;
        }
    }



}