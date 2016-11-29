var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var theList="";

for (var i = 0; i < reindeer.length; i++) {
	var list = colors[i] +"  " + reindeer[i];
	theList += "<li>"+list+"</li>"
}
var hohohoElement = document.getElementById("coloredReindeer");
hohohoElement.innerHTML = theList;
