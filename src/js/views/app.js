/**
 * Update clickedNode on click on a node
 * @param d The event of the click
 */

let clickCircle = function(d) {

    if (!ctrl)
    {
        clickedNode = d.node; // Update clickedNode
        selectedNodes = [];
    }
    else
    {

        if (d.node != clickedNode)
        {
            selectedNodes = appFunc.selectAllNodesBetween(clickedNode,d.node, treeData, selectedNodes);
        }
        else
        {
            selectedNodes = [];
        }
    }
    displayTree(treeData, shapes, glycan); // Update view to show the selection stroke
};

let zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);

// Create the svgTree svg with fixed width and height
let vis = d3.select('#viz')
    .append('svg')
    .attr('id', 'svgTree')
    .attr('width', 1000)
    .attr('height', 550)
    .call(zoomListener) // Listener for the svg
    .append("svg:g").attr("transform", "translate(50, 20)");

/**
 * Function called when zooming or panning, just applying a transformation
 */
function zoom() {
    vis.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
}

let width = 460,
    height = 300,
    radius = Math.min(width, height) / 2;

let color = d3.scale.category20();

let tree = d3.layout.tree().size([150,150]); // Create the tree layout

/**
 * Display the tree with new data
 */
function displayTree(_treeData, _shapes, _glycan) {
    let treeSvg = d3.select("#svgTree"); // Get the svgTree
    treeSvg.selectAll('.node').remove(); // Remove all the nodes
    treeSvg.selectAll('.nodelink').remove(); // Remove all the links
    treeSvg.selectAll('.linkLabel').remove(); // Remove all link labelsot
    treeSvg.selectAll('.rep').remove(); // Remove all the brackets
    treeSvg.selectAll('.repLabel').remove(); // Remove all the Repeating labels
    treeSvg.selectAll('#rootAttach').remove(); // Remove the root attach

    treeData = _treeData;
    shapes = _shapes;
    glycan = _glycan;

    if (glycan.rootIsSet()) {
        let nodes = tree.nodes(treeData); // Tree nodes
        let links = tree.links(nodes); // Tree links

        // RENDERING ALL THE SHAPES, LINKS, REPEATING UNITS ETC.
        // Do not use CSS to change their properties (svg export won't work properly anymore)


        vis.selectAll(".nodelink")
            .data(links)
            .enter().append("line") // Append a new line for each link
            .attr("class", "nodelink")
            .style("fill","none")
            .style("stroke-width", "3px")
            .style("cursor", "default")
            // Calculate X and Y of source and targets, and draw the line
            .attr("x1", function (d) {
                if (d.target.node["anomericity"]) // Monosaccharide
                    return shapes[d.source.node.id][1];
                return 0;
            })
            .attr("y1", function (d) {
                if (d.target.node["anomericity"]) // Monosaccharide
                    return shapes[d.source.node.id][0];
                return 0;
            })
            .attr("x2", function (d) {
                if (d.target.node["anomericity"]) // Monosaccharide
                    return shapes[d.target.node.id][1];
                return 0;
            })
            .attr("y2", function (d) {
                if (d.target.node["anomericity"]) // Monosaccharide
                    return shapes[d.target.node.id][0];
                return 0;
            })
            .style("stroke", function (d) {
                if (!exporting)
                {
                    let allSelectedNodes = [clickedNode].concat(selectedNodes);
                    if (allSelectedNodes.includes(d.target.node) && allSelectedNodes.includes(d.source.node)) {
                        return "#58ACFA";
                    }
                    else
                        return "#000";
                }
                return "#000";
            })
            .style("stroke-dasharray", function(d) {
                if (d.target.node.anomericity && d.target.node.anomericity.name == "ALPHA")
                    return "5.5";
            })
            .attr('pointer-events', 'none');


        let linkLabel = vis.selectAll(".linkLabel"); // Link labels
        displayLabels(linkLabel, links, true); // First display anomericity
        displayLabels(linkLabel, links, false); // Then linkages (to change font-family)


        // Create nodes
        let node = vis.selectAll("g.node")
            .data(nodes)
            .enter().append("g")
            .style("visibility", function (d) {
                return (d.node["anomericity"]) ? "visible" : "hidden"; // Do not display Substituant nodes
            })
            .attr("x", function (d) {
                if (d.node["anomericity"]) // Monosaccharide
                    return shapes[d.node.id][0];
            })
            .attr("y", function (d) {
                if (d.node["anomericity"]) // Monosaccharide
                    return shapes[d.node.id][1];
            })
            .attr("transform", function (d) {
                // Translation for display
                if (d.node["anomericity"]) // Monosaccharide
                    return "translate(" + shapes[d.node.id][1] + "," + shapes[d.node.id][0] + ")";
            })
            .on('click', function () {
                // On click, simply display menu and hide all other svg's
                d3.event.stopPropagation();
                if (selectedNodes.length == 0) {
                    d3.select("#svgMenu").style("display", "block");
                }
                else // display Multiselection Menu
                {
                    d3.select("#svgMultiselectMenu").style("display", "block");
                }
                fadeOutContextMenu();
                updateMenu();
                d3.select("#svgInfos").style("display", "none");
                d3.select("#svgSubstituents").style("display", "none");
                d3.select("#svgShape").style("display", "none");
                d3.select("#svgMultiselectMenu").style("display", "none");
                d3.select("#svgCarbons").style("display", "none");
            })
            .on("contextmenu", function (d) {
                if (ctrl || ![clickedNode].concat(selectedNodes).includes(d.node))
                    clickCircle(d);
                d3.event.preventDefault();
                let yModification = 0;
                const node = d.node;
                d3.selectAll("svg")
                    .filter(function () {
                        if (d3.select(this).style("display") != "none" && d3.select(this).attr("id") != "svgTree") {
                            yModification += parseInt(d3.select(this).style("height").split("px")[0]) + 10;
                        }
                    });
                d3.select("#deleteNode").on('click', function () { // Click on delete option
                    if (selectedNodes.length != 0) {
                        let wholeSelection = [clickedNode].concat(selectedNodes);
                        for (let n of wholeSelection) {
                            let parent = appFunc.getNodeParent(n, glycan);
                            if (parent == undefined || !wholeSelection.includes(parent)) // highest node in selection
                            {
                                selectedNodes = [];
                                deleteNode(n);

                            }
                        }
                    }
                    else {
                        deleteNode(node); // Delete the node clicked
                    }
                    fadeOutContextMenu();
                });

                let yPos = 0;

                $('#deleteNode').css({'top': mouseY - yModification + yPos, 'left': mouseX - 110}).fadeIn(400); // Display the copy option
                yPos += 22;
                $('#copyNode').css({'top': mouseY - yModification + yPos, 'left': mouseX - 110}).fadeIn(400); // Display the copy option
                yPos += 22;

                d3.select("#copyNode").on('click', function () { // Click on copy option
                    copiedNode = node; // Copy the node clicked
                    fadeOutContextMenu();
                });
                if (copiedNode != null) { // If there is a copied node
                    $('#pasteNode').css({'top': mouseY - yModification + yPos, 'left': mouseX - 110}).fadeIn(400); // Display the paste option
                    d3.select("#pasteNode").on('click', function () { // On click on paste option
                        appFunc.pasteNewNode(node, glycan, treeData, copiedNode, shapes, rootDonorPosition, rootAcceptorPosition);
                        fadeOutContextMenu();
                    });
                    yPos += 22;
                }
                if (appFunc.clickedNodeHasSubs(clickedNode, glycan)) {
                    $('#deleteSubs').css({'top': mouseY - yModification + yPos, 'left': mouseX - 110}).fadeIn(400); // Display the paste option
                    d3.select("#deleteSubs").on('click', function () { // On click on paste option
                        menuFunc.deleteSubs(node, glycan, treeData, shapes, rootDonorPosition, rootAcceptorPosition);
                        fadeOutContextMenu();
                    });
                    yPos += 22;
                }


                if (clickedNode.repeatingUnit == undefined) {
                    $('#repeat').css({'top': mouseY - yModification + yPos, 'left': mouseX - 110}).fadeIn(400); // Display the paste option
                    $('#unrepeat').fadeOut(0);
                    d3.select("#repeat").on('click', function () { // On click on paste option
                        shapes = menuFunc.handleRepetition(shapes, treeData, glycan, clickedNode, selectedNodes);
                        fadeOutContextMenu();
                    });
                    yPos += 22;
                }
                else {
                    $('#unrepeat').css({'top': mouseY - yModification + yPos, 'left': mouseX - 110}).fadeIn(400); // Display the paste option
                    $('#repeat').fadeOut(0);
                    d3.select("#unrepeat").on('click', function () { // On click on paste option
                        for (let node of clickedNode.repeatingUnit.nodes) {
                            delete node.node.repeatingUnit;
                        }
                        displayTree(treeData, shapes, glycan);
                        fadeOutContextMenu();
                    });
                    yPos += 22;
                }


            });

        // Root attach point ~
        node.append("path").style("visibility", function (d) {
            if (d.parent == undefined)
                return "visible";
            else
                return "hidden";
        })
            .attr("fill", "none")
            .attr("id", "rootAttach")
            .attr("width", function (d) {
                return 50;
            })
            .attr("height", 50).attr("stroke", "black")
            .attr("d", "M50,20 Q61,10 50,0 T50,-20" +
                "       M50,0 L-6,0");


        // For each node, append a path
        node.append("path")
            .attr('class', 'node')
            // Use superformula shapes
            .attr("d", d3.superformula()
                .size(400)
                .type(function (d) {
                    if (d.node instanceof sb.Substituent) {
                        return "circle";
                    } else {
                        return d.node.monosaccharideType.shape.toLowerCase(); // Get the shape of the monosaccharide type
                    }
                }))
            .attr("transform", function (d) {
                if (d.node instanceof sb.Substituent) {
                    return;
                }
                let shape = d.node.monosaccharideType.shape;
                // Rotations to have star and triangle well oriented
                if (shape == "star") {
                    return "rotate(-20)";
                } else if (shape == "triangle") {
                    return "rotate(30)";
                }
            })
            .style('fill', function (d) {
                if (d.node instanceof sb.Substituent) {
                    return "blue";
                } else {
                    // If shape is bisected, we create a gradient and link it to the new node
                    if (d.node.monosaccharideType.bisected) {
                        let gradientId = "gradient" + appFunc.randomString(6); // Generate a random id for the gradient
                        let shape = d.node.monosaccharideType.shape;
                        if (shape == 'square') {
                            createSquareLinearGradient(d.node.monosaccharideType.color, gradientId);
                        } else if (shape == 'diamond') {
                            createDiamondLinearGradient(d.node.monosaccharideType, gradientId);
                        } else {
                            createTriangleLinearGradient(d.node.monosaccharideType.color, gradientId);
                        }
                        return "url(#" + gradientId + ")";
                    } else { // If not bisected, simply get the monosaccharide type color
                        return d.node.monosaccharideType.color;
                    }
                }
            })
            .style('stroke', function (d) {
                if (!exporting)
                {
                    if (d.node == clickedNode) {
                        if (selectedNodes.length != 0) {
                            return "#58ACFA";
                        }
                        else if (d.node.monosaccharideType.name.toLowerCase().substring(0, 3) == "fuc" || d.node.monosaccharideType.name.toLowerCase().substring(0, 3) == "sia") {
                            return "black";
                        }
                        else {
                            return "red";
                        }
                    }
                    else if (selectedNodes.includes(d.node)) {
                        return "#58ACFA";
                    }
                    else {
                        return "black";
                    }
                }
                else
                {
                    return "black";
                }
            })
            .style('stroke-width', function (d) {
                if (!exporting)
                {
                    if (d.node == clickedNode) {
                        if (selectedNodes.length != 0) {
                            return "6px";
                        }
                        return "4px";
                    }
                    if (selectedNodes.includes(d.node)) {
                        return "4px";
                    }
                    return "1px";
                }
                return "1px";
            })
            .on('click', clickCircle); // Select the node on click




        let repeatingUnits = appFunc.generateRepeatingUnits(nodes);

        // Repeating Units
        let rep = vis.selectAll("g.rep")
            .data(repeatingUnits)
            .enter();

        rep.append("path")
            .attr("class", "rep")
            .attr("height", function (d) {
                let repInfo = appFunc.getRepCoord(d, shapes);
                return (repInfo[1] - repInfo[0]) + "px";
            })
            .attr("width", "10px")
            .attr("x", function (d) {
                return appFunc.getRepCoord(d, shapes)[0];
            })
            .attr("y", function (d) {
                return appFunc.getRepCoord(d, shapes)[2];
            })
            .attr("transform", function (d) {
                let repInfo = appFunc.getRepCoord(d, shapes);
                return "translate(" + repInfo[2] + "," + repInfo[0] + ")";
            })
            .attr("d", function (d) {
                let repInfo = appFunc.getRepCoord(d, shapes);
                return "M 10 0 L 0 0 L 0 " + (repInfo[1] - repInfo[0]) + " L 10 " + (repInfo[1] - repInfo[0])
                    + "M " + (repInfo[3] - repInfo[2]) + " 0 L " + ((repInfo[3] - repInfo[2]) + 10) + " 0 L " +
                    ((repInfo[3] - repInfo[2]) + 10) + " " + (repInfo[1] - repInfo[0]) + " L " +
                    (repInfo[3] - repInfo[2]) + " " + (repInfo[1] - repInfo[0]);
            })
            .attr("fill", "none")
            .attr("stroke", "gray")
            .attr("stroke-width", "1px");

        // Display numbers of repeats
        rep.append("text")
            .attr("class", "repLabel")
            .attr("x", function (d) {
                return appFunc.getRepCoord(d, shapes)[2];
            })
            .attr("y", function (d) {
                return appFunc.getRepCoord(d, shapes)[1] + 15;
            })
            .style("stroke", "gray")
            .style("font-family", "Lato light")
            .text(function (d) {
                return d.min;
            });

        rep.append("text")
            .attr("class", "repLabel")
            .attr("x", function (d) {
                return appFunc.getRepCoord(d, shapes)[2];
            })
            .attr("y", function (d) {
                return appFunc.getRepCoord(d, shapes)[0] - 5;
            })
            .style("stroke", "gray")
            .style("font-family", "Lato light")
            .text(function (d) {
                return d.max;
            });

    }
}

/**
 * Called once to display the donorPosition and acceptorPosition of the link,
 * Then once more to display the anomericity (with a different font-family)
 * A Monospace font is used so that no matter what the two labels contain,
 * they won't overlap each other
 * @param linkLabel
 * @param links
 * @param anom
 */
function displayLabels(linkLabel, links, anom)
{
    let root = {"node":{"id":"root"}};
    let rootLink = {"source":root,"target":treeData};
    links.push(rootLink);
    linkLabel.data(links)
        .enter().append("text")
        .attr("class", "linkLabel")
        .style("fill", function(d) {
            if (!exporting)
            {
                let allSelectedNodes = [clickedNode].concat(selectedNodes);
                if (d.target.node instanceof sb.Substituent && d.source.node == clickedNode && selectedNodes.length == 0)
                {
                    return "red";
                }
                if ((d.target.node instanceof sb.Substituent && allSelectedNodes.includes(d.source.node)) || // If it's a sub and its parent is selected
                    (allSelectedNodes.includes(d.target.node) && allSelectedNodes.includes(d.source.node))) { // or both are monosaccharides are selected
                    return "#58ACFA";
                }
                else if (anom)
                {
                    return "#4b4b4b";
                }
                return "black";
            }
            return "black";
        })
        .style("font-family", function(d) {
            if (d.target.node["anomericity"]) // Monosaccharide
            {
                return "Courier New";
            }
            else
            {
                return "Helvetica Neue Light", "HelveticaNeue-Light", "Helvetica Neue";
            }
        })
        .style("font-size", "10px")
        .style("alignment-baseline", "text-before-edge")
        .style("dominant-baseline", "text-before-edge")
        .style("text-anchor", function(d) {
            if (d.target.node["anomericity"]) // Monosaccharide
            {
                return "middle";
            }
            else
            {
                let linked = visFunc.findLinkForMono(d.target.node, glycan).donorPosition.value;
                if (linked == 2 || linked == 3 || linked == 6 || linked == "undefined")
                {
                    return "middle";
                }
                else if (linked == 1)
                {
                    return "left";
                }
                else if (linked == 4 || linked == 5)
                {
                    return "right";
                }
            }
            return "middle";
        })
        .style("font-style", function(d) {
            if (d.target.node["anomericity"]) // Monosaccharide
            {
                if (anom)
                {
                    return "italic";
                }
            }
            return "";
        })
        .attr("x", function (d) {
            let finalX; // Final x of the label
            let source = shapes[d.source.node.id]; // Calculate source coordinates
            if (d.target.node["anomericity"]) // Monosaccharide
            {
                let target = shapes[d.target.node.id]; // Calculate target coordinates
                let usualX = (source[1] + target[1]) / 2; // Get x of the middle of the link
                if (d.source.node.id == "root")
                    finalX = usualX+5; // Add value to have a visible display (not on the line)
                else
                    finalX = usualX + XYlinkLabels[visFunc.findLinkForMono(d.target.node, glycan).donorPosition.value][1]; // Add value to have a visible display (not on the line)
            }
            else // Substituant
            {
/*
                let donorPos = visFunc.findLinkForMono(d.target.node, glycan).donorPosition.value;
                let y = source[1] + sb.SubstituentLabels.prototype.getSubstituentLabel(donorPos).y;
                finalX = y;
 */
                finalX = appFunc.findSubstituantLabelSpot(source[0], source[1], visFunc.findLinkForMono(d.target.node, glycan).donorPosition.value)[1];
            }

            return finalX; // Return the obtained value
        })
        .attr("y", function (d) {
            let finalY; // Final y of the label
            let source = shapes[d.source.node.id]; // Get source coordinates
            if (d.target.node["anomericity"]) // Monosaccharide
            {
                let target = shapes[d.target.node.id]; // Calculate target coordinates
                let usualY = (source[0] + target[0]) / 2; // Get y of the middle of the link
                if (d.source.node.id == "root")
                    finalY = usualY + 5; // Add value to have a visible display
                else
                    finalY = usualY + XYlinkLabels[visFunc.findLinkForMono(d.target.node, glycan).donorPosition.value][0]; // Add value to have a visible display
            }
            else // Substituant
            {
/*
                let donorPos = visFunc.findLinkForMono(d.target.node, glycan).donorPosition.value;
                let x = source[0] + sb.SubstituentLabels.prototype.getSubstituentLabel(donorPos).x;
 */
                finalY = appFunc.findSubstituantLabelSpot(source[0], source[1], visFunc.findLinkForMono(d.target.node, glycan).donorPosition.value)[0];
            }
            return finalY; // Return the obtained value
        })
        .style("stroke", function (d) {
            if (!exporting)
            {
                let allSelectedNodes = [clickedNode].concat(selectedNodes);
                if (d.target.node instanceof sb.Substituent && d.source.node == clickedNode && selectedNodes.length == 0)
                {
                    return "red";
                }
                if ((d.target.node instanceof sb.Substituent && allSelectedNodes.includes(d.source.node)) || // If it's a sub and its parent is selected
                    (allSelectedNodes.includes(d.target.node) && allSelectedNodes.includes(d.source.node))) { // or both are monosaccharides are selected
                    return "#58ACFA";
                }
                else if (anom)
                {
                    return "#4b4b4b";
                }
                return "black";
            }
            return "black";
        })
        .text(function (d) {
            if (d.target.node["anomericity"]) // Monosaccharide
            {
                let link = visFunc.findLinkForMono(d.target.node, glycan); // Get the link to which we want to add a label
                let anomericity; // Anomericity of the target node
                if (!anom)
                    anomericity = "\u00A0";
                else
                {
                    if (d.target.node.anomericity.name == "ALPHA") {
                        anomericity = "α"
                    } else if (d.target.node.anomericity.name == "BETA") {
                        anomericity = "β";
                    } else {
                        anomericity = "?\u00A0";
                    }
                }
                let acceptorPositionLabel;
                if (anom)
                    acceptorPositionLabel = "\u00A0";
                else
                {
                    if (d.source.node.id == "root")
                    {
                        if (rootAcceptorPosition.value == "undefined") {
                            acceptorPositionLabel = "?";
                        }
                        else {
                            acceptorPositionLabel = rootAcceptorPosition.value;
                        }
                    }
                    else
                    {
                        if (link.acceptorPosition.value == "undefined") {
                            acceptorPositionLabel = "?";
                        }
                        else {
                            acceptorPositionLabel = link.acceptorPosition.value;
                        }
                    }
                }

                let donorPositionLabel;
                if (anom)
                    donorPositionLabel = "\u00A0";
                else {
                    if (d.source.node.id == "root")
                    {
                        if (rootDonorPosition.value == 'undefined') {
                            donorPositionLabel = "?";
                        } else {
                            donorPositionLabel = rootDonorPosition.value;
                        }
                    }
                    else
                    {
                        if (link.donorPosition.value == 'undefined') {
                            donorPositionLabel = "?";
                        } else {
                            donorPositionLabel = link.donorPosition.value;
                        }
                    }
                }
                let coma;
                if (anom)
                    coma = "\u00A0";
                else
                    coma = ",";
                return anomericity + acceptorPositionLabel + coma + donorPositionLabel; // Text of the label
            }
            else
            {
                return d.target.node._substituentType.label;
            }
        });
}

/**
 * Create a linear gradient for a square
 * @param color The color that the square has to have
 * @param gradientId The generated id of the linear gradient
 */
function createSquareLinearGradient(color, gradientId) {
    let svg = d3.select("#svgTree"); // Get the svgTree
    // Create a linearGradient using the gradientId
    let linearGradient = svg.append("linearGradient")
        .attr("id", gradientId)
        .attr("x1", "0%")
        .attr("y1", "100%")
        .attr("x2", "100%")
        .attr("y2", "0%")
        .attr("spreadMethod", "pad");

    // First half of the square, in white
    linearGradient.append("stop")
        .attr("offset", "48%")
        .attr("stop-color", "#fff")
        .attr("stop-opacity", 1);

    // Separation in the middle, in black
    linearGradient.append("stop")
        .attr("offset", "50%")
        .attr("stop-color", "#000")
        .attr("stop-opacity", 1);

    // Second half of the square, in the wanted color
    linearGradient.append("stop")
        .attr("offset", "52%")
        .attr("stop-color", color)
        .attr("stop-opacity", 1);
}

/**
 * Create a linear gradient for a diamond
 * @param type The type of the monosaccharide that the diamond has to have
 * @param gradientId The generated id of the linear gradient
 */
function createDiamondLinearGradient(type, gradientId) {
    let svg = d3.select("#svgTree"); // Get the svgTree
    let linearGradient;
    // AltA and IdoA are reverted diamonds so we don't append the same linearGradient
    if (type == sb.MonosaccharideType.AltA || type == sb.MonosaccharideType.IdoA) {
        linearGradient = svg.append("linearGradient")
            .attr("id", gradientId)
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "0%")
            .attr("y2", "100%")
            .attr("spreadMethod", "pad");
    } else {
        linearGradient = svg.append("linearGradient")
            .attr("id", gradientId)
            .attr("x1", "0%")
            .attr("y1", "100%")
            .attr("x2", "0%")
            .attr("y2", "0%")
            .attr("spreadMethod", "pad");
    }

    // First half of the diamond, in white
    linearGradient.append("stop")
        .attr("offset", "48%")
        .attr("stop-color", "#fff")
        .attr("stop-opacity", 1);

    // Separation of the diamond, in black
    linearGradient.append("stop")
        .attr("offset", "50%")
        .attr("stop-color", "#000")
        .attr("stop-opacity", 1);

    // Second half of the diamond, in the wanted color
    linearGradient.append("stop")
        .attr("offset", "52%")
        .attr("stop-color", type.color)
        .attr("stop-opacity", 1);
}

/**
 * Create a linear gradient for a triangle
 * @param color The color that the triangle has to have
 * @param gradientId The generated id of the linear gradient
 */
function createTriangleLinearGradient(color, gradientId) {
    let svg = d3.select("#svgTree");
    let linearGradient = svg.append("linearGradient")
        .attr("id", gradientId)
        .attr("x1", "0%")
        .attr("y1", "54%")
        .attr("x2", "50%")
        .attr("y2", "22%")
        .attr("spreadMethod", "pad");

    // First half of the triangle, in white
    linearGradient.append("stop")
        .attr("offset", "40%")
        .attr("stop-color", "#fff")
        .attr("stop-opacity", 1);

    // Separation of the triangle, in black
    linearGradient.append("stop")
        .attr("offset", "50%")
        .attr("stop-color", "#000")
        .attr("stop-opacity", 1);

    // Second half of the triangle, in the wanted color
    linearGradient.append("stop")
        .attr("offset", "60%")
        .attr("stop-color", color)
        .attr("stop-opacity", 1);
}

function fadeOutContextMenu()
{
    $('#deleteNode').fadeOut(400); // Hide the delete option
    $('#deleteSubs').fadeOut(400); // Hide the remove subs option
    $('#copyNode').fadeOut(400); // Hide the copy option
    $('#pasteNode').fadeOut(400); // Hide the paste option
    $('#repeat').fadeOut(400); // Hide the repeat option
    $('#unrepeat').fadeOut(400); // Hide the repeat option

    $('#pieLinkCarbon').css("display", "none"); // Hide chart
}