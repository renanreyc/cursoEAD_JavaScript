/**
* JS - Aula9: Simples SLIDE SHOW
* @author Renan Rey
*/

var intervalo = 2000;

function slide1(){
	document.getElementById("banner").src = "banner1.jpg";
	setTimeout("slide2()",intervalo);
}

function slide2(){
	document.getElementById("banner").src = "banner2.jpg";
	setTimeout("slide3()",intervalo);
}

function slide3(){
	document.getElementById("banner").src = "banner3.jpg";
	setTimeout("slide1()",intervalo);
}