export default function correo (env) {

    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'gesallro@gmail.com',
            pass: 'jesus Vs orgullo'
        }
    });

    var mailOptions = {
        from: env.correo,
        to: 'jarodriguezr@ufpsu.edu.co',
        subject: env.asunto+''+env.nombre,
        text: env.telefono+''+env.ciudad+''+env.mensaje
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}