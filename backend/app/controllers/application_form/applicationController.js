const mysql = require("../../../config/mysql");
const db = require("../../../config/mysql");
const applicationEmailTemplate = require("../../../emailTemplate/applicationTemplate");
const nodemailer = require('nodemailer');
const sendMail = require("../../helpers/sendMail");

class ApplicationController {

  static async postApplication(req, res) {
    try {
      let formDataWithFile= req.body;
      // Creating the HTML content for the email using the contactEmailTemplate
      let html = applicationEmailTemplate({
        firstname: formDataWithFile.firstname,
        lastname: formDataWithFile.lastname,
        email: formDataWithFile.email,
        message: formDataWithFile.message,
        resume: formDataWithFile.file
      });

      // Sending email using Nodemailer
      await sendMail({
        from: formDataWithFile.email,
        to: 'orinamesunday360@gmail.com', // Update with your Mailtrap inbox email
        subject: `Message from ${formDataWithFile.firstname}`,
        html: html
      });

      // Assuming the sendMail function is asynchronous and does not return a response
      // You can add additional logic or send a response back to the client if needed
      res.status(200).send('Form submitted successfully!');
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).send('Failed to submit form. Please try again later.');
    }
  }
}

module.exports = ApplicationController;
