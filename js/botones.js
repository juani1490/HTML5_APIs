let btn_storages = () => {
   document.getElementById('contstorage').style.display = "block";
   document.getElementById('contwebsocket').style.display = "none";
   document.getElementById('contcanvas').style.display = "none";
   document.getElementById('contsvg').style.display = "none";

}

let btn_websockets = () => {
   document.getElementById('contwebsocket').style.display = "block";
   document.getElementById('contstorage').style.display = "none";
   document.getElementById('contcanvas').style.display = "none";
   document.getElementById('contsvg').style.display = "none";

}

let btn_svg = () => {
   document.getElementById('contsvg').style.display = "block";
   document.getElementById('contcanvas').style.display = "none";
   document.getElementById('contstorage').style.display = "none";
   document.getElementById('contwebsocket').style.display = "none";

}

let btn_canvas = () => {
   document.getElementById('contcanvas').style.display = "block";
   document.getElementById('contstorage').style.display = "none";
   document.getElementById('contwebsocket').style.display = "none";
   document.getElementById('contsvg').style.display = "none";

}
