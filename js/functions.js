$(document).ready(function(){

Handlebars.registerPartial('anclas', $("#anclas-template").html());

var source2  = document.getElementById("template").innerHTML;
var template2 = Handlebars.compile(source2);
Handlebars.registerPartial('anclas', $("#anclas-template").html());
var source2  = document.getElementById("template").innerHTML;
var template2 = Handlebars.compile(source2);


var context2 = {
	img1: "IMG/foto1.jpg",
	img2: "IMG/foto2.jpg",
	img3: "IMG/foto3.jpg",
	img4: "IMG/foto4.jpg",
	img5: "IMG/foto5.jpg"
}


var html2 = template2(context2);
$('#imagenes').html(html2);

setTimeout(function() {
		$("#imagenes img").addClass('animated bounceIn');
}, 2000);




});
