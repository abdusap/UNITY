const express= require('express');
const { home } = require('../controller/advertising');
const { contact } = require('../controller/advertising/contact');
const { about } = require('../controller/advertising/about');

const router = express.Router();

router.get('/',home)
router.get('/contact',contact)
router.get('/about',about)


module.exports=router