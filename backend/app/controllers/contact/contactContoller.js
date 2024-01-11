const mysql = require("../../../config/mysql");
const db = require("../../../config/mysql");
const contactEmailTemplate = require("../../../emailTemplate/contactEmail");
const sendMail = require("../../helpers/sendMail");
class ContactController{

    static async postContact(req, res) {
            const {name, email, phone, message} = req.body;
            const html = "your content";
        await sendMail(
            "Contact message",
             html, 
             email,
             phone,
            message,
            name )
        return res.send("Your application was submitted successfully Thank you we'll get back to you")
    }
          
    }

    module.exports = ContactController;
