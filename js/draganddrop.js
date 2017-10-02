function comenzar(){
    	 soltar = document.getElementById("savetext");

    	soltar.addEventListener("dragenter", function(e){
    		e.preventDefault();}, false);

    	soltar.addEventListener("dragover", function(e){
    		e.preventDefault();}, false);

    	soltar.addEventListener("drop", soltado, false);
}

function soltado (e){
     e.preventDefault();
   	 let archivos = e.dataTransfer.files; //genera un array del archivo
   	 let listado = "";

   	 for (var f = 0; f < archivos.length; f++){
   	 	listado = archivos[f];
   	 	console.log(listado);
   	 	localStorage.setItem("texto", JSON.stringify(listado));
   	 }
     soltar.value = listado;
   	 //soltar.innerHTML = listado; //incrusta
}

window.addEventListener("load", comenzar, false);
