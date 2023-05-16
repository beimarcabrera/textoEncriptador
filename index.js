const texto = document.getElementById('texto'); 
const contenedorDos = document.querySelector('.cont-dos'); 
const textoContenido = document.querySelector('.text-conten'); 
const encriptarBoton = document.getElementById('encriptar'); 
const desencriptarBoton = document.getElementById('desencriptar');
const copiarBoton = document.querySelector('.copiar'); 

encriptarBoton.addEventListener('click', () => { 
  const textoEncriptado = encriptar(texto.value);
  ocultarElementos(contenedorDos);
  mostrarTextoEncriptado(textoEncriptado, textoContenido);
  mostrarelemento();
});
function mostrarelemento() { 
  const elemento = document.querySelector('.copiar');
    elemento.style.display = 'block';
 
}
desencriptarBoton.addEventListener('click', () => { 
  const textoDesencriptado = desencriptar(texto.value);
  ocultarElementos(contenedorDos);
  mostrarTextoEncriptado(textoDesencriptado, textoContenido);
  
});

copiarBoton.addEventListener("click", copiarTexto);
function copiarTexto(){
  let texto =document.querySelector('.text-conten');
  let seleccion =window.getSelection();
  let rango = document.createRange();
  rango.selectNodeContents(texto);
  seleccion.removeAllRanges();
  seleccion.addRange(rango);
  document.execCommand("copy");
  seleccion.removeAllRanges();
}

function encriptar(texto) {
  let encriptado = texto.replace(/e/g, "enter")
                       .replace(/i/g, "imes")
                       .replace(/a/g, "ai")
                       .replace(/o/g, "ober")
                       .replace(/u/g, "ufat");
  return encriptado;
}

function desencriptar(texto) {
  let desencriptado = texto.replace(/enter/g, "e")
                           .replace(/imes/g, "i")
                           .replace(/ai/g, "a")
                           .replace(/ober/g, "o")
                           .replace(/ufat/g, "u");
  return desencriptado;
}

function ocultarElementos(elemento) { 
  const elementos = elemento.querySelectorAll('.mostrar');
  elementos.forEach((el) => {
    el.style.display = 'none';
  });
}
function mostrarTextoEncriptado(texto, elemento) {
  elemento.style.display = 'block';
  elemento.textContent = texto;
}