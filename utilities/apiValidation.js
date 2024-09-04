const Joi = require('joi');


exports.validateContactForm = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string()
            .trim()
            .required()
            .messages({
                "string.empty": "Name is required.",
            }),

       email: Joi.string()
            .email({ tlds: { allow: false } })
            .max(40)
            .required()
            .regex(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
            .messages({
                "string.email": "Please enter a valid email address.",
                "string.pattern.base": "Please enter a valid email address.",
                "string.max": "Email must be at most 40 characters.",
                "string.empty": "Email is required.",
            }),

       subject: Joi.string()
            .trim()
            .required()
            .messages({
                "string.empty": "Subject is required.",
            }),

       phone: Joi.string()
            .optional()
            .allow('')
            .regex(/^[0-9]{9,12}$/)
            .messages({
                "string.pattern.base": "Phone number must be between 9 and 12 digits.",
            }),

       message: Joi.string()
            .trim()
            .min(1)
            .required()
            .messages({
                "string.empty": "Message is required.",
                "string.min": "Message must be at least 1 characters.",
            })
    });

    const { error } = schema.validate(req.body, {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true
    });

    if (error) {
        const messages = error.details.map(detail => `${detail.context.label} error: ${detail.message}`);
        return res.status(400).json({
            status: false,
            message: messages.join(', '),
            data: {}
        });
    }

    next();
};

