
const contact= async (req, res,next) => {
    try{
  
        res.render('advertising/contact')

      
    }catch(error){
      console.log(error);
      next(error)
    }
  }



  module.exports = {
    contact
  }