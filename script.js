/*header*/

const header = document.querySelector("header");

let itemsNav = document.querySelectorAll("header nav ul li a");
let buttonHeader = document.querySelector("#abrir-menu i");
let logo = document.querySelector(".name");

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled'); // Añade la clase si el scroll pasa los 50px
      itemsNav.forEach((item)=>{
        item.classList.remove("blanco");
        item.classList.add("negro");
        });

        buttonHeader.classList.remove("blanco");
        buttonHeader.classList.add("negro");

    logo.setAttribute("src", "./assets/logo/logo-negro-completo.png");

    } else {
      header.classList.remove('scrolled'); // Quita la clase si el scroll vuelve arriba
      itemsNav.forEach((item)=>{
        item.classList.remove("negro");
        item.classList.add("blanco");
        });

        buttonHeader.classList.add("blanco");
        buttonHeader.classList.remove("negro");

        logo.setAttribute("src", "./assets/logo/logo-blanco-comp.png");

    }


});

/*logo header*/

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        let p = document.querySelector(".p-img");
        let r = document.querySelector(".r-img");
        p.classList.add("moverse");
        r.classList.add("moverse");

    }, 1000);

    setTimeout(() => {

        document.querySelector(".p-img").classList.add("invisibleA");
        document.querySelector(".r-img").classList.add("invisibleA");

        let nombre = document.querySelector(".name");
        nombre.classList.remove("invisibleA");
        nombre.classList.add("visible"); // Agrega la clase que hace la transición suave

    }, 2000);
});

/*slider*/

const dataSlider = [
    {
        src: "./assets/imgs/slider/butterfly_inner_thoughts.jpg"
    },

    {
        src: "./assets/imgs/slider/hope.jpg"
    },

    {
        src: "./assets/imgs/slider/Ningu╠ün Miedo.jpg"
    },

    {
        src: "./assets/imgs/slider/ningun-miedo-ii.jpg"
    }
];

const botonAnterior = document.getElementById("botonAnterior");
const botonSiguiente = document.getElementById("botonSiguiente");

const imagenSlider = document.getElementById("imagenSlider");

let current = 0;
updateBack();

function updateBack(){
    imagenSlider.setAttribute("src", dataSlider[current].src);
    
}

function siguienteSlide (){

    current++;

    if (current > dataSlider.length-1){
        current=0;
    }

    updateBack();

}

function anteriorSlide(){

    current--;

    if (current<0){
        current = dataSlider.length-1;
    }

    updateBack();

}

botonAnterior.addEventListener('click', anteriorSlide);
botonSiguiente.addEventListener('click', siguienteSlide);

/*galeria*/

const cuadros = [

    {
        source: "./assets/imgs/slider/butterfly_inner_thoughts.jpg",
        title: "Butterfly Inner Thoughts",
        desc: "Grafito sobre papel",
        premio: "Career Art Award 2023, San Remo, Italia"
    },

    {
        source: "./assets/imgs/galeria/los-tres-pelos-dorados-del-diablo.jpg",
        title: "Los Tres Pelos de Oro del Diablo",
        desc: "Óleo",
        premio: ""
    },

    {
        source: "./assets/imgs/galeria/ningun-miedo-ii.jpg",
        title: "Ningún Miedo II",
        desc: "Óleo",
        premio: ""
    },

    {
        source: "./assets/imgs/galeria/la-perdida.jpg",
        title: "La Pérdida",
        desc: "Óleo",
        premio: ""
    },

    {
        source: "./assets/imgs/galeria/gravity.jpg",
        title: "Gravity",
        desc: "Óleo",
        premio: ""
    },

    {
        source: "./assets/imgs/galeria/beauty.jpg",
        title: "Beauty",
        desc: "Óleo",
        premio: ""
    },

    {
        source: "./assets/imgs/galeria/Ningu╠ün Miedo.jpg",
        title: "Ningún Miedo",
        desc: "Óleo",
        premio: ""
    },

    {
        source: "./assets/imgs/galeria/hope.jpg",
        title: "Hope",
        desc: "Óleo",
        premio: "Premio Leonardo Da Vinci de Oro, Italia"
    },

    {
        source: "./assets/imgs/galeria/sakura.jpg",
        title: "Sakura",
        desc: "Óleo",
        premio: ""
    },


];

const contCuadros = document.getElementById("contCuadros");

let grilla1 = document.createElement("div");
grilla1.setAttribute("id", "grilla1")
let grilla2 = document.createElement("div");
grilla2.setAttribute("id", "grilla2")
let grilla3 = document.createElement("div");
grilla3.setAttribute("id", "grilla3")

let pos;

function generarGaleria(){

    for (let i=0; i<cuadros.length; i++){

        let imagen = document.createElement("img");
        imagen.setAttribute("src", cuadros[i].source);
        pos=i;
        imagen.setAttribute("position", pos);
        imagen.classList.add("w100", "objCover");
        imagen.addEventListener("click", mostrar_modal);

        if (i==0  || i== 3  || i==6 ){
            grilla1.appendChild(imagen);
        }

        if (i==1  || i== 4  || i==7 ){
            grilla2.appendChild(imagen);
        }

        if (i==3){
            imagen.setAttribute("id", "imagen3");
        }
        if (i==4){
            imagen.setAttribute("id", "imagen4");
        }
        if (i==8){
            imagen.setAttribute("id", "imagen8");
        }

        if (i==2  || i== 5  || i==8 ){
            grilla3.appendChild(imagen);
        }

        contCuadros.append(grilla1, grilla2, grilla3);

    }

}

const modalCuadros = document.getElementById("modalCuadros");
const botonCerrarModal = document.querySelector("#modalCuadros button");
const botonDerecha = document.getElementById("botonDerecha");
const botonIzquierda = document.getElementById("botonIzquierda");
let imagenModal = document.querySelector("#modalCuadros img");
let divModal = document.querySelector("#modalCuadros div");
let tituloModal = document.querySelector("#modalCuadros div h4");
let desCuadro = document.getElementById("desCuadro");
let premio = document.getElementById("premio");

function mostrar_modal(){

    imagenModal.classList.remove("opacidadBaja");
    divModal.classList.add("invisible");

    let position = this.getAttribute("position");
    imagenModal.setAttribute("src", cuadros[position].source);
    imagenModal.classList.add("w100", "objCover");
    
    tituloModal.innerHTML = cuadros[position].title;
    desCuadro.innerHTML = cuadros[position].desc;
    premio.innerHTML = cuadros[position].premio;

    modalCuadros.showModal();

}

generarGaleria();

botonCerrarModal.addEventListener('click', ()=>{

    imagenModal.classList.remove("opacidadBaja");
    divModal.classList.add("invisible");
    botonIzquierda.classList.add("invisible");
    botonDerecha.classList.remove("invisible");

    modalCuadros.close();
});

botonDerecha.addEventListener('click', ()=>{
    imagenModal.classList.add("opacidadBaja");
    divModal.classList.remove("invisible");
    botonIzquierda.classList.remove("invisible");
    botonDerecha.classList.add("invisible");
});

botonIzquierda.addEventListener('click', ()=>{
    imagenModal.classList.remove("opacidadBaja");
    divModal.classList.add("invisible");
    botonIzquierda.classList.add("invisible");
    botonDerecha.classList.remove("invisible");
});

/*menu hamburguesa*/

const nav = document.getElementById("nav")
const cerrar = document.getElementById("cerrar-menu");
const abrir = document.getElementById("abrir-menu");

abrir.addEventListener('click', ()=>{
    nav.classList.add("visible");
});

cerrar.addEventListener('click', ()=>{
    nav.classList.remove("visible");
});

/*esto es para que cuando se toque en algun link del menu vaya a la section ocultando el nav*/

const links = document.querySelectorAll('#nav-list li a');

links.forEach(link=>{
    link.addEventListener('click', ()=>{
        nav.classList.remove("visible");
    })
});