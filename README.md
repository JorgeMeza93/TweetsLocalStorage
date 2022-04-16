# TweetsLocalStorage
Simulador de tweets almacenados en LocalStorage con JavaScript

Lo primero que realizamos es declarar las variables que utilizaremos y los oyentes
//Variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
const tweetArea = document.querySelector("#tweet");
let tweets = [];

//Oyentes
function eventListeners(){
    formulario.addEventListener("submit", agregarTweet);
}

//Funciones
function agregarTweet(e){
    e.preventDefault();
}

Ahora comenzamos a operar
Creamos una variable global que tiene por valor el div donde se mostrarán los mensajes.
const divMensaje = document.querySelector('#message');
Ahora construimos la función agregarTweet. Esta funciòn también