const {Enum} = require("enumify");

export default class OriginalPosition extends Enum {
}

OriginalPosition.initEnum({
    x: {
        value: 200
    },
    y: {
        value: 600
    }
});