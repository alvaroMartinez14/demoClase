/*alert("Hola mundo")
document.write("<h1>Hola mundo</h1>")
console.log("Hola mundo")*/

//const variable = 7;

/*let variable;
variable = 3;
console.log(variable);
console.log(typeof(variable));

variable = "Hola";
console.log(variable);*/

/*let nombre = "Alvaro";
let number = 5;
document.write(nombre + number)     //Concatena*/

/*let x = 2;
let y = "2";
document.write(x===y);      //Estrictamente igual*/

/*let nombre;
nombre = prompt("Introduce tu nombre");
document.write(nombre);*/

/*let x;                      //Prompt siempre coge cadena, por eso concatena
let y;                      //Los pasamos a numeros
x = prompt("Primer numero");
x = parseInt(x);
y = prompt("Segundo numero");
y = parseInt(y);
document.write(x+y);*/
                                    
/*let x = parseInt(prompt("Primer numero"));
let y = parseInt(prompt("Segundo numero"));
if (x==y) document.write("Los numeros son iguales");
else document.write("Los numeros no son igual");*/

/*let uno = parseInt(prompt("Primer nota"));
let dos = parseInt(prompt("Segunda nota"));
let tres = parseInt(prompt("Tercera nota"));
let cuatro = parseInt(prompt("Cuarta nota"));
let media = (uno+dos+tres+cuatro)/4;
document.write("La nota media es: "+media);*/

/*let num = 0;
let aux = 0;
for (var i=0;i<4;i++){
    aux = parseInt(prompt("Introduce nota "+(i+1)));
    num = num+aux;
}
document.write(`La nota media es: ${num/4}`);*/

/*let faren = parseInt(prompt("Introduce Farhrenheit"));
let celsius = (faren-32)*5/9;
document.write(`${faren} grados Far son ${celsius} celsius`);*/

//Ventana en el navegador

/*window.name = "Mi ventana";
var texto = "";

texto += "<br/>Nombre: " + window.name;*/

/*let cadena = document.getElementById("ventana");
console.log(cadena);

let cadena = document.getElementsByTagName("p");
console.log(cadena);*/

/*window.onload = function(){document.getElementById("ventana").addEventListener("click",alerta,false)}

function alerta(){
    alert("Ya es viernes");
}*/

//------------------DOM------------------

/*window.onload = function(){
    document.getElementById("test").addEventListener("click",f,false);
}

function f() {
    console.log("Funciona");
    var elemento = document.getElementsByTagName("h1")[0];
    elemento.innerHTML = "Buenas tardes";
}*/

/*window.onload = function(){
    document.getElementById("test").addEventListener("click",f,false);
}

function f() {
    var padre = document.getElementById("saludo");          <--
    var imagen = document.createElement("img");
    imagen.setAttribute("src","https://img.pccomponentes.com/articles/33/331188/1464-hp-15-dw1022ns-intel-core-i5-10210u-16gb-512gb-ssd-156.jpg");
    padre.appendChild(imagen);

    var hijo2 = document.createElement("img");
    hijo2.setAttribute("src","https://img.pccomponentes.com/articles/31/313052/1572-lenovo-ideapad-3-15ada05-amd-3020e-8gb-256gb-ssd-156.jpg");
    hijo2.setAttribute("alt","Este es un ordenador");

    imagen.parentNode.replaceChild(hijo2,imagen);               <--
}*/

/*window.onload = function(){
    document.getElementById("enlace").addEventListener("click",f,false);
}

function f(e) {
    e.preventDefault();                 <--
}*/
