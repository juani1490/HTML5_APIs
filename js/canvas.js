window.addEventListener("load", dibujar, false);

window.addEventListener("click", Animar_haciaAbajo, false);

var t=0;
var c=0;
var r=0;
var c2=0;
var cont = 0;
var cont2 = 0;
var cont3 = 0;
var cont4 = 0;

function dibujar(){
  let elemento = document.getElementById('lienzo');

	lienzo = elemento.getContext("2d");

                   //Triangulo
     /*************************************************/
     //comienzo a elaborar el trazado
	 lienzo.beginPath();

	 //muevo el lapiz en las coordenadas
	 lienzo.moveTo(100,200);//coordenadas de inicio

	 //dibujo las  lineas
	 lienzo.lineTo(200,200);//coordenadas de destino
	 lienzo.lineTo(150,100);//coordenadas de destino
	 lienzo.lineTo(100,200);//coordenadas de destino

	 //cierro el trazado
	 lienzo.closePath();

	 //lo muestro en el canvas
	 //lienzo.stroke();
	 lienzo.fill();//relleno
	 /*************************************************/

                  //Cuadrado
     /*************************************************/
     lienzo.beginPath();
	 lienzo.moveTo(300,200);
	 lienzo.lineTo(400,200);
	 lienzo.lineTo(400,100);
	 lienzo.lineTo(300,100);
	 lienzo.closePath();
	 lienzo.fill();
     /*************************************************/

                  //Rombo
     /*************************************************/
	 lienzo.beginPath();
	 lienzo.moveTo(550,200);
	 lienzo.lineTo(500,150);
	 lienzo.lineTo(550,100);
	 lienzo.lineTo(600,150);
	 lienzo.closePath();
	 lienzo.fill();
	 /*************************************************/
                 //circulo
     /*************************************************/
	 lienzo.beginPath();
	 lienzo.arc(750,155,50,0,6,false);//x,y,radio,
	 lienzo.closePath();
	 lienzo.fill();
}

  function aleatorio(inferior,superior){
  numPosibilidades = superior - inferior
  aleat = Math.random() * numPosibilidades
  aleat = Math.floor(aleat)
  return parseInt(inferior) + aleat
}

  function colorAleatorio(){
   return "rgb(" + aleatorio(0,255) + "," + aleatorio(0,255) + "," + aleatorio(0,255) + ")";
}

    function cuadradosAleatorios(lienzo){
   for(i=0; i<300; i+=10){
      for(j=0; j<250; j+=10){
         lienzo.fillStyle = colorAleatorio();
      }
   }
}


function Animar_haciaAbajo(){
    let elemento = document.getElementById('lienzo');
	  lienzo = elemento.getContext("2d");
    setInterval(animacion,15);
    setInterval("cuadradosAleatorios(lienzo)",10)
    elemento.style.background = "black";

}

function animacion(){
 lienzo.clearRect(0,0,900,300);

 //Triangulo
 if (t >= 200 && cont == 0) {
  	t = 4;
  	cont = 1;
  }else{
  	    if (cont != 1) {
  	      //inicio
	      lienzo.beginPath();
	      lienzo.moveTo(100,200+t);
	      lienzo.lineTo(200,200+t);
	      lienzo.lineTo(150,100+t);
	      lienzo.lineTo(100,200+t);
	      lienzo.closePath();
	      lienzo.fill();
  	   	  t+=4;
        }else{
             if (t >= 400) {
                t = 4;
             }else{
             	   if (cont != 0) {
             	   	//inicio desde arriba
	                  lienzo.beginPath();
	                  lienzo.moveTo(100,0+t);
	                  lienzo.lineTo(200,0+t);
	                  lienzo.lineTo(150,-100+t);
	                  lienzo.lineTo(100,0+t);
	                  lienzo.closePath();
	                  lienzo.fill();
	                  t+=4;
             	     }
                 }
           }
      }

 //Cuadrado
 if (c >= 240 && cont2 == 0) {
  	c = 3;
  	cont2 = 1;
  }else{
  	    if (cont2 != 1) {
  	       lienzo.beginPath();
	       lienzo.moveTo(300,200+c);
	       lienzo.lineTo(400,200+c);
	       lienzo.lineTo(400,100+c);
	       lienzo.lineTo(300,100+c);
	       lienzo.closePath();
	       lienzo.fill();
  	   	  c+=3;
        }else{
             if (c >= 400) {
                c = 3;
             }else{
             	   if (cont2 != 0) {
                      lienzo.beginPath();
	                  lienzo.moveTo(300,0+c);
	                  lienzo.lineTo(400,0+c);
	                  lienzo.lineTo(400,-100+c);
	                  lienzo.lineTo(300,-100+c);
	                  lienzo.closePath();
	                  lienzo.fill();
	                  c+=3;
             	     }
                 }
           }
      }


 //Rombo
 if (r >= 200 && cont3 == 0) {
  	r = 2;
  	cont3 = 1;
  }else{
  	    if (cont3 != 1) {
   	        lienzo.beginPath();
	        lienzo.moveTo(550,200+r);
	        lienzo.lineTo(500,150+r);
	        lienzo.lineTo(550,100+r);
	        lienzo.lineTo(600,150+r);
	        lienzo.closePath();
	        lienzo.fill();
  	   	  r+=2;
        }else{
             if (r >= 400) {
                r = 2;
             }else{
             	   if (cont3 != 0) {
   	                   lienzo.beginPath();
	                   lienzo.moveTo(550,0+r);
	                   lienzo.lineTo(500,-50+r);
	                   lienzo.lineTo(550,-100+r);
	                   lienzo.lineTo(600,-50+r);
	                   lienzo.closePath();
	                   lienzo.fill();
	                  r+=2;
             	     }
                 }
           }
      }


  //Circulo
 if (c2 >= 195 && cont4 == 0) {
  	c2 = 1;
  	cont4 = 1;
  }else{
  	    if (cont4 != 1) {
        	lienzo.beginPath();
	        lienzo.arc(750,155+c2,50,0,6,false);//x,y,radio,
	        lienzo.closePath();
	        lienzo.fill();
  	   	    c2+=1;
        }else{
             if (c2 >= 500) {
                c2 = 1;
             }else{
             	   if (cont4 != 0) {
	                  lienzo.beginPath();
	                  lienzo.arc(750,-155+c2,50,0,6,false);//x,y,radio,
	                  lienzo.closePath();
	                  lienzo.fill();
	                  c2+=1;
             	     }
                 }
           }
      }

}//fin Animacion
