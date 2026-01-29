# Configuración de EmailJS para Agrotek

## Pasos para configurar EmailJS

### 1. Cuenta de EmailJS
- Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
- Inicia sesión o crea una cuenta gratuita

### 2. Servicio de Email
Ya tienes el Service ID configurado: `service_njrwhtk`

Si necesitas verificarlo o crear uno nuevo:
1. En el dashboard, ve a **Email Services**
2. Verifica que tu servicio `service_njrwhtk` esté activo
3. Conecta tu cuenta de Gmail, Outlook u otro proveedor de email

### 3. Crear un Template de Email

1. Ve a **Email Templates** en el menú lateral
2. Haz clic en **Create New Template**
3. Configura el template con las siguientes variables:

**Subject (Asunto):**
```
Nuevo mensaje de contacto de {{from_name}}
```

**Content (Contenido):**
```
Has recibido un nuevo mensaje de contacto desde el sitio web de Agrotek.

Nombre: {{from_name}}
Email: {{from_email}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de agroteksa.com
```

4. Guarda el template y copia el **Template ID** (ejemplo: `template_abc123xyz`)

### 4. Obtener tu Public Key

1. Ve a **Account** en el menú superior derecho
2. Haz clic en **General**
3. Encontrarás tu **Public Key** (ejemplo: `AbCdEf123456`)

### 5. Actualizar la Configuración

Abre el archivo `src/config/emailConfig.js` y reemplaza los valores:

```javascript
export const emailConfig = {
  serviceID: "service_njrwhtk",
  templateID: "template_TU_TEMPLATE_ID_AQUI", // Reemplaza con tu Template ID
  publicKey: "TU_PUBLIC_KEY_AQUI", // Reemplaza con tu Public Key
};
```

### 6. Verificar el Template

Asegúrate de que tu template en EmailJS incluya estas variables:
- `{{from_name}}` - Nombre del usuario que envía el mensaje
- `{{from_email}}` - Email del usuario
- `{{message}}` - Mensaje del usuario
- `{{to_name}}` - Nombre del destinatario (Agrotek)

### 7. Configurar el Email de Destino

En EmailJS, en la configuración de tu template:
1. Configura el **To Email** (email donde quieres recibir los mensajes)
2. Puedes usar tu email de empresa o el email que prefieras

### 8. Probar el Formulario

1. Inicia tu aplicación: `npm run dev`
2. Ve al formulario de contacto
3. Envía un mensaje de prueba
4. Verifica que llegue al email configurado

## Límites del Plan Gratuito

- **200 emails por mes**
- Si necesitas más, considera el plan premium

## Solución de Problemas

### Error: "Invalid template ID"
- Verifica que hayas copiado correctamente el Template ID

### Error: "Invalid public key"
- Verifica que hayas copiado correctamente la Public Key

### No llegan los emails
- Revisa la bandeja de spam
- Verifica que el servicio de email esté correctamente conectado en EmailJS
- Revisa los logs en el dashboard de EmailJS

## Seguridad

- La Public Key es segura para usar en el cliente (frontend)
- EmailJS maneja la seguridad del envío de emails
- No necesitas un backend para enviar emails

## Soporte

Si tienes problemas, consulta la documentación oficial:
- [Documentación de EmailJS](https://www.emailjs.com/docs/)
- [Guía de React](https://www.emailjs.com/docs/examples/reactjs/)
