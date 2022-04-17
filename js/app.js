//Variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
const tweetArea = document.querySelector("#tweet");
const divMensaje = document.querySelector('#message');
let tweets = [];

eventListeners();

//Oyentes
function eventListeners(){
    formulario.addEventListener("submit", agregarTweet);
}


//Funciones
function agregarTweet(e){
    e.preventDefault();
    const tweet = tweetArea.value.trim();  // <---- Elimino los espacios en blanco por ambos lados
    if(divMensaje.hasChildNodes()){                // <--- Cercioro que el div de mensajes no tenga ningun mensaje activo
        divMensaje.removeChild(divMensaje.firstChild);   // <--- Si lo hay, lo quito
    }
    if(tweet === ""){        // <---- Verifico que el tweet no sea una cadena vacía
        mensajeError("El tweet debe contener al menos un cáracter");
        return;    //   <--- Este return regresa al punto donde fue llamada la función.
    }
    const objTweet = {id: Date.now(), texto: tweet}
    tweets = [...tweets, objTweet];
    console.log(tweets);
    crearHTML();
    formulario.reset();
}
function mensajeError(error){   //Mensaje error recibe por parametro el mensaje
    const mensaje = document.createElement('p');
    mensaje.textContent = error;
    mensaje.classList.add('error');
    divMensaje.appendChild(mensaje);
}
function crearHTML(){
    limpiarHTML();
    if(tweets.length>0){
        tweets.forEach( (tweet)=>{
            const li = document.createElement("li");
            li.innerText = tweet.texto;
            listaTweets.appendChild(li);
        });
    }
}
function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);     
    }
}

