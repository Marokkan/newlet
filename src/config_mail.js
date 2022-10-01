
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey("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")

const msg = {
  to: 'marrokkan6@gmail.com', // Change to your recipient
  from: 'youssef.founoun.01@gmail.com', // Change to your verified sender
  subject: 'WEBIGN',
  templateId:"d-fd738d3ae31340b399f7de2b1f2b5982",
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}



sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
  })





