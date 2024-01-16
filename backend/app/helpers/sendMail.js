const router = require("express").Router();
const nodemailer = require("nodemailer");
require("dotenv").config();
const sendMail = async ({subject, html, to, from = "Teknokleen"}) => {
  var transport = nodemailer.createTransport({
    host: process.env.MAILER_HOST,
    port: process.env.MAILER_PORT,
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASSWORD
    }
  });
  let mailOptions = {
    from: from,
    to: to,
    subject: subject,
    html: html
  };

  var r = await transport.sendMail(mailOptions).catch((err)=> {
    if(err){
      return {error : err};
    }
  });
  return r;
};


module.exports = sendMail;