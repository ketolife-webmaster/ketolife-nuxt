/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
// /* eslint-disable no-var */
import express from 'express'

const sgMail = require('@sendgrid/mail')

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY
const SENDER_EMAIL = process.env.SENDGRID_SENDER_EMAIL
const SENDER_NAME = process.env.SENDGRID_SENDER_NAME

const app = express()
app.use(express.json())

app.post('/contact', (req, res) => {
  const {
    name,
    email,
    message,
  } = req.body

  const msg = {
    to: SENDER_EMAIL,
    from: {
      email: SENDER_EMAIL,
      name: SENDER_NAME
    },
    subject: `AG Children form ${name} [Underconstruction]`,
    text: `AG Children form ${name} [Underconstruction]`,
    html: `
      <table>
        <tr>
          <td><strong>Name:</strong></td>
          <td>${name}</td>
        </tr>
        <tr>
          <td><strong>Email:</strong></td>
          <td>${email}</td>
        </tr>
        <tr>
          <td><strong>Message:</strong></td>
          <td>${message}</td>
        </tr>
      </table>
    `
  }

  try {
    sgMail.setApiKey(SENDGRID_API_KEY)
    sgMail
      .send(msg)
      .then((response) => { res.send(response[0]) })
      .catch((error) => { res.send(error) })
  } catch (error) {
    res.status(error.status).send(error)
  }
})

module.exports = app
