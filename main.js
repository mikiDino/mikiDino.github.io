// Scroll animation
// window.addEventListener('scroll', function() {
//     let logoAnimado = document.getElementById('logo-animado');
//     let posObj1 = logoAnimado.getBoundingClientRect().top;
//     console.log(posObj1);
//     let winSize = window.innerHeight;
//     console.log("size "+ winSize);
    
//     if(posObj1<winSize){
//         logoAnimado.style.animation = 'mover 2s ease-in';
//         console.log('hzo');
//     }
// })

const logo1 = document.getElementById('logo1');
const logo2 = document.getElementById('logo2');
const svg1 = document.getElementById('svg1');
const svg3 = document.getElementById('svg3');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');

const cargarImagen = (entradas, observador) => {
    // console.log(entradas);
    // console.log(observador);
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
        }else{
            entrada.target.classList.remove('visible');
        }
    });
}
const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '0px 0px 0px 0px', // eso te dice en que momento hace el efecto(aparece cuando la imagen esta en medio)
    threshold: 0.8 //aparece en cuanto la imaen se vea, solo es hasta 1.0
});

observador.observe(logo1);
observador.observe(logo2);
observador.observe(svg1);
observador.observe(svg3);
observador.observe(img1);
observador.observe(img2);
observador.observe(img3);
observador.observe(img4);
observador.observe(img5);
observador.observe(img6);

// Scroll Menu
let ubicacionPrincipal = window.pageYOffset;
let nav = document.getElementsByTagName('nav');

window.addEventListener("scroll", function () {
    let desplazamientoActual = window.pageYOffset;
    // console.log("des "+ desplazamientoActual);
    // console.log("ubi "+ubicacionPrincipal);
    if (ubicacionPrincipal >= desplazamientoActual) {
        nav[0].classList.remove('baja');
    } else {
        nav[0].classList.add('baja');
    }
    ubicacionPrincipal = desplazamientoActual;
});

// Menu

let headerLink = document.querySelectorAll(".header-link")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function () {
    if (semaforo) {
        document.querySelectorAll(".hamburguer")[0].style.color = "#fff"
        semaforo = false;
    } else {
        document.querySelectorAll(".hamburguer")[0].style.color = "#000"
        semaforo = true;
    }

    headerLink.classList.toggle("menudos"); // verifica si esta o no menudos para agregar o quitar
})


document.querySelectorAll('.inicio')[0].addEventListener('click', function(){
    headerLink.classList.toggle("menudos")
    document.querySelectorAll(".hamburguer")[0].style.color = "#000";
})
document.querySelectorAll('.nosotros')[0].addEventListener('click', function(){
    headerLink.classList.toggle("menudos")
    document.querySelectorAll(".hamburguer")[0].style.color = "#000";
})
document.querySelectorAll('.trabajos')[0].addEventListener('click', function(){
    headerLink.classList.toggle("menudos")
    document.querySelectorAll(".hamburguer")[0].style.color = "#000";
})
document.querySelectorAll('.servicios')[0].addEventListener('click', function(){
    headerLink.classList.toggle("menudos")
    document.querySelectorAll(".hamburguer")[0].style.color = "#000";
})
document.querySelectorAll('.contactos')[0].addEventListener('click', function(){
    headerLink.classList.toggle("menudos")
    document.querySelectorAll(".hamburguer")[0].style.color = "#000";
})

// heightlight

const sections = document.querySelectorAll('section');
const navMenu = document.querySelectorAll('.header-link a');

window.addEventListener('scroll', ()=> {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        // console.log(sectionTop);
        const sectionHeight = section.clientHeight;
        // console.log(sectionHeight);

        if (scrollY >= sectionTop) {
            current = section.getAttribute('id')
        }
    });
    // console.log(current);
})