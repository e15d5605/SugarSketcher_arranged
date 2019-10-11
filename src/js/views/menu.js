/**
 * Author:  Nicolas Hory
 * Version: 0.0.1
 */

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
        if (infosTable.length == 2) { // If one substituent has already been clicked, remove it from sb.infosTable
            infosTable.pop();
        }
        // Push the new clicked substituent in sb.infosTable
        infosTable.push(d3.select(d3.event.target).attr("value"));
        displayPie(); // Dispaly the piechart to choose donor position
    });
});

var menuChosenPath; // Path taken by user in the menu

// Event listeners for the shape choice
var shapeChoices= document.getElementsByClassName("shapeChoice");
for (var shape of shapeChoices) {
    shape.addEventListener('click', function(e) {
        // When a shape is clicked, we update the menu, and store the chosen shape in infosTable
        progress = 1;
        redrawProgress(0);
        infosTable.push(e.target.parentNode.id.split("Shape")[0]);
        d3.select("#svgShape").transition().style("display", "none");
        updateMenu("shape");
        if (!ctrl)
        {
            d3.select("#svgMenu").transition().style("display", "block");
        }
    });
}

// Exit button
var shapeExitButton = d3.selectAll(".cancelResidue");
shapeExitButton.on("click", function() {
    redrawProgress(progress, 0);
    progress = 0;
    reinitializeDisplayInfos(); // Reinitialize the display of informations
    reinitializeDisplayCarbons(); // Reinitialize display of carbons svg
    updateMenu(); // Update menu
});

// Cancel button in shape menu, coming back to main menu
var shapeCancelButton = d3.select("#cancelChoiceShape");
shapeCancelButton.on("click", function() {
    redrawProgress(progress, 0);
    progress = 0;
    updateMenu();
});

// Cancel button in informations svg, coming back to shape svg, managing displays
var infosCancelButton = d3.select("#cancelChoiceInfos");
infosCancelButton.on("click", function() {
    redrawProgress(progress, 1);
    progress = 1;
    infosTable.pop(); // Remove last chosen information
    // Remove last two paths taken in the menu
    menuChosenPath.pop();
    menuChosenPath.pop();
    d3.select("#svgInfos").transition().style("display", "none"); // Hide the informations svg
    reinitializeDisplayInfos(); // Reinitialize the display of informations
    updateMenu("shape"); // Update the menu
    d3.select("#svgMenu").transition().style("display", "block"); // Display the main menu
});

// Cancel button in carbon table, coming back to informations table, managing displays
var carbonCancelButton = d3.select("#cancelChoiceCarbon");
carbonCancelButton.on("click", function() {
    // Remove anomericity, isomer and ring type
    redrawProgress(progress, 2);
    progress = 2;
    infosTable.pop();
    infosTable.pop();
    infosTable.pop();
    d3.select("#svgCarbons").transition().style("display", "none"); // Hide the svg of carbon choice
    reinitializeDisplayInfos(); // Reinitialize display of informations svg
    reinitializeDisplayCarbons(); // Reinitialize display of carbons svg
    d3.select("#svgInfos").transition().style("display", "block"); // Display main menu
});

// Menu, stocking the divisions of our menu, and subdivisions
var menuAction = [{
    division: "addNode",
    display_division: "Add Node",
    subDivisions : [{
        division: "substituentNode",
        display_division: "Substituent"
    }, {
        division: "monosaccharideNode",
        display_division: "Monosaccharide",
        subDivisions: "shape"
    }]
}, {
    division: "repeatUnit",
    display_division: "Repeat Unit"
}, {
    division: "updateNode",
    display_division: "Update Node",
    subDivisions: "shape"
}];

var menu2Action = [
    {
        division: "addStructure",
        display_division: "Load Structure"
    },
    {
        division: "quickMode",
        display_division: "Toggle Quick Mode"
    },
    {
        division: "io",
        display_division: "GlycoCT/SVG",
        subDivisions: [{
            division: "exportFormula",
            display_division: "Export"
        }, {
            division: "typeFormula",
            display_division: "Import"
        }]
    },
    {
        division: "inchismiles",
        display_division: "InChI+InChIKey+SMILES",
    }
    ];


//Managing displaying more rows for subs
var substituentDisplayMore = d3.select("#displayMoreSubs"); // Button to display all substituents
substituentDisplayMore.on("click", function() {
    $('#pieLinkCarbon').css("display", "none"); // Hide the piechart
    var subsRects = d3.select("#actionsSubs"); // Rects for substituents
    var subsLabels = d3.select("#labelsSubs"); // Labels for substituents
    var subTypes = [];
    var mostUsedTypes = ["S", "P", "NAc", "Ac", "Me"]; // Most used substituent types
    // Add all substituent in an array, except the most used ones and the undefined one
    for (var type of sb.SubstituentType) {
        if (type.label != 'undefined' && mostUsedTypes.indexOf(type.label) == -1) {
            subTypes.push(type.name);
        }
    }

    // If only the 5 most used are actually displayed
    if(d3.selectAll(".subChoice")[0].length == 5) {
        var moreSubs = subsRects.append("g").attr("id", "moreSubs");
        var currentIndex = 0;
        var currentY = 40;
        // Loop to add new substituents to the menu
        while (currentIndex < subTypes.length) {
            var currentXLabels = 90; // x to place labels
            var currentXRects = 0; // x to place rects
            moreSubs.selectAll("rect").data(subTypes.slice(currentIndex, currentIndex + 5), function(d){return d;}).enter().append("rect")
                .attr("width", 180) // 1/5 of the menu
                .attr("height", 40) // Fixed height
                .attr("x",function() {
                    var tmp = currentXRects; // Temporary variable to stock current x of rects
                    currentXRects += 180; // Increase current x of rects
                    return tmp; // Return the temporary variable
                })
                .attr("y", currentY)
                .attr("rx", 15) // Corner for rect
                .attr("ry", 15) // Corner for rect
                .attr("value", function(d) {
                    return d;
                })
                .attr("class", "bar choice subChoice createdSubChoice")
                .on("click", function (d) {
                    // On click, add the information to the table and then display piechart to choose donor position
                    infosTable.push(d);
                    displayPie();
                });
            moreSubs.selectAll("text").data(subTypes.slice(currentIndex, currentIndex + 5), function(d){return d;}).enter().append("text")
                .text(function(d) {
                    return d;
                })
                .attr("x", function() {
                    var tmp = currentXLabels; // Temporary variable to stock current x of labels
                    currentXLabels += 180; // Increase current x of labels
                    return tmp; // Return the temporary variable
                })
                .attr("y", currentY + 8 )
                .attr("class", "label createdSubLabel");
            currentIndex += 5; // Increase the current index by 5
            currentXLabels = 90; // Reinitialize x of labels when ended a row
            currentY += 40; // Increase current y
            currentXRects = 0; // Reinitialize x of rects when ended a row
        }
        d3.select("#svgSubstituents").style("height", "240px"); // Increase height of substituents svg to see all the added ones
    }
    else
    {
        d3.select("#svgSubstituents").style("height", "50px");
        subsRects.select("#moreSubs").remove();
    }
});

//Cancel Button Substituent
var cancelSubButton = d3.select("#cancelChoiceSubs");
cancelSubButton.on("click", function() {
    $('#pieLinkCarbon').css("display", "none"); // Hide the piechart
    d3.select("#svgSubstituents").style("height", "40px"); // Reinitialize svg height
    d3.select("#svgSubstituents").transition().style("display", "none"); // Hide the substituent svg
    d3.selectAll(".createdSubChoice").remove(); // Remove all added rects
    d3.selectAll(".createdSubLabel").remove(); // Remove all added labels
    updateMenu(); // Update to main menu
    d3.select("#svgMenu").transition().style("display", "block"); // Display main menu
});

var cancelQuickInfos = d3.select("#cancelQuickInfos");
cancelQuickInfos.on("click", function() {
    $('#pieLinkCarbon').css("display", "none"); // Hide the piechart
    reinitializeQuickInfos();
    updateMenu(); // Update to main menu
    d3.select("#svgQuickMono").transition().style("display", "block"); // Display main menu
    progress = 0;
    redrawProgress(0);
});


/**
 * Update the menu. Can be called with or without one parameter.
 * @param chosenDivision
 */
function updateMenu(chosenDivision) {

    if (quickMode)
    {
        d3.select("#quickMode").style("fill", "#000592");
    }
    else
    {
        d3.select("#quickMode").style("fill", "#cc0000");
    }

    // Fixed size of the menu
    var menuDimensions = {
        height: 40,
        width: 1000
    };

    d3.select("#actions").selectAll("*").remove(); // Reinitialize the svg rectangles menu
    d3.select("#labels").selectAll("*").remove(); // Reinitialize the svg labels menu
    if (infosTable.length == 0)
    {
        d3.select("#actions2").selectAll("*").remove();
        d3.select("#labels2").selectAll("*").remove();
    }

    if (chosenDivision == undefined)
    {
        progress = 0;
        removeInfosChoices();
        redrawProgress(0);
    }

    var actions = d3.select("#actions"); // Rectangles
    var actions2 = d3.select("#actions2");
    var labels = d3.select("#labels"); // Labels
    var labels2 = d3.select("#labels2");

    // Set the height and width of our svg menu
    var svgMenu = d3.select("#svgMenu").attr({
        height: menuDimensions.height,
        width: menuDimensions.width
    });
    var svgMenu2 = d3.select("#svgMenu2").attr({
        height: menuDimensions.height,
        width: menuDimensions.width
    });
    var svgProgress = d3.select("#svgProgress").attr({
        height: menuDimensions.height,
        width: menuDimensions.width
    })
    var newMenuAction = [];

    // This case happens when update is called with no parameter (first update)
    if (typeof chosenDivision === 'undefined') {
        menuChosenPath = []; // Reinitialize the path
        infosTable = []; // Reinitialize the list of clicks
        // Hide all other svgs
        d3.select("#svgShape").transition().style("display", "none");
        d3.select("#svgMultiselectMenu").transition().style("display", "none");
        d3.select("#svgSubstituents").transition().style("display", "none");
        d3.select("#svgInfos").transition().style("display", "none");
        d3.select("#svgCarbons").transition().style("display", "none");
        d3.select("#svgQuickInfos").transition().style("display", "none");
        if (quickMode)
        {
            d3.select("#svgMenu").transition().style("display", "none");
            var svgQuick = d3.select("#svgQuickMono").style("height","50px").style("width","1000px").style("margin", "0 auto 10px").style("display", "block").attr("x",0);

            var common = [];
            for (var mono of sb.QuickModeMonosaccharides)
            {
                common.push(mono);
            }

            var g = svgQuick.selectAll("rect").data(common)
                .enter()
                .append("g")
                .attr("id", function (d) {
                    return d.name;
                })
                .attr("class", "shapeChoice")
                .on("click", function(d) {
                    infosTable.push("addNode");
                    infosTable.push("Monosaccharide");
                    infosTable.push(sb.MonosaccharideType[d.name].shape);

                    /*
                    var color;
                    for (var c of colorDivisions) {
                        if (c.display_division == sb.MonosaccharideType[d.name].color) {
                            color = c.division;
                        }
                    }
                     */

                    var color = sb.colorDivisions.prototype.getDivision(sb.MonosaccharideType[d.name].color);
                    infosTable.push(color);
                    quickRingType = d.ringType;
                    quickAcceptorPosition = d.acceptorPosition;
                    quickIsomer = d.isomer;
                    progress = 3;
                    redrawProgress(2);
                    updateMenu(d);
                });

            g.append("rect")
                .attr("width", 91)
                .attr("height", 40)
                .attr("x", function(d)
                {
                    return d.ordinal*91;
                })
                .attr("y", 0)
                .attr("class", "bar choice")
                .style("fill", "gray");

            g.append("path")
                .attr("class", "shapeElement")
                .attr("d", d3.superformula()
                    .size(400)
                    .type(function (d) {
                        return sb.MonosaccharideType[d.name].shape.toLowerCase(); // Get the shape of the monosaccharide type
                    }))
                .attr("transform", function (d) {
                    var rotate = 0, translate = d.ordinal*91+45;
                    var shape = sb.MonosaccharideType[d.name].shape;
                    if (shape == "star") {
                        rotate = -20;
                    } else if (shape == "triangle") {
                        rotate = 30;
                    }
                    return "translate("+translate+",20) rotate("+rotate+")";
                })
                .style("fill", function(d) {
                     return sb.MonosaccharideType[d.name].color;
                });

            g.append("text")
                .attr("class", "labelMonoChoice")
                .attr("x", function(d)
                {
                    return d.ordinal*91+45;
                })
                .attr("y", 45)
                .text(function(d) {
                    return d.name;
                });
        }
        else
        {
            d3.select("#svgQuickMono").transition().style("display", "none");
            d3.select("#svgMenu").transition().style("display", "block");
        }
        d3.select("#svgMenu2").transition().style("display", "block");
        newMenuAction = menuAction;
    } else { // Get SubDivisions that we want to update menu
        if (quickMode && sb.QuickModeMonosaccharides[chosenDivision.name]) // If quickMode
        {
            d3.select("#svgQuickMono").transition().style("display", "none");
            var svgQuick = d3.select("#svgQuickInfos").style("height","50px").style("width","1000px").style("margin", "0 auto 10px").style("display", "block");
        }
        else
        {
            menuChosenPath.push(chosenDivision);

            // If chose a color, then we hide the svg and show the svg for anomericity, isomer and type
            if (chosenDivision.indexOf("Color") > -1) {
                d3.select("#svgInfos").transition().duration(200).style("display", "block");
                d3.select("#svgMenu").transition().duration(200).style("display", "none");
                return;
            } else {
                // Get the subdivisions of chosen menu
                newMenuAction = menuFunc.getSubDivisions(menuAction, chosenDivision);
            }
        }
    }

    // If there are no subdivisions to show, then hide the menu
    if (typeof newMenuAction === 'undefined') {
        d3.select("#svgMenu").style("display", "none");
        return;
    }
    // If shape menu has to be shown
    if (newMenuAction == "shape") {
        d3.select("#svgShape").transition().style("display", "block");
        d3.select("#svgMenu").transition().style("display", "none");
        return;
    }

    menuDimensions.barWidth = menuDimensions.width / newMenuAction.length; // Calculate width of each rect of the menu
    var bars = actions.selectAll("rect").data(newMenuAction);
    var bars2 = actions2.selectAll("rect").data(menu2Action);
    var textNodes = labels.selectAll("text").data(newMenuAction); // Get all the labels of the menu
    var textNodes2 = labels2.selectAll("text").data(menu2Action);

    bars2.enter().append("rect")
        .attr("width", 1000 / 4)
        .attr("height", 40)
        .attr("y", 0)
        .attr("x", function (d, i) {
            return (1000 / 4) * i;
        })
        .attr("id", function (d) {
            return d.division;
        })
        .attr("rx", 15) // Corner for the rect
        .attr("ry", 15) // Cornet for the rect
        .attr("class",  "bar choice")
        .style("fill", function (d) {
            if (quickMode && d.division == "quickMode")
            {
                return "#000592";
            }
        })
        .on("click", function (d) {
            if (d.division == "quickMode")
            {
                quickMode = !quickMode;
                reinitializeQuickInfos();
                reinitializeDisplayCarbons();
                reinitializeDisplayInfos();
                updateMenu();
            }
            else if (d.division == "addStructure")
            {
                d3.select("#formula").style("display","none");
                d3.select("#validateFormula").style("display", "none");
                d3.select("#copyMsg").style("display", "none");

                d3.select("#structuresDiv").style("display", "block");
            }
            else if (d.division == "inchismiles")
            {
                var writer = new sb.GlycoCTWriter(glycan, treeData);
                var glycoctVal = writer.exportGlycoCT();
                d3.xhr(smilesinchiconvertbackendurl)
                    .header("Content-Type", "application/x-www-form-urlencoded")
                    .post("structure=" + encodeURIComponent(glycoctVal), function(error, response){
                        d3.select("#formula").style("display","block");
                        d3.select("#validateFormula").style("display", "none");
                        d3.select("#structuresDiv").style("display", "none");
                        var inchismilesText = response.responseText;
                        $('#formula').val(inchismilesText);
                        $('#formula').select();
                        $('#formula').focus();        
                        try {
                            var successful = document.execCommand('copy');
                            d3.select("#copyMsg")
                                .transition(1000)
                                .style("color", "green")
                                .style("opacity", 1)
                                .text("The formula has been copied to the Clipboard.");
                        } catch (err) {
                            d3.select("#copyMsg")
                                .transition(1000)
                                .style("color", "black")
                                .style("opacity", 1)
                                .text("Please use Ctrl+C.");
                        }
                        d3.select("#validateFormula").style("display", "none");
                });
            }
        }).on("mouseover", function (d) {
        // On hover of addNode, we display its two subdivisions
        if (d.division == "io") {
            if (infosTable.length == 0) // If the user is not creating a node
            {
                manageHoverIO(d, actions2);
                if (labels2.selectAll("text")[0][2])
                    labels2.selectAll("text")[0][2].remove();
                labels2.append("text").attr("class", "label").text(d.subDivisions[0].display_division).attr("x", 9000 / 16).attr("y", 8);
                labels2.append("text").attr("class", "label").text(d.subDivisions[1].display_division).attr("x", 11000 / 16).attr("y", 8);
            }
        }
    });
    textNodes2.enter().append("text")
        .attr("class", "label")
        .attr("x", function (d, i) {
            var barWidth = 250;
            return (barWidth * i) + (barWidth / 2);
        })
        .attr("y", function () {
            var barHeight = 40;
            return barHeight/5; // Choose an y to center label
        })
        .text(function (d) {
            return d.display_division;
        });

    // If we are not displaying colors
    //if (newMenuAction != colorDivisions) {
    if (!isColorDivisions(newMenuAction)) {
        d3.select("#svgMenu").style("height", "50px"); // Set height of the menu bac kto 40 px

        // Append a rect with calculated width, height; x and y
        bars.enter().append("rect")
            .attr("width", menuDimensions.barWidth)
            .attr("height", menuDimensions.height)
            .attr("y", 0)
            .attr("x", function (d, i) {
                return menuDimensions.barWidth * i;
            })
            .attr("id", function (d) {
                return d.division;
            })
            .attr("rx", 15) // Corner for the rect
            .attr("ry", 15) // Cornet for the rect
            .attr("class",  "bar choice")
            .style("fill", function (d) {
                return d.display_division
            })
            .on("click", function (d) {
                // If the update has been clicked but no node selected, error popup displayed
                if (d.division == "updateNode") {
                    if (clickedNode == null) {
                        document.getElementById("error").innerHTML = "No node selected to update !";
                        $('#error').css({'top': mouseY - 80, 'left': mouseX - 50}).fadeIn(400).delay(1000).fadeOut(400);
                        return;
                    }
                    if (clickedNode instanceof sb.Substituent) {
                        document.getElementById("error").innerHTML = "No update possible for Substituent !";
                        $('#error').css({'top': mouseY - 80, 'left': mouseX - 50}).fadeIn(400).delay(1000).fadeOut(400);
                        return;
                    }
                    // Push the information in the table and update the menu
                    infosTable.push(d.division);
                    updateMenu(d.division);
                }
                else if (d.division == "repeatUnit")
                {
                    if (glycan)
                    {
                        var svgMenu = d3.select("#svgMenu");
                        if (repeatUnitConfirm > 0)
                        {
                            menuFunc.handleRepetition(shapes, treeData, glycan, clickedNode, selectedNodes);
                            repeatUnitConfirm = 0;
                        }
                        else if (selectedNodes.length == 0)
                        {
                            svgMenu.style("height", "65px");
                            svgMenu.select("#actions").append("rect")
                                .attr("width", 1000)
                                .attr("class", "bar")
                                .attr("height", 30)
                                .attr("id", "menuSubErrorRect")
                                .attr("x", 0)
                                .attr("y", 40)
                                .style("fill", "#ffffff");
                            svgMenu.select("#labels").append("text")
                                .attr("class", "errorLabel")
                                .attr("id", "menuSubError")
                                .attr("x", 500)
                                .attr("y", 50)
                                .text("Use Ctrl + Click to select several nodes. Click again to only repeat the selected node.");
                            $('#menuSubError').fadeIn(400).delay(10000).fadeOut(400, function() {
                                svgMenu.style("height", "40px");
                                svgMenu.select("#menuSubError").remove();
                                svgMenu.select("#menuSubErrorRect").remove();
                            });
                            repeatUnitConfirm = 1;
                        }
                        else if (selectedNodes.length > 0)
                        {
                            menuFunc.handleRepetition(shapes, treeData, glycan, clickedNode, selectedNodes);
                            repeatUnitConfirm = 0;
                        }
                    }
                }
            }).on("mouseover", function (d) {
            // On hover of addNode, we display its two subdivisions
            if (d.division == "addNode") {
                manageHoverAddNode(d, actions);
                // Add the two labels for monosaccharide and substituents
                labels.selectAll("text")[0][0].remove();
                labels.append("text").attr("class", "label").text(d.subDivisions[1].display_division).attr("x", 1000 / 12).attr("y", 8);
                labels.append("text").attr("class", "label").text(d.subDivisions[0].display_division).attr("x", 250).attr("y", 8);
            }
        });
        textNodes.enter().append("text")
            .attr("class", "label")
            .attr("x", function (d, i) {
                return (menuDimensions.barWidth * i) + (menuDimensions.barWidth / 2);
            })
            .attr("y", function () {
                return menuDimensions.height/5; // Choose an y to center label
            })
            .text(function (d) {
                return d.display_division;
            });
    } else { // If we are displaying colors
        var dropShape = d3.superformula()
         .type("drop")
         .size(2500)
         .segments(3600);
        d3.select("#svgMenu").style("height", "50px"); // Update height to show circles and labels of monosaccharides
        bars.enter().append("path")
            .attr("d", dropShape)
            .attr('transform', function(d, i) {
                return "translate("+ parseInt(menuDimensions.barWidth*i+menuDimensions.barWidth/2)+",30) rotate(90)";
            })
            .attr("id", function (d) {
                return d.division;
            })
            .attr("r", 20)
            .attr("class", "bar choice choiceWhiteStroke")
            .style("fill", function (d) {
                return d.display_division;
            })
            .style("opacity", function(d) {
                // Check if the color is possible with the chosen shape, and change opacity in consequence
                var chosenShape = infosTable[infosTable.length - 1]; // Get the selected shape
                // Check if the shape is bisected
                var isBisected = false;
                if (chosenShape.indexOf("bisected") > -1) {
                    chosenShape = chosenShape.split("bisected")[1];
                    isBisected = true;
                }
                //var color = visFunc.getColorCodeFromString(d.division); // Get the clicked color
                var color = sb.colorDivisions.prototype.getColor(d.division); // Get the clicked color
                var existingMonoType = visFunc.getMonoTypeWithColorAndShape(color, chosenShape, isBisected);
                // If there is no type for this combination, lower the opacity
                if (existingMonoType == sb.MonosaccharideType.UNDEFINED) {
                    return 0.1
                } else {
                    return 1;
                }
            })
            .on("click", function (d) {
                progress = 2;
                redrawProgress(1);
                // Manage click, if combination impossible the click is not doing anything
                var chosenShape = infosTable[infosTable.length - 1]; // Get the selected shape
                // Check if the shape is bisected
                var isBisected = false;
                if (chosenShape.indexOf("bisected") > -1) {
                    chosenShape = chosenShape.split("bisected")[1];
                    isBisected = true;
                }
                //var color = visFunc.getColorCodeFromString(d.division); // Get the clicked color
                var color = sb.colorDivisions.prototype.getColor(d.division); // Get the clicked color
                var existingMonoType = visFunc.getMonoTypeWithColorAndShape(color, chosenShape, isBisected);
                // If there is no type for this combination, no action
                if (existingMonoType != sb.MonosaccharideType.UNDEFINED) {
                    infosTable.push(d.division);
                    reinitializeDisplayInfos();
                    updateMenu(d.division);
                }
            });
        textNodes.enter().append("text")
            .attr("class", "labelMonoChoice")
            .attr("x", function(d, i) {
                return 50 + i * 100;
            })
            .attr("y", 45)
            .text(function(d) {
                var shape = infosTable[infosTable.length-1];
                var isBisected = false;
                if (shape.indexOf("bisected") != -1) {
                    shape = shape.split("bisected")[1];
                    isBisected = true;
                }
                var color = d.display_division;
                var monoType = visFunc.getMonoTypeWithColorAndShape(color, shape, isBisected);
                var labelMono;
                if (monoType == undefined)
                {
                    labelMono = "";
                }
                else
                {
                    labelMono = monoType.name;
                }
                return labelMono;
            });
    }

    // If not the first menu, we add a cancel button to come back to last step
    if (typeof chosenDivision != 'undefined') {
        addCancelOperation(actions, labels);
    }
}

/**
 * Just to allow if you clicked on a node by mistake to shut down the appeared menus
 * @param e
 */
document.onkeydown = function (e) {
    if (e.keyCode == 17 || e.keyCode == 16) // Ctrl or Shift
    {
        ctrl = true;
    }
    if (e.keyCode == 27) { //Esc
        // If tree is empty, don't hide menus because there would be no way to display them back
        updateMenu();
        selectedNodes = [];
        displayTree(treeData, shapes, glycan);
    } else if (e.keyCode == 46) { // Delete button keycode
        if (clickedNode != null) { // If there is no clicked node, then no action
            // Else delete the node from the graph, and then from the tree
            if (selectedNodes.length != 0)
            {
                var wholeSelection = [clickedNode].concat(selectedNodes);
                for (var n of wholeSelection)
                {
                    var parent = appFunc.getNodeParent(n, glycan);
                    if (parent == undefined || !wholeSelection.includes(parent)) // highest node in selection
                    {
                        selectedNodes = [];
                        deleteNode(n);

                    }
                }
            }
            else
            {
                deleteNode(clickedNode); // Delete the node clicked
            }
        }
    }
    else if (e.keyCode == 82) { // r key
        menuFunc.handleRepetition(shapes, treeData, glycan, clickedNode, selectedNodes);
    }
};

document.onkeyup = function(e) {
    if (e.keyCode == 17 || e.keyCode == 16) // Ctrl or Shift
    {
        ctrl = false;
    }
};

/**
 * Delete the clicked node from the graph and the tree
 * @param node The node to delete
 */
function deleteNode(node) {
    if (node == glycan.getRootNode()) {
        // Clear treeData
        treeData = {};
        glycan.clear();
        shapes = [];
        clickedNode = null;
        d3.selectAll("#rootAttach").remove();
    } else {
        shapes = menuFunc.deleteAllShapesInGraph(node, glycan, shapes);
        glycan = menuFunc.deleteAllChildrenInGraph(node, glycan);
        node = visFunc.searchAndRemoveNodeInTree(treeData, node);
        var nbNodes = glycan.graph.nodes().length;
        var i = 1;
        while (glycan.graph.nodes()[glycan.graph.nodes().length-i] instanceof sb.Substituent)
        {
            i++;
        }
        clickedNode = glycan.graph.nodes()[glycan.graph.nodes().length-i];
    }
    delete shapes[node.id];
    if (node instanceof sb.Monosaccharide)
        shapes = menuFunc.reassembleNodes(glycan, shapes);
    displayTree(treeData, shapes, glycan); // Display back the tree
    // Hide all menus
    d3.select('#svgMenu').style("display", "none");
    d3.select("#svgInfos").style("display", "none");
    d3.select("#svgShape").style("display", "none");
    d3.select("#svgMultiselectMenu").style("display", "none");
    d3.select("#svgCarbons").style("display", "none");
    d3.select("#svgSubstituents").style("display", "none");
    d3.select("#pieLinkCarbon").style("display", "none");

    updateMenu();
}

/**
 * Find in the SubstituentType enum the corresponding type for a given label
 * @param label The label of the SubstituentType
 * @returns {*}
 */
function getSubstituentTypeFromLabel (label) {
    // Loop on substituent types, and return the one we want
    for (var type of sb.SubstituentType) {
        if(type.label == label) {
            return type;
        }
    }
}

/**
 * Generates n glycan for testing purposes
 * @param n
 */
function test(n)
{
    for (var i = 0; i < n; i++)
    {
        var linked = Math.abs(Math.floor(Math.random()*10) - 3);
        if (linked == 0)
            linked = "?";
        const colorChoice = ["blue", "yellow", "green", "orange", "pink", "purple", "lightBlue", "brown"];
        var color = colorChoice[Math.abs(Math.floor(Math.random()*10) - 2)];
        infosTable = [];
        infosTable.push("addNode");
        infosTable.push("Monosaccharide");
        infosTable.push("square");
        infosTable.push(color+"Color");
        infosTable.push("β");
        infosTable.push("L");
        infosTable.push("F");
        infosTable.push(linked);
        infosTable.push(linked);
        let ret = menuFunc.createNewNode(infosTable, glycan, treeData, shapes, progress); // Manage add node
        shapes = ret[1];
        treeData = ret[2];
        progress = ret[3];
        clickedNode = glycan.graph.nodes()[glycan.graph.nodes().length-1];
    }
    displayTree(treeData, shapes, glycan);
}

const isColorDivisions = (_newMenuActions) => {
    return (_newMenuActions.length == 10);
};

/**
 * Add a cancel button (rectangle), enabling to come back to last step
 * @param actions The rects of the svg
 * @param labels The labels (texts) of the svg
 */
const addCancelOperation = (actions, labels) => {
    // We add the rect and the label to cancel last click
    actions.append("rect")
        .attr("width", 40)
        .attr("class", "bar")
        .attr("height", 40)
        .attr("id", "cancelChoice")
        .attr("x", 1010).attr("y", 0)
        .style("fill", "#505656")
        .on("click", function () {
            progress--;
            redrawProgress(progress+1);
            menuChosenPath.pop(); // Remove last information from menuChosenPath
            updateMenu(menuChosenPath.pop()); // Update menu from last step
            infosTable.pop(); // Remove the last added information in infosTable
        });

    actions.append("rect")
        .attr("width", 40)
        .attr("class", "bar")
        .attr("height", 40)
        .attr("id", "cancelChoice")
        .attr("x", 1050).attr("y", 0)
        .style("fill", "#505656")
        .on("click", function () {
            redrawProgress(progress, 0);
            progress = 0;
            menuChosenPath = []; // Remove all information from menuChosenPath
            removeInfosChoices();
            updateMenu(); // Update menu
            infosTable = []; // Remove all added information in infosTable
        });

    labels.append("text")
        .attr("class", "label cancelLabel")
        .attr("x", 1030)
        .attr("y", 8)
        .text("<<");

    labels.append("text")
        .attr("class", "label cancelLabel")
        .attr("x", 1070)
        .attr("y", 8)
        .text("X");
};