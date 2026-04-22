

// CAMBIAR TEXTO (SOBRE MÍ)
const boton = document.getElementById("btn-cambiar");
const texto = document.getElementById("texto-sobremi");

boton.addEventListener("click", function () {
    texto.textContent = "Busco crear soluciones útiles que conecten negocio y tecnología.";
});


// MOSTRAR / OCULTAR CONTENIDO (EFECTO DINÁMICO)
const btnToggle = document.createElement("button");
btnToggle.textContent = "Mostrar/Ocultar proyectos";
btnToggle.classList.add("btn-mostrar")

const seccionProyectos = document.getElementById("proyectos");

// Insertar botón antes de la sección
seccionProyectos.parentNode.insertBefore(btnToggle, seccionProyectos);

btnToggle.addEventListener("click", function () {
    if (seccionProyectos.style.display === "none") {
        seccionProyectos.style.display = "block";
    } else {
        seccionProyectos.style.display = "none";
    }
});

const mensaje = document.createElement("div");
mensaje.textContent = "Bienvenido a mi portafolio 👋";
mensaje.style.position = "fixed";
mensaje.style.top = "20px";
mensaje.style.right = "20px";
mensaje.style.background = "#000";
mensaje.style.color = "#fff";
mensaje.style.padding = "10px";
mensaje.style.borderRadius = "8px";

document.body.appendChild(mensaje);

setTimeout(() => {
    mensaje.remove();
}, 3000);





// Seleccionamos los elementos
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

// Verificación de seguridad en consola
if (!menuIcon || !navMenu) {
    console.warn("Error: No se encontró el icono o el menú en el HTML. Revisa los IDs.");
}

// Evento para abrir/cerrar el menú
menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuIcon.classList.toggle('toggle');
});

// Cerrar el menú al hacer clic en cualquier enlace
document.querySelectorAll('.boton').forEach(enlace => {
    enlace.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuIcon.classList.remove('toggle');
    });
});