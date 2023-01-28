const encriptar = () =>{
    const textoIngresado = document.getElementById("ingresado").value;
    const nuevotexto = textoIngresado.replaceAll("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat")
  
    document.getElementById("devuelve").innerHTML = nuevotexto;
    document.getElementById("devuelve").style.display = "block";
    document.getElementById("copiar").style.display = "block";
    document.getElementById("img-resultado").style.display = "none";
    document.getElementById("h2").style.display = "none";
    document.getElementById("mensaje").style.display = "none";
  
}
  
const copiar = () =>{
    const textocopiado = document.getElementById("devuelve").textContent;
    navigator.clipboard.writeText(textocopiado);
}
  
const desencriptar = () =>{
    const textoIngresado = document.getElementById("ingresado").value;
    const nuevotexto = textoIngresado.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");
    document.getElementById("devuelve").innerHTML = nuevotexto;
    document.getElementById("devuelve").style.display = "block";
    document.getElementById("copiar").style.display = "block";
    document.getElementById("img-resultado").style.display = "none";
    document.getElementById("h2").style.display = "none";
    document.getElementById("mensaje").style.display = "none";
}