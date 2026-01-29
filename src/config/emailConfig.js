// Configuración de EmailJS
// Para obtener estas credenciales:
// 1. Ve a https://www.emailjs.com/
// 2. Inicia sesión o crea una cuenta
// 3. En el dashboard, encontrarás:
//    - Service ID: Ya tienes "service_njrwhtk"
//    - Template ID: Crea un template en la sección "Email Templates"
//    - Public Key: Lo encuentras en "Account" -> "General"

export const emailConfig = {
  serviceID: "service_njrwhtk",
  templateID: "template_0t6ftjl", // Reemplaza con tu Template ID
  publicKey: "og8cN_rLshCSCLcO_", // Reemplaza con tu Public Key de EmailJS
};

// Ejemplo de variables que debes usar en tu template de EmailJS:
// {{from_name}} - Nombre del remitente
// {{from_email}} - Email del remitente
// {{message}} - Mensaje del usuario
// {{to_name}} - Nombre del destinatario (Agrotek)
