const mysql = require("../../../config/mysql");
const db = require("../../../config/mysql");
<<<<<<< HEAD
const contactEmailTemplate = require("../../../emailTemplate/contactEmail");
=======
const { default: contactEmailTemplate } = require("../../../emailTemplate/contactEmail");
>>>>>>> origin/shopbe
const sendMail = require("../../helpers/sendMail");
class ContactController{

    static async postContact(req, res) {
<<<<<<< HEAD
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
=======
            const formData = req.body;
            const html = contactEmailTemplate({
                name: name,
                email: email,
                phone: phone,
                message: message,
            });
        await sendMail(subject, html, to, from )
>>>>>>> origin/shopbe
    }
          
    }

    module.exports = ContactController;
