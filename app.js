//Seleccionar los elementos del DOM
const boton = document.querySelector('button'); 
const color = document.getElementById('color');

function generarcoloraleatorio(){
   let digitos = '0123456789ABCDEF';
   let colorhex = '#'

  //Ciclo FOR para iterar entre los diferentes digitos disponibles
   for (let i = 0; i < 6; i++){
    let indiceAleatorio = Math.floor(Math.random() * 16);
    colorhex += digitos[indiceAleatorio]; 
   }

  //Se regresa la cadena del color
   return colorhex;
}

//Se añade el evento click en el botón de HTML
boton.addEventListener('click', function(){
  let colorAleatorio = generarcoloraleatorio(); 
  //Actuaizar el texto
  color.textContent = colorAleatorio;
  //Actualizar colores
  document.body.style.backgroundColor = colorAleatorio; 
})