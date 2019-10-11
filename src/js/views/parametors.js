//Values
//let smilesinchiconvertbackendurl = "http://127.0.0.1:8889/getinchismiles.cgi"; //local
let smilesinchiconvertbackendurl = "http://129.194.71.205/cgi-bin/sugarsketcher.cgi"; //test

let glycan;
let repeatUnitConfirm = 0; // When only one node is selected, and the user clicks on Repeat Unit, he has to click a second time to confirm. This let keeps track of the number of clicks
let quickIsomer = "";
let quickRingType = "";
let quickAcceptorPosition = "";
let treeData = {};
let shapes = {};
let clickedNode = null;
let selectedNodes = [];
let copiedNode = null;
let rootDonorPosition, rootAcceptorPosition;
let ctrl; // Boolean if ctrl is held
let quickMode; // Boolean if Quick Mode button is toggled on
let exporting; // Boolean to know if we are exporting the SVG of the glycan (to remove the selection from the final image)
let XYlinkLabels = {1: [4, 0], 2: [-3,14], 3: [0, 10], 4: [4, 0], 5: [0,0], 6: [-10,13], 7: [0,14], 8: [0,14], 9: [0,14], 'undefined': [0,14]};
let progress; // amount of progress for the green progress bar throughout the menus (out of 7)
let mouseX, mouseY; // lets to stock the mouse position
let infosTable = []; // Table with all informations selected by the user

const emFunc = new sb.emFunction();
const appFunc = new sb.appFunction();
const visFunc = new sb.visFunction();
const menuFunc = new sb.menuFunction();
