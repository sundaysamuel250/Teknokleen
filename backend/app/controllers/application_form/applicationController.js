const mysql = require("../../../config/mysql");
const db = require("../../../config/mysql");
const applicationEmailTemplate = require("../../../emailTemplate/applicationTemplate");
const nodemailer = require('nodemailer');
const sendMail = require("../../helpers/sendMail");
const courseRegistrationTemplate = require("../../../emailTemplate/courseRegistrationTemplate");
require("dotenv").config();

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
        to: process.env.TEKNO_NOTIFY, // Update with your Mailtrap inbox email
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
