const router = require("express").Router();
const nodemailer = require("nodemailer");

const sendMail = async ({subject, html, to, from = "Teknokleen"}) => {
    
var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e7ba21b71248e3",
      pass: "30b5c71be3551c"
    }
  });
  let mailOptions = {
    from: from,
    to: to,
    subject: subject,
    html: html
  };




  transport.sendMail(mailOptions, (error) => {
   
      if (error){
        return {
            status: false,
            error: error
            }
      }
      return{
        status: true,
      }
  });
};


module.exports = sendMail;