/**
 * Author: S.TSUCHIYA
 */
import {Enum} from 'enumify';

export default class XYvalues extends Enum {

    getXYvalue(value) {
        switch (value) {
            case 1: return XYvalues.ONE;
            case 2: return XYvalues.TWO;
            case 3: return XYvalues.THREE;
            case 4: return XYvalues.FOUR;
            case 5: return XYvalues.FIVE;
            case 6: return XYvalues.SIX;
            case 7: return XYvalues.SEVEN;
            case 8: return XYvalues.EIGHT;
            case 9: return XYvalues.NINE;
            case 'undefined': return XYvalues.UNDEFINED;
        }
    }
}

XYvalues.initEnum({
    ONE: {
        x: 1,
        y: 1
    },
    TWO: {
        x: 0,
        y: 1
    },
    THREE: {
        x: -1,
        y: 1
    },
    FOUR: {
        x: -1,
        y: 0
    },
    FIVE: {
        x: -1,
        y: 0
    },
    SIX: {
        x: -1,
        y: -1
    },
    SEVEN: {
        x: 0,
        y: -1
    },
    EIGHT: {
        x: 1,
        y: -1
    },
    NINE: {
        x: 1,
        y: -1
    },
    UNDEFINED: {
        x: 0,
        y: -1
    }
});