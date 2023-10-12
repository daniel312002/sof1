document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    navLinks.forEach(function(link, index) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            sections.forEach(function(section) {
                section.style.display = "none";
            });
            sections[index].style.display = "block";
        });
    });

    // Mostrar la sección "Eventos Actuales" por defecto
    sections[0].style.display = "block";
});
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    navLinks.forEach(function(link, index) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            sections.forEach(function(section) {
                section.style.display = "none";
                section.style.opacity = 0;
            });
            sections[index].style.display = "block";
            setTimeout(function() {
                sections[index].style.opacity = 1;
            }, 100);
        });
    });

    // Mostrar la sección "Eventos Actuales" por defecto
    sections[0].style.display = "block";
    setTimeout(function() {
        sections[0].style.opacity = 1;
    }, 100);
});
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    const adminLinks = document.querySelectorAll(".admin-link");
    const clientLinks = document.querySelectorAll(".client-link");
    const sections = document.querySelectorAll("section");

    // Simulación de roles de usuario
    const esAdministrador = false; // Cambiar a 'true' para simular un usuario administrador
    const esCliente = false; // Cambiar a 'true' para simular un usuario cliente

    if (!esAdministrador) {
        adminLinks.forEach(function(link) {
            link.style.display = "none";
        });
    }

    if (!esCliente) {
        clientLinks.forEach(function(link) {
            link.style.display = "none";
        });
    }

    navLinks.forEach(function(link, index) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            sections.forEach(function(section) {
                section.style.display = "none";
                section.style.opacity = 0;
            });
            sections[index].style.display = "block";
            setTimeout(function() {
                sections[index].style.opacity = 1;
            }, 100);
        });
    });

    // Mostrar la sección "Eventos Actuales" por defecto
    sections[0].style.display = "block";
    setTimeout(function() {
        sections[0].style.opacity = 1;
    }, 100);
});
