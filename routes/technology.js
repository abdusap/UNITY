const express = require("express");
const { home } = require("../controller/technology");
const { contact, contactForm } = require("../controller/technology/contact");
const { validateContactForm } = require("../utilities/apiValidation");
const { about } = require("../controller/technology/about");

const router = express.Router();

router.get("/", home);
router.get("/contact", contact);
router.post('/contact',validateContactForm, contactForm)
router.get('/about',about)


module.exports = router;
