/** creating button click show hide navbar **/
var togglebtn=document.querySelector(".togglebtn");
var nav=document.querySelector(".navlinks");
var links=document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
})

var typed=new Typed(".input",{
    strings:["Eventos","Fiesta XV","Fiesta Matrimonios"],
    typedSpeed:70,
    backSpeed:55,
    loop:true
})

var contenedor = document.getElementById('contenedor_carga');

window.onload = function(){

    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0'; 
    
}