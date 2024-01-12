
const { Router } = require('express');
const validateRequestBody = require('../helpers/validateRequestBody');
const { validateCreateContact } = require('../../validators/contact.validators');
const ContactController = require('../controllers/contact/contactContoller');
<<<<<<< HEAD
const { catchInternalServerError } = require('../middlewares/catchError');
=======
>>>>>>> origin/shopbe
const contactRouter = Router();



// API endpoint to handle form submissions
<<<<<<< HEAD
contactRouter.post('/contact-form',
 validateRequestBody(validateCreateContact, "payload" ),
 catchInternalServerError(ContactController.postContact)
  )
module.exports = contactRouter; 
=======
contactRouter.post('/submit-form',
 validateRequestBody(validateCreateContact),
 ContactController.postContact
  )
module.exports = contactRouter 
>>>>>>> origin/shopbe
