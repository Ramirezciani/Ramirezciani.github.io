const nodemailer = require('nodemailer');

// Configurar el transporte
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'tudirecciondecorreo@gmail.com',
        pass: 'tucontraseña'
    }
});

// Función para enviar el correo
function sendMail(from, subject, text) {
    const mailOptions = {
        from: from,
        to: 'destinatario@example.com', // Cambia esto por la dirección de correo del destinatario
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email enviado: ' + info.response);
        }
    });
}

module.exports = sendMail;
