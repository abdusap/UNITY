const express= require('express');
const { home } = require('../controller/advertising');
const { contact, contactForm } = require('../controller/advertising/contact');
const { about } = require('../controller/advertising/about');
const { validateContactForm } = require('../utilities/apiValidation');

const router = express.Router();

router.get('/',home)
router.get('/contact',contact)
router.post('/contact',validateContactForm, contactForm)
router.get('/about',about)


module.exports=router