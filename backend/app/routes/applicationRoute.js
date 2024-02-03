const { Router } = require('express');
const validateRequestBody = require('../helpers/validateRequestBody');
const { catchInternalServerError } = require('../middlewares/catchError');
const ApplicationController = require('../controllers/application_form/applicationController');
const { validateCreateApplication, validateCreateApplicationCourse } = require('../../validators/application.validators');
const applicationRouter = Router();
const multer = require("multer")

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });





// API endpoint to handle form submissions
applicationRouter.post('/application-form',
  validateRequestBody(validateCreateApplication, "payload"),
  catchInternalServerError(ApplicationController.postApplication)
)

applicationRouter.post('/submit-form',
  validateRequestBody(validateCreateApplication),
  catchInternalServerError(ApplicationController.postApplication)
)
applicationRouter.post(
  '/courses-form',
  validateRequestBody(validateCreateApplicationCourse, 'payload'),
  catchInternalServerError(ApplicationController.postApplicationCourses)
)
module.exports = applicationRouter 
