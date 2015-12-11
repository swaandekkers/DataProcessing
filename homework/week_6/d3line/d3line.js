// load json file and get data
var data;

d3.json("output.json", function(error, json) {
	if (error) return console.warn(error);
	data = json;
	console.log(data)

// set margins
var margin = {top: 20, right: 20, bottom: 20, left:50},
	width = 1000,
	height = 500;

// search for highest and lowest point in date and temperature
var maxy = d3.max(data, function(d) {
	return parseInt(d[1]);
})

var miny = d3.min(data, function(d) {
	return parseInt(d[1]);
})

datemin = Date.parse(data[0][0])
datemax = Date.parse(data[data.length - 1][0])

// make temperature range / 10
value = []
for (var i = 0; i < data.length; i++){
	value.push((data[i][1])/10)
}

// set line between datapoints
var line = d3.svg.line()
    .x(function(d, i) { return xrange(Date.parse(d[0])); })
    .y(function(d, i) { return yrange(d[1]); });

// set the range
var xrange = d3.time.scale().range([margin.left, width - margin.right]).domain([datemin, datemax])
var xrange2 = d3.scale.linear().range([0, 364]).domain([margin.left, width - margin.right])
var yrange = d3.scale.linear().range([height - margin.top, margin.bottom]).domain([miny, maxy])

// set axes
var xax = d3.svg.axis().scale(xrange).tickSize(3).orient('bottom')
var yax = d3.svg.axis().scale(yrange). tickSize(3).orient('left')

// adds svg to canvas
var visualisation = d3.select('#visualisation')

// adds axes to svg
visualisation.append('svg:g').attr('class', 'x axis').attr('transform', 'translate (0,' + (height - margin.bottom) + ')').call(xax)
visualisation.append('svg:g').attr('class', 'y axis').attr('transform', 'translate(' + (margin.left) + ',0)').call(yax);

// adds line connecting datapoints
visualisation.append('svg:path').attr('class', 'line').attr("d", line(data))

g = visualisation.append('g').attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
                
var lineX = visualisation.append('line')
    .attr('id', 'focusLineX')
    .attr('class', 'focusLine')
    .style('opacity', 0)
    .style('stroke', 'black')
    .attr("x1", margin.left)
	.attr("y1", 0)
    .attr("x2", width - margin.right)
    .attr("y2", 0)


var lineY = visualisation.append('line')
    .attr('id', 'focusLineY')
	.attr('class', 'focusLine')
	.style('opacity', 0)
	.style('stroke', 'black')
	.attr("x1", 0)
	.attr("y1", margin.top)
    .attr("x2", 0)
    .attr("y2", height - margin.bottom)

var div1 = d3.select('#div1')
var div2 = d3.select('#div2')

// set time function
setTimeout(function() {
			div1.style('visibility', 'visible');
			div2.style('visibility', 'visible');
		},1000);

visualisation.on('mousemove', function() { 
        var point = d3.mouse(this)
		var corx = point[0]
		var cory = point[1]
		index = Math.floor(xrange2(corx));
		var temperature = data[index][1]
		var date = data[index][0]
		value = yrange(data[index][1])

		// make y and x line
		lineY.style('opacity', 1).attr('x1', corx)
		.attr('x2', corx)

		lineX.style('opacity', 1).attr('y1', value)
		.attr('y2', value)

		// chance position div
		div1.style('visibility', 'hidden').text(temperature).style('left', (corx + 70) + 'px').style('top', (value + 8) + 'px')
		.style('backgound-color', '#3399ff')
		div2.style('visibility', 'hidden').text(date).style('left', (corx - 20) + 'px').style('top', (value - 70) + 'px').style('color', 'black')
		setTimeout(function() {
			div1.style('visibility', 'visible');
			div2.style('visibility', 'visible');
		},1000);
	})
 })

