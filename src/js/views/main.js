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
let clickedNode = undefined;
let selectedNodes = [];
let copiedNode = undefined;
let rootDonorPosition, rootAcceptorPosition;
let ctrl; // Boolean if ctrl is held
let quickMode; // Boolean if Quick Mode button is toggled on
let exporting; // Boolean to know if we are exporting the SVG of the glycan (to remove the selection from the final image)
let progress; // amount of progress for the green progress bar throughout the menus (out of 7)
let mouseX, mouseY; // lets to stock the mouse position
let infosTable = {}; // Table with all informations selected by the user

const rootPos = new sb.OriginalPosition();
const emFunc = new sb.emFunction();
const appFunc = new sb.appFunction();
const visFunc = new sb.visFunction();
const menuFunc = new sb.menuFunction();

// Function called when document is ready


$(document).ready(function() {
    progress = 0;
    ctrl = false;
    exporting = false;
    quickMode = false;
    updateMenu();  // Update menu
    addHoverManagersInfos(); // Add hover managers for informations
    addHoverManagersCarbons(); // Add hover managers for carbons

    var svg = d3.select("#progressChart");
    d3.selectAll("#progressBar").remove();
    svg.append("rect")
        .attr("width", progress/7*1000)
        .attr("height", "4px")
        .attr("id", "progressBar")
        .attr("fill", "#02b600");

    // Add structures to the select element
    var div = document.getElementById("structuresDiv");
    var selectList = document.createElement("select");
    selectList.id = "structure";
    div.appendChild(selectList);
    for (var s of sb.Structures) {
        var option = document.createElement("option");
        option.value = s.glycoct;
        option.text = s.name;
        selectList.appendChild(option);
    }
    var submit = document.createElement("input");
    submit.type = "submit";
    submit.id = "submitStructure";
    div.appendChild(submit);

    d3.select("#submitStructure").on('click', function() {
        //console.log(test.getBoxValue());

        var glycoct = $('#structure').val();
        //treeData = {};
        selectedNodes = [];
        if (glycan)
            glycan.clear();
        var parser = new sb.GlycoCTParser(glycoct);
        glycan = parser.parseGlycoCT();
//        shapes = [];
        let ret = visFunc.generateShapes(glycan, shapes, treeData);
        shapes = ret[0];
        treeData = emFunc.generateTree(glycan);
        updateRepeatingUnitsNodesInTree();
        var i = 1;
        while (glycan.graph.nodes()[glycan.graph.nodes().length-i] instanceof sb.Substituent)
        {
            i++;
        }
        clickedNode = glycan.graph.nodes()[glycan.graph.nodes().length-i];
        displayTree(treeData, shapes, glycan);
    });

    d3.select("#svgTree").on('click', function() {
        fadeOutContextMenu();
    })
        .on('contextmenu', function() {
            d3.event.preventDefault();
        });
    d3.select("#svgMenu").on('click', function() {
        fadeOutContextMenu();
    })
        .on('contextmenu', function() {
            d3.event.preventDefault();
        });
    d3.select("#svgMenu2").on('click', function() {
        fadeOutContextMenu();
    })
        .on('contextmenu', function() {
            d3.event.preventDefault();
        });
    var subChoices = d3.selectAll(".subChoice"); // Substituent choices
    subChoices.on('click', function() {
        // Push the new clicked substituent in infosTable
        infosTable["name"] = d3.select(d3.event.target).attr("value");
        displayPie(); // Dispaly the piechart to choose donor position
    });
});