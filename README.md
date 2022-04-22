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
Ahora construimos la función agregarTweet. Esta funciòn también válidará que el mensaje del tweet tenga formato válido:

function agregarTweet(e){
    e.preventDefault();
    const tweet = tweetArea.value.trim();  // <---- Elimino los espacios en blanco por ambos lados
    if(divMensaje.hasChildNodes()){                // <--- Cerciora que el div de mensajes no tenga ningun mensaje activo
        divMensaje.removeChild(divMensaje.firstChild);   // <--- Si lo hay, lo quito
    }
    if(tweet === ""){        // <---- Verifico que el tweet no sea una cadena vacía
        mensajeError("El tweet debe contener al menos un cáracter");
        return;    //   <--- Este return regresa al punto donde fue llamada la función.
    }
    const objTweet = {id: Date.now(), texto: tweet}   // <--- Costruye un objeto con un identificador único pero al no tener base de datos nos valemos del metodo Date.now() y el valor del tweet
    tweets = [...tweets, objTweet];   // <-- Utilizando el spread operator tomamos referencia del array anterior y adicionamos el valor del tweet actual.
    crearHTML();  // <--- Llamamos al método crearHTML que creará la lista de los tweets
    formulario.reset();
}

Si el valor del tweet es una cadena vacía entonces mostramos un error en la pantalla
function mensajeError(error){   //Mensaje error recibe por parametro el mensaje
    const mensaje = document.createElement('p');  
    mensaje.textContent = error;
    mensaje.classList.add('error');
    divMensaje.appendChild(mensaje);
}

Esta función crea la lista con los tweets almacendos en el array de tweets.
function crearHTML(){
    limpiarHTML();   // <---- Elimina todo el contenido previo de la lista de tweets
    if(tweets.length>0){    // <---- Asegura que el array contenga elementos
        tweets.forEach( (tweet)=>{     // <--- Para cada elemento del array crearemos un objeto li y lo añadiremos al contenedor de los tweets
            const li = document.createElement("li");
            li.innerText = tweet.texto;
            listaTweets.appendChild(li);
        });
    }
}
