/* use this to test out your function */
window.onload = function() {
 	 changeColor(countries, colors);
}
countries = ["cz", "be", "hu", "at"]
colors = ["#40E0D0", "#87CEEB", "#008080", "#4682B4"]
/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color) {
	for (var i = 0; i < countries.length; i++) {
		var x = document.getElementById(countries[i]);
		x.style.fill = colors[i]
	}
}