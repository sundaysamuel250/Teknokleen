const Joi = require("joi");

const validateCreateApplication = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().required(),
  message: Joi.string().required(),
  resume: Joi.string().required()
});

module.exports = { validateCreateApplication };
