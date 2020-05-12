/**
* JS - Aula 14: Jogo de Cartas
* @author Renan Rey
*/

// JavaScript Document
//Copas: Pode ser digitada através de ALT + 3 (♥).
//Ouros: Pode ser digitada através de ALT + 4 (♦).
//Paus: Pode ser digitada através de ALT + 5 (♣).
//Espadas: Pode ser digitada através de ALT + 6 (♠). 
//*no teclado numérico

var nipes=['♥','♦','♣','♠'];
var faces=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
var nipe=nipes[Math.floor(Math.random()*4)];
var face=faces[Math.floor(Math.random()* faces.length)];
document.write("<h1>" + face + nipe + "</h1>");

