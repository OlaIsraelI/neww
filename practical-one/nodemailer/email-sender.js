const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth:{
    user: 'your_email@gmail.com',
    pass: 'your_email_password',
  },
});


const mailOptions = {
  from: 'your_email@gmail.com',
  to: 'receipient_email@gmail.com',
  subject: 'Hello from node.js',
  text: 'This is a test email sent from a node.js application!'
};

transporter.sendMail(mailOptions, (error, info) => {
  if(error){
    return console.log(`error: ${error}`);
  }
  console.log(`Email sent: ${info.response}`);
});