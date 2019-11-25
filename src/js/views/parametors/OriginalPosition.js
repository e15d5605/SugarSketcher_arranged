
export default class OriginalPosition {
    constructor (_x, _y) {
        this.x = (_x === undefined) ? 600 : _x;
        this.y = (_y === undefined) ? 200 : _y;
    }

    set posX (_x) {
        this.x = _x;
    }

    set posY (_y) {
        this.y = _y;
    }

    get posX () {
        return this.x;
    }

    get posY () {
        return this.y;
    }
}