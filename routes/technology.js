const express = require("express");
const { home } = require("../controller/technology");
const { contact } = require("../controller/technology/contact");

const router = express.Router();

router.get("/", home);
router.get("/contact", contact);

module.exports = router;
