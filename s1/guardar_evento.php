<?php
// Conectar a la base de datos (ajusta estos valores según tu configuración)
$servername = "localhost";
$username = "tu_usuario";
$password = "tu_contrasena";
$dbname = "tu_base_de_datos";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error en la conexión a la base de datos: " . $conn->connect_error);
}

// Recuperar los datos del formulario
$eventName = $_POST['event-name'];
$eventDescription = $_POST['event-description'];
$eventDate = $_POST['event-date'];

// Insertar el evento en la base de datos
$sql = "INSERT INTO eventos (nombre, descripcion, fecha) VALUES ('$eventName', '$eventDescription', '$eventDate')";

if ($conn->query($sql) === TRUE) {
    echo "Evento creado con éxito.";
} else {
    echo "Error al crear el evento: " . $conn->error;
}

// Cerrar la conexión a la base de datos
$conn->close();
?>
