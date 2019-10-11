import {Enum} from "enumify";

export default class SubstituentLabels extends Enum {

    getSubstituentLabel (value) {
        switch (value) {
            case 1: return SubstituentLabels.ONE;
            case 2: return SubstituentLabels.TWO;
            case 3: return SubstituentLabels.THREE;
            case 4: return SubstituentLabels.FOUR;
            case 5: return SubstituentLabels.FIVE;
            case 6: return SubstituentLabels.SIX;
            case 7: return SubstituentLabels.SEVEN;
            case 8: return SubstituentLabels.EIGHT;
            case 9: return SubstituentLabels.NINE;
            case 'undefined': return SubstituentLabels.UNDEFINED;
        }
    }
}

/*
1: [x-7, y+20],
2: [x+16, y],
3: [x+16,y-16],
4: [x-7, y-28],
5: [x+16, y+8],
6: [x-28, y-16],
7: [x-28, y+8],
8: [x-28, y+16],
9: [x+16, y+16],
"undefined": [x-28, y]
*/
SubstituentLabels.initEnum({
    ONE: {
        x: -7,
        y: 20
    },
    TWO: {
        x: 16,
        y: 0
    },
    THREE: {
        x: 16,
        y: -16
    },
    FOUR: {
        x: -7,
        y: -28
    },
    FIVE: {
        x: 16,
        y: 8
    },
    SIX: {
        x: -28,
        y: -16
    },
    SEVEN: {
        x: -28,
        y: 8
    },
    EIGHT: {
        x: -28,
        y: 16
    },
    NINE: {
        x: 16,
        y: 16
    },
    UNDEFINED: {
        x: -28,
        y: 0
    }
});