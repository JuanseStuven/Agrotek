const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const APP_URL = process.env.APP_URL || "http://localhost:3000"; // Default to localhost if not set
console.log(`Application running at: ${APP_URL}`);

const app = express();
const PORT = process.env.PORT || 3000;

// Email configuration
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const MAIL_HOST = process.env.MAIL_HOST;
const MAIL_PORT = process.env.MAIL_PORT;

app.use(cors());
app.use(bodyParser.json());

// Create a transporter using your mail server
const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  secure: false,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "info@agroteksa.com",
    subject: `Nuevo mensaje de ${name}`,
    text: message,
  };
  console.log("Enviando mail desde " + email);

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error al enviar el correo:", error);
      return res.status(500).send(error.toString());
    }
    console.log("Correo enviado:", info.response);
    res.status(200).send("Mensaje enviado: " + info.response);
  });
});

app.listen(() => {
  console.log(`Servidor corriendo en ${APP_URL}`);
});
