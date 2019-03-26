// @TODO: YOUR CODE HERE!

// Set Up Graph
var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 80,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

//Create SVG Wrapper
var svg = d3
  .select('#scatter')
  .append('svg')
  .attr('width', svgWidth)
  .attr('height', svgHeight)

// Append an SVG group
var chartGroup = svg.append("g")
.attr("transform", `translate(${margin.left}, ${margin.top})`);

// read in CSV data
d3.csv("../data/data.csv", (function(healthCareData) {
    //parse data
    healthCareData.forEach(function(data) {
        data.poverty = +data.poverty;
        data.obesity = +data.obesity;
    });
    console.log(data);

    //scales
    // xLinearScale function above csv import
    var xLinearScale = d3.scaleLinear()
        .domain([d3.min(data, d => data.poverty)-1, d3.max(data, d =>data.poverty)])
        .range([0, width]);

    // Create y scale function
    var yLinearScale = d3.scaleLinear()
        .domain([d3.min(data, d=> data.obesity)-1, d3.max(data, d=> data.obesity)])
        .range([height, 0]);

    //axes
    // Create initial axis functions
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    // append x axis
    var xAxis = chartGroup.append("g")
        .classed("x-axis", true)
        .attr("transform", `translate(0, ${height})`)
        .call(bottomAxis);

    // append y axis
    chartGroup.append("g")
        .call(leftAxis);


    //Create Chart 
    var circlesGroup = chartGroup.selectAll("item")
        .data(data)
        .enter()
        .append('g');
        item.append("text")
        .text(healthCaredata => healthCaredata.abbr)
        .attr("dx", d => xLinearScale(data.poverty)-5) 
        .attr("dy", d => yLinearScale(data.obesity)+5)
        .style("fill", "purple")
        .style("font", "12px sans-serif")
        .classed("fill-text", true);   

    //Create the 
        items.append("circle")
        .attr("cx", d => xLinearScale(data.poverty))
        .attr("cy", d => yLinearScale(data.obesity))
        .attr("r", "15")
        .attr("fill", "purple")
        .attr("opacity", ".65");
    
        chartGroup.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left + 40)
        .attr("x", 0 - (height / 2))
        .attr("dy", "1em")
        .attr("class", "axisText")
        .text("Poverty");

        chartGroup.append("text")
        .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
        .attr("class", "axisText")
        .text("Obesity");    
            
}));



