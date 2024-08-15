
const home= async (req, res,next) => {
    try{
  
        res.render('../view/user/home.ejs')

      
    }catch(error){
      console.log(error);
      next(error)
    }
  }


const errorPage= async (req, res) => {
try{
  res.render('../view/user/error.ejs')

}catch(err){
  console.log(err);
}
  }

  module.exports = {
    home,
    errorPage
  }