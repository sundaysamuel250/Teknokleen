const mysql = require("../../../config/mysql");
const db = require("../../../config/mysql");
const applicationEmailTemplate = require("../../../emailTemplate/applicationTemplate");
const nodemailer = require('nodemailer');
const sendMail = require("../../helpers/sendMail");
const courseRegistrationTemplate = require("../../../emailTemplate/courseRegistrationTemplate");
require("dotenv").config();

class ApplicationController {

  static async postApplication(req, res) {
  //  return res.send(req.file)
    try {
      // const setAttachments = req.file
      const setAttachments = _.merge(req.body, {
        file: {
          originalname: req.file.originalname,
          buffer: req.file.buffer,
        },
      });
      const  formDataWithFile = req.body;
      // Creating the HTML content for the email using the contactEmailTemplate
      let html = applicationEmailTemplate({
        firstname: formDataWithFile.firstname,
        lastname: formDataWithFile.lastname,
        email: formDataWithFile.email,
        message: formDataWithFile.message,
        attachments: setAttachments.attachments
      });
      

      // Sending email using Nodemailer
      await sendMail({
        from: formDataWithFile.email,
        to: 'orinamesunday360@gmail.com', // Update with your Mailtrap inbox email
        subject: `Message from ${formDataWithFile.firstname, formDataWithFile.lastname} `,
        html: html,
        attachments: {
          originalname: req.file.originalname,
          buffer: req.file.buffer,
        },

      });

      // Assuming the sendMail function is asynchronous and does not return a response
      // You can add additional logic or send a response back to the client if needed
      res.status(200).send('Application submitted successfully!' );
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ message: 'Error submitting application' });
    }
  }
  static async postApplicationCourses (req, res) {
    console.log(req.body);
    const {
      body : {name, email, phoneNumber, ref, amount, title, state, hearaboutus} 
    } = req;
    let html = courseRegistrationTemplate({
      salute : "Dear Admin",
      intro : "New Course payment was received from " + name,
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      reference: ref,
      amount: amount,
      course: title,
      state : state,
      hearaboutus: hearaboutus,
    });

    // Sending email using Nodemailer
    await sendMail({
      from: process.env.TEKNO_NOTIFY,
      to: process.env.TEKNO_NOTIFY, // Update with your Mailtrap inbox email
      subject: "New Course payment was received from " + name,
      html: html
    });

    html = courseRegistrationTemplate({
      salute : "Dear "+name,
      intro : "Your Course payment was received",
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      reference: ref,
      amount: amount,
      course: title,
      state : state,
      hearaboutus: hearaboutus,
    });
    await sendMail({
      from: process.env.TEKNO_NOTIFY,
      to: email, // Update with your Mailtrap inbox email
      subject: "Your Course payment was received",
      html: html
    });
    return res.send("success");
  }
}

module.exports = ApplicationController;
