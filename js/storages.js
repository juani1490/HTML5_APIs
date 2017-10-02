/*Use IndexedDB*/
var db;
let request = indexedDB.open("mybase", 3);

request.onerror = function(e){
 console.log('error al abrir la base de datos')
};

request.onsuccess = function(e){
  console.log('base de datos abierta correctamente')
  db = e.target.result;
};

request.onupgradeneeded = function(e){
  db = e.target.result;
  db.createObjectStore("texto", {keyPath: "clave"});
};

/*********************************************************************************************************************/
let save = () => {
  if (  document.getElementById('check').checked == true && document.getElementById('check2').checked == false) {
    /* Use localStorage*/
    let campo = document.getElementById('savetext');
    localStorage.setItem('textarea', campo.value);
    campo.value = '';
    campo.focus();
 }else{
   if (document.getElementById('check2').checked == true && document.getElementById('check').checked == false) {
     /*Use IndexedDB*/
     let campo = document.getElementById('savetext');
     let transc = db.transaction(["texto"], "readwrite");
     let store = transc.objectStore("texto");
     let add = store.add({clave:campo.value});
     campo.value = '';
     campo.focus();
   }
 }
}

let limpiar = () => {
  if (  document.getElementById('check').checked == true && document.getElementById('check2').checked == false) {
   /* Use localStorage*/
   localStorage.clear();
 }else {
   if (document.getElementById('check2').checked == true && document.getElementById('check').checked == false) {
     /*Use IndexedDB*/
     let transc = db.transaction(["texto"], "readwrite");
     let store = transc.objectStore("texto");
     let request = store.clear();
   }
 }
}
