/**
 * Author: S.TSUCHIYA
 */
import {Enum} from 'enumify';
const gap = 50;

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
        x: gap,
        y: 0
    },
    TWO: {
        x: 0,
        y: gap
    },
    THREE: {
        x: -1*gap,
        y: gap
    },
    FOUR: {
        x: -1*gap,
        y: 0
    },
    FIVE: {
        x: -1*gap,
        y: 0
    },
    SIX: {
        x: -1*gap,
        y: -1*gap
    },
    SEVEN: {
        x: 0,
        y: -1*gap
    },
    EIGHT: {
        x: 0,
        y: -1*gap
    },
    NINE: {
        x: 0,
        y: -1*gap
    },
    UNDEFINED: {
        x: 0,
        y: -1*gap
    }
});