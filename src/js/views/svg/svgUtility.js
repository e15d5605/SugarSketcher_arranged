/**
 * Create a linear gradient for a square
 * @param color The color that the square has to have
 * @param gradientId The generated id of the linear gradient
 */
export const createSquareLinearGradient = (color, gradientId) => {
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
};

/**
 * Create a linear gradient for a diamond
 * @param type The type of the monosaccharide that the diamond has to have
 * @param gradientId The generated id of the linear gradient
 */
export const createDiamondLinearGradient = (type, gradientId) => {
    let svg = d3.select("#svgTree"); // Get the svgTree
    let linearGradient;
    // AltA and IdoA are reverted diamonds so we don't append the same linearGradient
    if (type === sb.MonosaccharideType.AltA || type === sb.MonosaccharideType.IdoA) {
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
export const createTriangleLinearGradient = (color, gradientId) => {
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
};

/**
 * Called once to display the donorPosition and acceptorPosition of the link,
 * Then once more to display the anomericity (with a different font-family)
 * A Monospace font is used so that no matter what the two labels contain,
 * they won't overlap each other
 * @param linkLabel
 * @param links
 * @param anom
 */
export const displayLabels = (linkLabel, links, anom) => {
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
                if (d.target.node instanceof sb.Substituent && d.source.node === clickedNode && selectedNodes.length === 0)
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
                if (linked === 2 || linked === 3 || linked === 6 || linked === "undefined")
                {
                    return "middle";
                }
                else if (linked === 1)
                {
                    return "left";
                }
                else if (linked === 4 || linked === 5)
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
                let usualX = (source[0] + target[0]) / 2; // Get x of the middle of the link
                if (d.source.node.id === "root")
                    finalX = (shapes["root"][0]*2 + 50) / 2;
                // Add value to have a visible display (not on the line)
                else {
                    let donorPos = visFunc.findLinkForMono(d.target.node, glycan).donorPosition.value;
                    finalX = usualX + sb.XYLinkLabels.prototype.getXYLinkLabel(donorPos).x; // Add value to have a visible display (not on the line)
                }
            }
            else // Substituant
            {
                /*
                                let donorPos = visFunc.findLinkForMono(d.target.node, glycan).donorPosition.value;
                                let y = source[1] + sb.SubstituentLabels.prototype.getSubstituentLabel(donorPos).y;
                                finalX = y;
                                finalX = appFunc.findSubstituantLabelSpot(source[0], source[1], visFunc.findLinkForMono(d.target.node, glycan).donorPosition.value)[0];
                 */
                let donorPos = visFunc.findLinkForMono(d.target.node, glycan).donorPosition.value;
                finalX = sb.SubstituentLables.prototype.getSubstituentLabel(donorPos).x + source[0];
            }

            return finalX; // Return the obtained value
        })
        .attr("y", function (d) {
            let finalY; // Final y of the label
            let source = shapes[d.source.node.id]; // Get source coordinates
            if (d.target.node["anomericity"]) // Monosaccharide
            {
                let target = shapes[d.target.node.id]; // Calculate target coordinates
                let usualY = (source[1] + target[1]) / 2; // Get y of the middle of the link
                if (d.source.node.id === "root")
                    finalY = shapes["root"][1] + 4;
                // Add value to have a visible display
                else {
                    let donorPos = visFunc.findLinkForMono(d.target.node, glycan).donorPosition.value;
                    finalY = usualY + sb.XYLinkLabels.prototype.getXYLinkLabel(donorPos).y; // Add value to have a visible display (not on the line)
                }
            }
            else // Substituant
            {
                /*
                                let donorPos = visFunc.findLinkForMono(d.target.node, glycan).donorPosition.value;
                                let x = source[0] + sb.SubstituentLabels.prototype.getSubstituentLabel(donorPos).x;
                                finalY = appFunc.findSubstituantLabelSpot(source[0], source[1], visFunc.findLinkForMono(d.target.node, glycan).donorPosition.value)[1];
                 */
                let donorPos = visFunc.findLinkForMono(d.target.node, glycan).donorPosition.value;
                finalY = sb.SubstituentLables.prototype.getSubstituentLabel(donorPos).y + source[1];
            }
            return finalY; // Return the obtained value
        })
        .style("stroke", function (d) {
            if (!exporting)
            {
                let allSelectedNodes = [clickedNode].concat(selectedNodes);
                if (d.target.node instanceof sb.Substituent && d.source.node === clickedNode && selectedNodes.length === 0)
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
                    if (d.target.node.anomericity.name === "ALPHA") {
                        anomericity = "α"
                    } else if (d.target.node.anomericity.name === "BETA") {
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
                    if (d.source.node.id === "root")
                    {
                        if (rootAcceptorPosition.value === "undefined") {
                            acceptorPositionLabel = "?";
                        }
                        else {
                            acceptorPositionLabel = rootAcceptorPosition.value;
                        }
                    }
                    else
                    {
                        if (link.acceptorPosition.value === "undefined") {
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
                    if (d.source.node.id === "root")
                    {
                        if (rootDonorPosition.value === 'undefined') {
                            donorPositionLabel = "?";
                        } else {
                            donorPositionLabel = rootDonorPosition.value;
                        }
                    }
                    else
                    {
                        if (link.donorPosition.value === 'undefined') {
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
};