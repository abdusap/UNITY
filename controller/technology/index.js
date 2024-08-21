const home = async (req, res, next) => {
  try {
    res.render("technology/index");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  home,
};
