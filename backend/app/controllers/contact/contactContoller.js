const mysql = require("../../../config/mysql");
const db = require("../../../config/mysql");
const { default: contactEmailTemplate } = require("../../../emailTemplate/contactEmail");
const sendMail = require("../../helpers/sendMail");
class ContactController{

    static async postContact(req, res) {
            const formData = req.body;
            const html = contactEmailTemplate({
                name: name,
                email: email,
                phone: phone,
                message: message,
            });
        await sendMail(subject, html, to, from )
    }
          
    }

    module.exports = ContactController;
