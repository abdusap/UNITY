
const about= async (req, res,next) => {
    try{
  
        res.render('technology/about')

      
    }catch(error){
      console.log(error);
      next(error)
    }
  }



  module.exports = {
    about
  }