// require du package nodemailer
let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'virginmobil8@gmail.com',
      pass: 'arafat1994'
    }
});


let mailOptions = {
    from: '"Keming 👻" <virginmobil8@gmail.com>',
    to: "virginmobil8@gmail.com, keming.loic@yahoo.com",
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
