document.addEventListener("DOMContentLoaded", () => {
    alert("Por favor, ingrese solo letras minúsculas sin símbolos ni números.");
    const textoIngresadoSpan = document.getElementById("textoTextarea");
    const resultadoSpan = document.getElementById("resultado");
    const mensajeExiste = document.getElementById("msjAvisoUser");
    const mensajeRep = document.getElementById("parrafoImg");

    const encriptar = (texto) => {
        texto = texto.toLowerCase(); // Convertir todo a minúsculas
        texto = texto.replace(/e/g, "enter");
        texto = texto.replace(/i/g, "imes");
        texto = texto.replace(/a/g, "ai");
        texto = texto.replace(/o/g, "ober");
        texto = texto.replace(/u/g, "ufat");
        return texto;
    };

    const desencriptar = (texto) => {
        texto = texto.toLowerCase(); // Convertir todo a minúsculas
        texto = texto.replace(/enter/g, "e");
        texto = texto.replace(/imes/g, "i");
        texto = texto.replace(/ai/g, "a");
        texto = texto.replace(/ober/g, "o");
        texto = texto.replace(/ufat/g, "u");
        return texto;
    };

    window.encriptarTexto = () => {
        let texto = textoIngresadoSpan.value.toLowerCase(); // Convertir todo a minúsculas
        textoIngresadoSpan.textContent = texto || "Ningún mensaje fue encontrado";
        const textoEncriptado = encriptar(texto);
        resultadoSpan.textContent = textoEncriptado || "Ningún mensaje fue encontrado";
        mensajeRep.textContent = textoEncriptado;
    };

    window.desencriptarTexto = () => {
        let texto = textoIngresadoSpan.value.toLowerCase(); // Convertir todo a minúsculas
        textoIngresadoSpan.textContent = texto || "Ningún mensaje fue encontrado";
        const textoDesencriptado = desencriptar(texto);
        resultadoSpan.textContent = textoDesencriptado || "Ningún mensaje fue encontrado";
        mensajeRep.textContent = textoDesencriptado;
        mensajeExiste.textContent = "Este es su mensaje: "
    };
});
