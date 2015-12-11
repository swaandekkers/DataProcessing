var map = new Datamap({
	element: document.getElementById('container'),
	done: function(map) {map.svg.selectAll('.datamaps-subunit').on('click', function(geography) { 
	graph(geography.id)})},
	fills: {
      defaultFill: '#FF4C4C', //the keys in this object map to the "fillKey" of [data] or [bubbles]
      "0 - 5000": "#b3cde0",
      "5000 - 10000": "#6497b1",
      "10000 - 20000": "#005b96",
      "20000 - 30000": "#03396c",
      "30000 - 40000": "#011f4b",
      "> 40000": "#000000"
    }
});

map.legend({
    defaultFillName: "No data"
})

// functino to determine the color the country should have
function determineColor(income) {
	if (income < 5000){
		return color = "#b3cde0"
	}
	else if (income < 10000){
		return color = "#6497b1"
	}
	else if (income < 20000){
		return color = "#005b96"
	}
	else if (income < 30000){
		return color = "#03396c"
	}
	else if (income < 40000){
		return color = "#011f4b"
	}
	else if (income < 1000000){
		return color = "#000000"
	}
	else {
		return color = 	"#FF4C4C"
	}
}

// contours of income svg
  var margin = {top: 20, right: 20, bottom: 20, left: 40}
  var width = 200 - margin.left - margin.right
  var height = 200 - margin.top - margin.bottom
  var barPadding = 1;

  var svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var xAxis = d3.svg.axis()
  var yAxis = d3.svg.axis()

// contours of gini svg
  var margin = {top: 20, right: 20, bottom: 20, left: 40}
  var width = 200 - margin.left - margin.right
  var height = 200 - margin.top - margin.bottom
  var barPadding = 1;

  var svg2 = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var xAxis2 = d3.svg.axis()
  var yAxis2 = d3.svg.axis()

// function activated when click on country
function graph(country) {

  // put values in list for income per capita
	var info = globalfile1[country]
  var value = []
  for (val in info){
    value.push(parseInt(info[val]))
  }

  // put values in list for gini index
  var info2 = globalfile2[country];
  var value2 = []
  for (val in info2) {
    if (info2[val] == "..")
      value2.push(0)
    else
      value2.push(parseInt(info2[val]))
  }

	barchart(value, svg, xAxis, yAxis)
  barchart(value2, svg2, xAxis2, yAxis2)
	}

function barchart(value, vis, xAx, yAx) {

    vis.select(".y.axis").remove();
    vis.select(".x.axis").remove();
    vis.selectAll(".bar").remove();

    //if (vis == "svg1") {

  var date = [2000, 2005, 2010]
  var max = Math.max.apply(Math, value)
  var min = Math.min.apply(Math, value)

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1).domain(date);

var y = d3.scale.linear()
    .range([height, 0]).domain([0, max + (max/9)]).nice();

    // axes
  xAx.scale(x).orient("bottom");
  yAx.scale(y).orient("left").ticks(6);

  vis.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAx);

  vis.append("g")
      .attr("class", "y axis")
      .call(yAx)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 20)
      .attr("dy", ".71em")

  vis.selectAll(".bar")
      .data(value)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d, i) { return x(date[i]) }) // d = value, i = index
      .attr("width", function(d,i) {return x.rangeBand()})
      .attr("y", function(d, i) { return y(value[i]); })
      .attr("height", function(d, i) { return height - y(value[i]); });
  
}

// get data
queue()
    .defer(d3.json, "output_income.json")
    .defer(d3.json, "output_gini.json")
    .await(function(error, file1, file2) { 
    globalfile1 = file1
    globalfile2 = file2

    dict = {}
    for (var key in file1) {
    	var value = file1[key][2]
    	color = determineColor(value)
    	dict[key] = color
    }
    map.updateChoropleth(dict)
});




