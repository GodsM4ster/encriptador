const textusuario = document.querySelector(".texto-ingresado");
const mensajencriptado = document.querySelector(".texto-encriptado");

function botonencriptar(){
    if (textusuario.value==""){
        alert("ingrese texto")        
    }
    else {
        const textoencriptado = encriptar(textusuario.value)
        mensajencriptado.value = textoencriptado;
        mensajencriptado.style.backgroundImage = 'none';
        textusuario.value="";
        }
}

function encriptar(textoencriptar){
    let letrascodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoencriptar=textoencriptar.toLowerCase();

    for (let iteracion=0; iteracion<letrascodigo.length; iteracion ++ ) {
        if(textoencriptar.includes(letrascodigo[iteracion][0])){
            textoencriptar=textoencriptar.replaceAll(letrascodigo[iteracion][0],letrascodigo[iteracion][1]);
        }
    }   
    return textoencriptar;
}

function botondesencriptar(){
    const textodesencriptado = desencriptar(textusuario.value)
    mensajencriptado.value = textodesencriptado;
    textusuario.value=""

    if (mensajencriptado.value == ""){
        mensajencriptado.style.backgroundImage = "url('assets/anya.png')";}
    else {
        mensajencriptado.style.backgroundImage = 'none'}
}

function desencriptar(textodesencriptar){
    let letrascodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    
    for (let iteracion=0; iteracion<letrascodigo.length; iteracion ++ ) {
        if(textodesencriptar.includes(letrascodigo[iteracion][1])){
            textodesencriptar=textodesencriptar.replaceAll(letrascodigo[iteracion][1],letrascodigo[iteracion][0]);
        }
    }   
    return textodesencriptar;
}

function copiar() {
    if (mensajencriptado.value == "" ){
        alert("No hay texto para copiar")   
    }
    else {
        mensajencriptado.select();
        navigator.clipboard.writeText(mensajencriptado.value);
        mensajencriptado.value = ""
        alert("Copiado")}
        mensajencriptado.style.backgroundImage = "url('assets/anya.png')";
    }
