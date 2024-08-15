const express= require('express');
const { home } = require('../controller/advertising');
const { contact } = require('../controller/advertising/contact');

const router = express.Router();

router.get('/',home)
router.get('/contact',contact)


module.exports=router