
var map = new Datamap({
	element: document.getElementById('container'),
	done: function(map) {map.svg.selectAll('.datamaps-subunit').on('click', function(geography) { 
		console.log(this.className.animVal) function(countrycode)
	})}
	});

function determineColor(income) {
	if (income < 5000){
		color = "#7f3b08"
	}
	else if (income < 10000){
		color = "#b35806"
	}
	else if (income < 15000){
		color = "#e08214"
	}
	else if (income < 20000){
		color = "#fdb863"
	}
	else if (income < 25000){
		color = "#ffffbf"
	}
	else if (income < 30000){
		color = "#fee0b6"
	}
	else if (income < 35000){
		color = "#d8daeb"
	}
	else if (income < 40000){
		color = "#b2abd2"
	}
	else if (income < 45000){
		color = "#8073ac"
	}
	else if (income < 50000){
		color = "#542788"
	}
	else {
		color = "2d004b"
	}
}

d3.json("outputincome.json", function(error, json) {
	if (error) return console.warn(error);
	data = json;
	dict = {};

	for (var i = 0; i < data.length; i++) {
		determineColor(data[i].income)
		if (data[i].code.length == 3){
			dict[key] = color
		}

	map.updateChoropleth(dict)
	}
})
data = {"FRA" : [1,2,3,4,5]}

function graph(country) {
	var current = data[country];
	return value = current[1]

}
