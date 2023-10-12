document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Aquí debes implementar la lógica de autenticación real, verificar el nombre de usuario y contraseña, y redirigir al usuario a la página correcta.

        // Ejemplo de verificación simple:
        if (username === "admin" && password === "admin123") {
            window.location.href = "index.html"; // Redirige al usuario a la página principal de administrador.
        } else if (username === "cliente" && password === "cliente123") {
            window.location.href = "index.html"; // Redirige al usuario a la página principal de cliente.
        } else {
            alert("Credenciales incorrectas. Inténtalo de nuevo.");
        }
    });

    registerForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const newUsername = document.getElementById("new-username").value;
        const newPassword = document.getElementById("new-password").value;

        // Aquí debes implementar la lógica para registrar nuevos usuarios.
        // Puedes enviar los datos al servidor para su almacenamiento seguro.

        alert("Usuario registrado con éxito. Ahora puedes iniciar sesión.");
    });
});
