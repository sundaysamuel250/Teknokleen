const router = require("express").Router();
const nodemailer = require("nodemailer");
<<<<<<< HEAD

const sendMail = async ({subject, html, to="orinamesunday360@gmail.com", from = "Teknokleen"}) => {
    
var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "orinamesunday360@gmail.com",
      pass: "jhwgoeovlwjbcgmi"
=======
require("dotenv").config();
const sendMail = async ({subject, html, to, from = "Teknokleen"}) => {
  var transport = nodemailer.createTransport({
    host: process.env.MAILER_HOST,
    port: process.env.MAILER_PORT,
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASSWORD
>>>>>>> origin/shopbe
    }
  });
  let mailOptions = {
    from: from,
    to: to,
    subject: subject,
    html: html
  };

<<<<<<< HEAD



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
=======
  var r = await transport.sendMail(mailOptions).catch((err)=> {
    if(err){
      return {error : err};
    }
  });
  return r;
>>>>>>> origin/shopbe
};


module.exports = sendMail;