/**
 * Author: S.TSUCHIYA
 */

import {Enum} from "enumify";

export default class XYLinkLabels extends Enum {

    getXYLinkLabel (value) {
        switch (value) {
            case 1: return XYLinkLabels.ONE;
            case 2: return XYLinkLabels.TWO;
            case 3: return XYLinkLabels.THREE;
            case 4: return XYLinkLabels.FOUR;
            case 5: return XYLinkLabels.FIVE;
            case 6: return XYLinkLabels.SIX;
            case 7: return XYLinkLabels.SEVEN;
            case 8: return XYLinkLabels.EIGHT;
            case 9: return XYLinkLabels.NINE;
            case 'undefined': return XYLinkLabels.UNDEFINED;

        }
    }

}

/*
* 1: [4, 0],
* 2: [-3,14],
* 3: [0, 10],
* 4: [4, 0],
* 5: [0,0],
* 6: [-10,13],
* 7: [0,14],
* 8: [0,14],
* 9: [0,14],
* 'undefined': [0,14]
* */

XYLinkLabels.initEnum({
    ONE: {
        x: 4,
        y: 0
    },
    TWO: {
        x: 15,
        y: 0
    },
    THREE: {
        x: 13,
        y: 0
    },
    FOUR: {
        x: 0,
        y: 5
    },
    FIVE: {
        x: 0,
        y: 5
    },
    SIX: {
        x: 13,
        y: -10
    },
    SEVEN: {
        x: 13,
        y: -10
    },
    EIGHT: {
        x: 15,
        y: -6
    },
    NINE: {
        x: 15,
        y: -6
    },
    UNDEFINED: {
        x: 0,
        y: 5
    }
});