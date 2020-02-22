const Joi = require('@hapi/joi');

const schema = Joi.object({
    email: Joi.string()
        .email({minDomainSegments :2})
        .min(5)
        .max(35),

    fullName :Joi.string()
    .pattern(/^([A-Z][a-z]+ ?){1,3}$/)
    .max(40)
});

module.exports = schema;