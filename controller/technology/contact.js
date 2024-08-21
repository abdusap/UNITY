const contact = async (req, res, next) => {
  try {
    res.render("technology/contact");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  contact,
};
