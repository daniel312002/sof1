<?php
session_start();

// Verifica si se ha enviado el formulario de inicio de sesión
if (isset($_POST['login'])) {
    // Conexión a la base de datos (ajusta estos valores según tu configuración)
    $db = new mysqli('localhost', 'tu_usuario', 'tu_contrasena', 'tu_base_de_datos');

    // Recupera las credenciales del formulario
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Consulta SQL para buscar el usuario en la base de datos
    $query = "SELECT * FROM usuarios WHERE nombre_usuario='$username' AND contrasena='$password'";
    $result = $db->query($query);

    if ($result->num_rows == 1) {
        // Usuario autenticado con éxito
        $user = $result->fetch_assoc();
        $_SESSION['username'] = $user['nombre_usuario'];
        $_SESSION['rol'] = $user['rol'];
        header('Location: index.php'); // Redirige al usuario a la página principal
    } else {
        // Error de autenticación
        header('Location: index.php?error=1');
    }

    // Cierra la conexión a la base de datos
    $db->close();
} else {
    header('Location: index.php'); // Redirige si no se envió el formulario
}
?>
