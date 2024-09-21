const express = require("express");
const {
  contact,
  contactForm,
} = require("../controller/user/contactController");
const { home } = require("../controller/index");

const router = express.Router();

router.get("/", home);
router.use("/advertising", require("./advertising"));
router.use("/technologies", require("./technology"));

module.exports = router;
