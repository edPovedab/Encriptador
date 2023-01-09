 
  //evento btn encriptar
  var btnEcriptar = document.getElementById("btn-encriptar");
  btnEcriptar.addEventListener("click", function(){
      encriptar();
      valores = document.getElementById("texto-encriptar");
      verificar = valores.value;
      console.log(typeof(verificar));
      if (verificar) {
        var btnCopiar = document.getElementById("btn-copiar");
        btnCopiar.style.display = "block";
        var ocultarMuneco = document.getElementById("dibujo");
        ocultarMuneco.style.display = "none";
        var ocultarTexto = document.getElementById("mensaje");
        ocultarTexto.style.display = "none"; 
        
      } else {
        var ocultarMuneco = document.getElementById("dibujo");
        ocultarMuneco.style.display = "";
        var ocultarTexto = document.getElementById("mensaje");
        ocultarTexto.style.display = "";
      } 
      
  } );

  //Evento btn desencriptar
  var btnDesencriptar = document.getElementById("btn-desencriptar");
  btnDesencriptar.addEventListener("click", function(){

    desencriptar();
    valores = document.getElementById("texto-encriptar");
    verificar = valores.value;
    console.log(typeof(verificar));
    if (verificar) {
      var btnCopiar = document.getElementById("btn-copiar");
      btnCopiar.style.display = "block";
      var ocultarMuneco = document.getElementById("dibujo");
      ocultarMuneco.style.display = "none";
      var ocultarTexto = document.getElementById("mensaje");
      ocultarTexto.style.display = "none"; 
      
    } else {
      var ocultarMuneco = document.getElementById("dibujo");
      ocultarMuneco.style.display = "";
      var ocultarTexto = document.getElementById("mensaje");
      ocultarTexto.style.display = "";
    }
    
    
    
  });

  //Evento btn copiar
  var btnCopiar = document.getElementById("btn-copiar");
  btnCopiar.addEventListener("click", function(){
    copiarTexto();
  });

  //Evento btn Pegar
  var btnPegar = document.getElementById("btn-pegar");
  btnPegar.addEventListener("click",function(){
    pegarTexto();
  });

  function encriptar(){
    var textoEncriptar = document.getElementById("texto-encriptar");
    var textoRecorrer = textoEncriptar.value;
    var textoEncriptado = "";
    for (let index = 0; index < textoRecorrer.length; index++) {
        var letra = textoRecorrer[index];
      switch (letra) {
          case "a":
            
          textoEncriptado = textoEncriptado + "ai";
          break;
          case "e":
            
          textoEncriptado = textoEncriptado + "enter";
          break;
          case "i":
            
          textoEncriptado = textoEncriptado + "imes";
          break;
          case "o":
            
          textoEncriptado = textoEncriptado + "ober";
          break;
          case "u":
            
          textoEncriptado = textoEncriptado + "ufat";
          break;
        
          default:
            textoEncriptado = textoEncriptado + letra;
          break;
        }
      
    }

    var textoResultado = document.getElementById("texto-resultado");
    textoResultado.innerText = textoEncriptado;
  }

  function desencriptar(){
    var textoEncriptar = document.getElementById("texto-encriptar");
    var textoRecorrer = textoEncriptar.value;
    var textoDesencriptado = "";
    textoDesencriptado = textoRecorrer.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    var textoResultado = document.getElementById("texto-resultado");
    textoResultado.innerText = textoDesencriptado;
  }

  function copiarTexto(){
    try {
      var textoArea = document.getElementById("texto-resultado");
      console.log(textoArea.select());
      funciona = document.execCommand("copy");
      if (funciona) {
          console.log("Funciona")
      } else {
        console.log("no se copia")
      }
    } catch (error) {
      console.log(" brownser no soportado")
    }
    
}
function pegarTexto(){
  let pasteArea= document.getElementById('texto-encriptar');
    pasteArea.value = '';
    navigator.clipboard.readText().then((text)=>{
        pasteArea.value = text;
      });
}