const nodemailer = require('nodemailer');

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
    host: "smtp-relay.brevo.com", // Replace with SendinBlue SMTP host
    // host: process.env.HOST, // Replace with SendinBlue SMTP host
    port: 587,                         // SMTP port
    secure: false,                     // Use TLS
    auth: {
      user: "61e07d001@smtp-brevo.com",            // SMTP username
      pass: "185wGm0rfDNzOxCh"             // SMTP password or API key
    }
  });
  
  // Create email data
  const mailOptions = {
    from: "sapabdu@gmail.com", // Sender email address
    to:   "saepabdu@gmail.com", // Recipient email address
    subject: 'Contact Form submission', // Email subject
    // text: 'This is a test email sent from Node.js using SendinBlue SMTP.'
    html:`<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:800px" class="responsive-table">
    <tbody>
        <tr>
            <td>
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td align="center" style="font-size:24px;color:#0e0e0f;font-weight:700;font-family:Helvetica Neue;line-height:28px;vertical-align:top;text-align:center;padding:35px 40px 0px 40px">
                            <strong>AutoHoms</strong>
                        </td>
                    </tr>
                    <tr>
                        <td class="content" style="font:16px/22px 'Helvetica Neue',Arial,'sans-serif';text-align:left;color:#555555;padding:40px 40px 0 40px">
                            <p style="font-size:16px">
                                Name : ${name}
                            </p>
                            <p style="font-size:16px">
                              Email : ${email}
                            </p>
                            <p style="font-size:16px">
                              Message : ${message}
                            </p>
                        </td>
                    </tr>
            
                </table>
            </td>
        </tr>
        <tr>
            <td width="100%" align="center" valign="top" bgcolor="#ffffff" height="45"></td>
        </tr>
    </tbody>
  </table>`
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