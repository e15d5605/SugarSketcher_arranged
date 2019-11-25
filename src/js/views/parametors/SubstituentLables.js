import {Enum} from "enumify";

export default class SubstituentLabels extends Enum {

    getSubstituentLable (value) {
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
            case "undefined": return SubstituentLabels.UNDEFINED;
        }
    }
}

/*
            1: [x+14, y],
            2: [x+14, y+13],
            3: [x,y+13],
            4: [x-16,y+13],

            5: [x-22,y+5],
            6: [x-22,y-7],
            7: [x-22,y-19],

            8: [x-16,y-26],
            9: [x,y-26],
            "undefined": [x+14,y-26]
 */
SubstituentLabels.initEnum({
    ONE: {
        x:14,
        y:0
    },
    TWO: {
        x:14,
        y:13
    },
    THREE: {
        x:0,
        y:13
    },
    FOUR: {
        x:-16,
        y:13
    },
    FIVE: {
        x:-22,
        y:5
    },
    SIX: {
        x:-22,
        y:-7
    },
    SEVEN: {
        x:-22,
        y:-19
    },
    EIGHT: {
        x:-16,
        y:-26
    },
    NINE: {
        x:0,
        y:-26
    },
    UNDEFINED: {
        x:14,
        y:-26
    }
});