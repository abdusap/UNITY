
const home= async (req, res,next) => {
    try{
        res.render('index.ejs')

      
    }catch(error){
      console.log(error);
      next(error)
    }
  }


const errorPage= async (req, res) => {
try{
  res.render('error.ejs')

}catch(err){
  console.log(err);
}
  }

  module.exports = {
    home,
    errorPage
  }