
const { Router } = require('express');
const validateRequestBody = require('../helpers/validateRequestBody');
const { validateCreateContact } = require('../../validators/contact.validators');
const ContactController = require('../controllers/contact/contactContoller');
const contactRouter = Router();



// API endpoint to handle form submissions
contactRouter.post('/submit-form',
 validateRequestBody(validateCreateContact),
 ContactController.postContact()
  )
module.exports = contactRouter 