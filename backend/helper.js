const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
//   port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: `${process.env.EMAIL}`,
    //go to myaccount.google/apppasswords and create a appname then a password will be generated. Copy that and paste here without spaces.
    pass: `${process.env.PASS}`,
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main(to,subject,html) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: `"MuscleMeter 💪" <${process.env.EMAIL}>`, // sender address
    to,
    subject,
    html
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

module.exports = {main}
