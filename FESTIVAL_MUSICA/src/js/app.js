document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
})

function iniciarApp () {
    crearGaleria()
    scrollNav()
    navegacionFija()
}

function navegacionFija() {
    const barra = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')
    const body = document.querySelector('body')

    window.addEventListener('scroll', function(){
        if (sobreFestival.getBoundingClientRect().top < 0) {
            barra.classList.add('fijo')
            body.classList.add('body-scroll')
        } else {
            barra.classList.remove('fijo')
            body.classList.remove('body-scroll')
        }
    })
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes')
    
    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('picture')
        imagen.innerHTML = `
            <source srcset="build/img/thumb/${i}.avif" type="image/avif">
            <source srcset="build/img/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" src="src/img/thumb/${i}.jpg" alt="Imagen galeria">
        `
        imagen.onclick = function () {
            mostrarImagen(i)
        }

        galeria.appendChild(imagen)
    }
}

function mostrarImagen(id) {
    const imagen = document.createElement('picture')
    imagen.innerHTML = `
            <source srcset="build/img/grande/${id}.avif" type="image/avif">
            <source srcset="build/img/grande/${id}.webp" type="image/webp">
            <img loading="lazy" src="src/img/grande/${id}.jpg" alt="Imagen galeria">
        `
    //Crea el Overlay con la imagen
    const overlay = document.createElement('DIV')
    overlay.appendChild(imagen)
    overlay.classList.add('overlay')
    overlay.onclick = function(){
        removerImagen(overlay)
    }
    
    //Boton para cerrar le modal
    const cerrarModal = document.createElement('P')
    cerrarModal.textContent = 'X'
    cerrarModal.classList.add('btn-cerrar')
    cerrarModal.onclick =  function() {
        removerImagen(overlay)
    }
    overlay.appendChild(cerrarModal)

    //Se añade al HTML
    const body = document.querySelector('body')
    body.appendChild(overlay)
    body.classList.add('fijar-body')
}

function removerImagen(element) {
    const body = document.querySelector('body')
    body.classList.remove('fijar-body')
    element.remove()
}

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a')
    enlaces.forEach( enlace => {
        enlace.addEventListener('click', function(e) {
            e.preventDefault()
            const seccionScroll = e.target.attributes.href.value
            const seccion = document.querySelector(seccionScroll)
            seccion.scrollIntoView({behavior: "smooth"})
        })
    })
}