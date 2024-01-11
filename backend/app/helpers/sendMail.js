const router = require("express").Router();
const nodemailer = require("nodemailer");

const sendMail = async ({subject, html, to="orinamesunday360@gmail.com", from = "Teknokleen"}) => {
    
var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "orinamesunday360@gmail.com",
      pass: "jhwgoeovlwjbcgmi"
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