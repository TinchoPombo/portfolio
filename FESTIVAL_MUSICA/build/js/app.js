function iniciarApp(){crearGaleria(),scrollNav(),navegacionFija()}function navegacionFija(){const e=document.querySelector(".header"),n=document.querySelector(".sobre-festival"),t=document.querySelector("body");window.addEventListener("scroll",(function(){n.getBoundingClientRect().top<0?(e.classList.add("fijo"),t.classList.add("body-scroll")):(e.classList.remove("fijo"),t.classList.remove("body-scroll"))}))}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let n=1;n<=12;n++){const t=document.createElement("picture");t.innerHTML=`\n            <source srcset="build/img/thumb/${n}.avif" type="image/avif">\n            <source srcset="build/img/thumb/${n}.webp" type="image/webp">\n            <img loading="lazy" src="src/img/thumb/${n}.jpg" alt="Imagen galeria">\n        `,t.onclick=function(){mostrarImagen(n)},e.appendChild(t)}}function mostrarImagen(e){const n=document.createElement("picture");n.innerHTML=`\n            <source srcset="build/img/grande/${e}.avif" type="image/avif">\n            <source srcset="build/img/grande/${e}.webp" type="image/webp">\n            <img loading="lazy" src="src/img/grande/${e}.jpg" alt="Imagen galeria">\n        `;const t=document.createElement("DIV");t.appendChild(n),t.classList.add("overlay"),t.onclick=function(){removerImagen(t)};const c=document.createElement("P");c.textContent="X",c.classList.add("btn-cerrar"),c.onclick=function(){removerImagen(t)},t.appendChild(c);const o=document.querySelector("body");o.appendChild(t),o.classList.add("fijar-body")}function removerImagen(e){document.querySelector("body").classList.remove("fijar-body"),e.remove()}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",(function(e){e.preventDefault();const n=e.target.attributes.href.value;document.querySelector(n).scrollIntoView({behavior:"smooth"})}))})}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));
//# sourceMappingURL=app.js.map
