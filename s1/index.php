<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Sesión</title>
</head>
<body>
    <h2>Iniciar Sesión</h2>
    <form method="post" action="auth.php">
        <label for="username">Nombre de Usuario:</label>
        <input type="text" id="username" name="username" required>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" required>
        <button type="submit" name="login">Iniciar Sesión</button>
    </form>
</body>
</html>
<?php
session_start();

if (isset($_SESSION['username'])) {
    // El usuario está autenticado
    echo 'Bienvenido, ' . $_SESSION['username'] . '!';
    echo '<br>Rol: ' . $_SESSION['rol'];

    if ($_SESSION['rol'] === 'administrador') {
        // Mostrar contenido específico para administradores
    } else {
        // Mostrar contenido específico para clientes
    }

    // Puedes proporcionar enlaces para cerrar sesión si es necesario
    echo '<br><a href="logout.php">Cerrar Sesión</a>';
} else {
    header('Location: index.php'); // Redirige al usuario a la página de inicio de sesión si no está autenticado
}
?>
