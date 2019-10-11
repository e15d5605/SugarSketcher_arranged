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
        x: -3,
        y: 14
    },
    THREE: {
        x: 0,
        y: 10
    },
    FOUR: {
        x: 4,
        y: 0
    },
    FIVE: {
        x: 0,
        y: 0
    },
    SIX: {
        x: -10,
        y: 13
    },
    SEVEN: {
        x: 0,
        y: 14
    },
    EIGHT: {
        x: 0,
        y: 14
    },
    NINE: {
        x: 0,
        y: 14
    },
    UNDEFINED: {
        x: 0,
        y: 14
    }
});