//Función para manejar textos
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

//función texto inicial
function textoInicial() {
    asignarTextoElemento('p',`Solo letras minusculas y sin acentos`);
    return;
}

// Función para validar el texto
function validarTexto(texto) {
    // Verifica que el texto solo contenga letras minúsculas y espacios
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

// Función para encriptar el texto
function encriptarTexto() {
    const texto = document.getElementById('cifrar').value;

   
    // Validar el texto antes de encriptar
    if (!validarTexto(texto) && texto.length > 0) {
        asignarTextoElemento('p', `Por favor, no ingrese letras mayúsculas, ni caracteres especiales, ni tildes.`);
        document.getElementById("cifrar").value='';
        return;
    } else {
        const div1 = document.getElementById("ocultar__textarea");
        const div2 = document.getElementById("ocultar__elementos");

        // Encriptar el texto
        const textoEncriptado = texto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        
        // Mostrar/ocultar los divs según el resultado del encriptado
        if (textoEncriptado) {
            div1.style.display = "block";
            div2.style.display = "none";
        }
        
        document.getElementById("cifrar").value='';
        // Asignar el texto encriptado al textarea de salida
        document.getElementById('descifrar').value = textoEncriptado;
    }
}


// Función para desencriptar el texto
function desencriptarTexto() {
     const texto = document.getElementById('cifrar').value;
     document.getElementById("cifrar").value='';

     // Validar el texto antes de desencriptar
     if (texto.length > 0) {
        const textoDesencriptado = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
     
        document.getElementById('descifrar').value = textoDesencriptado;
     }
     
}

//función para copiar el texto
// Función para copiar el texto
document.getElementById("copyButton").addEventListener("click", function() {
    // Obtén el texto del textarea
    const textarea = document.getElementById("descifrar");
    const textToCopy = textarea.value;
    textarea.select();

    // Usa la API de portapapeles para copiar el texto
    navigator.clipboard.writeText(textToCopy);
});

textoInicial();