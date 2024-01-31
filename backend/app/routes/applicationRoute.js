const { Router } = require('express');
const validateRequestBody = require('../helpers/validateRequestBody');
const { catchInternalServerError } = require('../middlewares/catchError');
const ApplicationController = require('../controllers/application_form/applicationController');
const { validateCreateApplication } = require('../../validators/application.validators');
const applicationRouter = Router();



// API endpoint to handle form submissions
applicationRouter.post('/application-form',
 validateRequestBody(validateCreateApplication, "payload" ),
 catchInternalServerError(ApplicationController.postApplication)
  )
module.exports = applicationRouter; 
applicationRouter.post('/submit-form',
 validateRequestBody(validateCreateApplication),
 ApplicationController.postApplication
  )
module.exports = applicationRouter 
