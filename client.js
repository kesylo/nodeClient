// require du package nodemailer
let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass: pass
    }
});


let mailOptions = {
    from: '"email 👻" <email>',
    to: "email",
    subject: 'Test du client mail ✔', 
    text: 'As tu recu mon message text', 
    html: '<h1>As tu recu mon message HTML</h1>'
};


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
