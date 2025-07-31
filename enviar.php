<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validar campos obligatorios
    $required = ['nombre', 'apellido', 'email', 'mensaje'];
    foreach ($required as $field) {
        if (empty($_POST[$field])) {
            die("El campo $field es requerido.");
        }
    }

    // Sanitizar y validar
    $nombre = htmlspecialchars(trim($_POST['nombre']));
    $apellido = htmlspecialchars(trim($_POST['apellido']));
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    $telefono = preg_replace('/[^0-9]/', '', trim($_POST['telefono']));
    $mensaje = htmlspecialchars(trim($_POST['mensaje']));

    if (!$email) {
        die("Email inválido.");
    }

    // Configurar correo
    $destinatario = "info@plaul.com.ar";
    $asunto = "Nueva consulta de $nombre $apellido";
    $cuerpo = "Nombre: $nombre $apellido\n";
    $cuerpo .= "Email: $email\n";
    $cuerpo .= "Teléfono: $telefono\n\n";
    $cuerpo .= "Mensaje:\n$mensaje\n";

    // Cabeceras seguras
    $headers = "From: contacto@tudominio.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Enviar y manejar errores
    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
        header("Location: gracias.html");
        exit();
    } else {
        error_log("Error al enviar correo a $destinatario");
        header("Location: error.html?code=mail_failed");
        exit();
    }
} else {
    header("Location: index.html");
    exit();
}
?>