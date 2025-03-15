// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Se crea un array que almacena los nombres de los amigos que ingresemos 
let Amigos = [];
//conectamos el js con el html
const listaDeAmigos= document.getElementById('listaAmigos');

function agregarAmigo(){
    //con esta funcion se agregan los nombres de los amigos 
    let nombreAmigo = document.getElementById('amigo').value;
   
    if (nombreAmigo !== null && nombreAmigo.trim() !== '' ) { 
        //esta condicion permite verificar que se ingrese un valor válido
        // trim elimina los espacios en blanco al inicio y al final de la casilla 
    
         Amigos.push(nombreAmigo); //con este codigo llenas la el array con los nombres de los amigos
         limpiarcaja(); //se limpia la caja del boton "añadar" cada vez que ingresas el nombre de un amigo
         actualizarListaAmigos(); //esta funcion actualiza la lista de amigos y trabajar con el html
    }
     else {
          alert("Por favor, inserte un nombre."); //crear alerta para cuando no se añade ningun nombre a la casilla
         limpiarcaja();
     }
}
function limpiarcaja (){ //esta funcion limpia la caja cada vez que agregamos un nombre
      document.querySelector('#amigo').value = ''; // se coloca # ya que se necesita seleccionar un elemento del id en especifico en este caso #amigos 

}
function actualizarListaAmigos() {  //crear funcion para lista de amigos
 
   listaDeAmigos.innerHTML = '';

//se crea el bucle "for" para trabajar con array "amigos"
     for (let i = 0; i < Amigos.length; i++) {  
    let elemento = document.createElement("li"); // crea la lista para trabajar con el HTML
    elemento.textContent = Amigos[i];
    listaDeAmigos.appendChild(elemento); // Guarda la lista de amigos en HTML
    } 
}
function sortearAmigo (){   

 listaDeAmigos.style.display = "none";
 // Se usa Math.random() y Math.floor() para seleccionar un índice aleatorio de array ("amigos")
let IndiceAleatorio = Math.floor(Math.random()*Amigos.length);
let amigosecreto = Amigos[IndiceAleatorio]; 
//Se actualiza el contenido usando document.getElementById() e innerHTML para así mostrar el amigo sorteado
let secreto = document.getElementById("resultado");
secreto.innerHTML= " El Amigo Sorteado Es " + amigosecreto; 
document.querySelector('#sorteo').setAttribute('disabled',true);

}