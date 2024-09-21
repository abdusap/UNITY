const nodemailer = require('nodemailer');
const { contactFormAdvertisingTemplate } = require('../../utilities/emailTemplate');

const contact= async (req, res,next) => {
    try{
  
        res.render('advertising/contact')

      
    }catch(error){
      console.log(error);
      next(error)
    }
  }

const contactForm= async (req, res,next) => {
    try{
      if(req.body){
        const {name,email,phone, subject, message }= req.body
        // Create a Nodemailer transporter using the SendinBlue SMTP settings
  const transporter = nodemailer.createTransport({
    host: process.env.HOST, // Replace with SendinBlue SMTP host
    port: process.env.SMTP_PORT,                         // SMTP port
    secure: false,                     // Use TLS
    auth: {
       user: process.env.USER,            // SMTP username
      pass: process.env.PASSWORD            // SMTP password or API key
    }
  });
  
  const html = contactFormAdvertisingTemplate(name, email, phone, subject, message)
  // Create email data
  const mailOptions = {
    from: email, // Sender email address
    to:   process.env.ADVERTISING_TO , // Recipient email address
    subject: 'Contact Form submission', // Email subject
    // text: 'This is a test email sent from Node.js using SendinBlue SMTP.'
    html: html
  };
  
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(400).json({
        status: false,
        message: 'An error occurred. Please try again later.',
        data: {},
    });
      // res.status(400).json({message:'An error occurred. Please try again later.'})
    } else {
      return res.status(200).json({
        status: true,
        message: "You're all set! We'll get back to you shortly.",
        data: {},
    });
  // res.status(200).json({message:'You\'re all set! We\'ll get back to you shortly.'})
    }
  });
  
       }else{
        // res.status(400).json({message:'An error occurred. Please try again later.'})
        return res.status(400).json({
          status: false,
          message: 'An error occurred. Please try again later.',
          data: {},
      });
       }

      
    }catch(error){
      console.log(error);
      next(error)
    }
  }



  module.exports = {
    contact,
    contactForm
  }