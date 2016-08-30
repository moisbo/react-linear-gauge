//
var $container = d3.select('#linear-gauge');
var         width = parseFloat($container.style("width"));
var        height = parseFloat($container.style("height"));

window.onresize = resize;

function resize()
{
  $container = d3.select('#linear-gauge');
  width = parseFloat($container.style("width"));
  height = parseFloat($container.style("height"));

 
	chart_w = width;
	resultPos = chart_w * result;

	text_margins = {top: chart_y_pos + gauge_h + 35, right: 10, bottom: 0, left: 10};

  
  d3.select("line")
  .attr("x1", resultPos)
	.attr("y1", chart_y_pos )
  .attr("x2", resultPos )
	.attr("y2", gauge_h + chart_y_pos );

  d3.select("circle")
  .attr("cx", resultPos)
  .attr("cy", (gauge_h + chart_y_pos) / 2 );

  d3.select(".rightLabel")
  .attr("x", chart_w )
  .text( "width: " + width );

  d3.select(".rightPrcnt")
  .attr("x", chart_w );
 
}


// Tick mark

var LF = 30;

var gauge_h = 60;

var chart_w = width;
var chart_y_pos = 0;

var result = 0.76;	// in a scale [0 1]
var resultPos = chart_w * result;

var text_margins = {top: chart_y_pos + gauge_h + 35, right: 10, bottom: 0, left: 10};

// Chart size -----------

var svg = d3.select('#linear-gauge').append("svg")
.attr("width", '100%')
.attr("height", '100%');

var gradient = svg.append("svg:defs")
  .append("svg:linearGradient")
    .attr("id", "gradient")
    .attr("x1", "0%")
    .attr("y1", "0%")
    .attr("x2", "100%")
    .attr("y2", "0%")
    .attr("spreadMethod", "pad");

gradient.append("svg:stop")
    .attr("offset", "0%")
    .attr("stop-color", "#c00")
    .attr("stop-opacity", 1);

gradient.append("svg:stop")
    .attr("offset", "50%")
    .attr("stop-color", "yellow")
    .attr("stop-opacity", 1);


gradient.append("svg:stop")
    .attr("offset", "100%")
    .attr("stop-color", "#0c0")
    .attr("stop-opacity", 1);

svg.append("g")
	.append("rect")
  .attr("x", 0 )
  .attr("y", chart_y_pos )
  .attr("width", "100%" )
  .attr("height", gauge_h )
  .style("fill", "url(#gradient)");


/****************************************
* Text, titles
*****************************************/

// Left percentage indicator
svg.append("g")
	.append("text")
  .attr("x", 0)
  .attr("y", text_margins.top )
  .text( "0%" );

svg.append("g")
	.append("text")
  .attr("x", 0)
  .attr("y", text_margins.top + LF )
  .text( "Alarm" );

// Right percentage indicator

svg.append("g")
	.append("text")
	.classed("rightPrcnt", true )
  .attr("x", chart_w )
  .attr("y", text_margins.top )
	.attr("text-anchor", "end")
  .text( "100%" );

svg.append("g")
	.append("text")
	.classed("rightLabel", true )
  .attr("x", chart_w )
  .attr("y", text_margins.top + LF )
	.attr("text-anchor", "end")
  .text( "width: " + chart_w );

/****************************************
* Result
*****************************************/


var tickMark = svg.append("g");

tickMark.append("line")
  .attr("x1", resultPos)
	.attr("y1", chart_y_pos )
  .attr("x2", resultPos )
	.attr("y2", gauge_h + chart_y_pos )
	.attr("stroke-width", 3)
	.attr("stroke", "black");


tickMark.append("circle")
  .attr("cx", resultPos)
  .attr("cy", (gauge_h + chart_y_pos) / 2 )
	.attr("r", 10);
