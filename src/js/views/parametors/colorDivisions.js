import {Enum} from "enumify";

export default class colorDivisions extends Enum {
    getColorDivisions () {
        let ret = [];
        ret.push(this.getColorDivision("whiteColor"));
        ret.push(this.getColorDivision("blueColor"));
        ret.push(this.getColorDivision("greenColor"));
        ret.push(this.getColorDivision("yellowColor"));
        ret.push(this.getColorDivision("orangeColor"));
        ret.push(this.getColorDivision("pinkColor"));
        ret.push(this.getColorDivision("purpleColor"));
        ret.push(this.getColorDivision("lightBlueColor"));
        ret.push(this.getColorDivision("brownColor"));
        ret.push(this.getColorDivision("redColor"));

        return ret;
    }

    getColorDivision(value) {
        switch (value) {
            case "whiteColor": return colorDivisions.WHITE;
            case "blueColor": return colorDivisions.BLUE;
            case "greenColor": return colorDivisions.GREEN;
            case "yellowColor": return colorDivisions.YELLOW;
            case "orangeColor": return colorDivisions.ORANGE;
            case "pinkColor": return colorDivisions.PINK;
            case "purpleColor": return colorDivisions.PURPLE;
            case "lightBlueColor": return colorDivisions.LIGHTBLUE;
            case "brownColor": return colorDivisions.BROWN;
            case "redColor": return colorDivisions.RED;
        }
    }

    getDivision(value) {
        switch (value) {
            case "whiteColor": return colorDivisions.WHITE.division;
            case "blueColor": return colorDivisions.BLUE.division;
            case "greenColor": return colorDivisions.GREEN.division;
            case "yellowColor": return colorDivisions.YELLOW.division;
            case "orangeColor": return colorDivisions.ORANGE.division;
            case "pinkColor": return colorDivisions.PINK.division;
            case "purpleColor": return colorDivisions.PURPLE.division;
            case "lightBlueColor": return colorDivisions.LIGHTBLUE.division;
            case "brownColor": return colorDivisions.BROWN.division;
            case "redColor": return colorDivisions.RED.division;
        }
    }

    getColor (value) {
        switch (value) {
            case "whiteColor": return colorDivisions.WHITE.display_division;
            case "blueColor": return colorDivisions.BLUE.display_division;
            case "greenColor": return colorDivisions.GREEN.display_division;
            case "yellowColor": return colorDivisions.YELLOW.display_division;
            case "orangeColor": return colorDivisions.ORANGE.display_division;
            case "pinkColor": return colorDivisions.PINK.display_division;
            case "purpleColor": return colorDivisions.PURPLE.display_division;
            case "lightBlueColor": return colorDivisions.LIGHTBLUE.display_division;
            case "brownColor": return colorDivisions.BROWN.display_division;
            case "redColor": return colorDivisions.RED.display_division;
        }
    }
}

// Color Divisions with all possible colors
colorDivisions.initEnum({
    WHITE: {
        division: "whiteColor",
        display_division: '#FFFFFF'
    },
    BLUE: {
        division: "blueColor",
        display_division: '#0090BC'
    },
    GREEN: {
        division: "greenColor",
        display_division: '#00A651'
    },
    YELLOW:
    {
        division: "yellowColor",
        display_division: '#FFD400'
    },
    ORANGE: {
        division: "orangeColor",
        display_division: '#F47920'
    },
    PINK: {
        division: "pinkColor",
        display_division: '#F69EA1'
    },
    PURPLE: {
        division: "purpleColor",
        display_division: '#A54399'
    },
    LIGHTBLUE: {
        division:"lightBlueColor",
        display_division: '#8FCCE9'
    },
    BROWN: {
        division:"brownColor",
        display_division: '#A17A4D'
    },
    RED: {
        division:"redColor",
        display_division: '#ED1C24'
    }
});

//original param from menu.js
// Color Divisions with all possible colors
/*
var colorDivisions = [{
    division: "whiteColor",
    display_division: '#FFFFFF'
}, {
    division: "blueColor",
    display_division: '#0090BC'
}, {
    division: "greenColor",
    display_division: '#00A651'
}, {
    division: "yellowColor",
    display_division: '#FFD400'
}, {
    division: "orangeColor",
    display_division: '#F47920'
}, {
    division: "pinkColor",
    display_division: '#F69EA1'
}, {
    division: "purpleColor",
    display_division: '#A54399'
}, {
    division:"lightBlueColor",
    display_division: '#8FCCE9'
}, {
    division:"brownColor",
    display_division: '#A17A4D'
}, {
    division:"redColor",
    display_division: '#ED1C24'
}];
 */