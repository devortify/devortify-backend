const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const router = express.Router();

// Middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// API route for subscribing the email
router.post('/subscribe', async (req, res) => {
  const { email,message } = req.body;

  try {
    // Call the third-party API to add the email to the contact list
    if (email.length() !== 0 && message.length() !== 0 )
    //  const response = await axios.post('https://api.example.com/subscribe', {
    //   email,message
    // });

    // // Optional: Handle the response from the third-party API
    // console.log(response.data);

    // Send a success response back to the client
    res.json({ message: 'Email subscribed successfully' });
  } catch (error) {
    console.error(error);

    // Send an error response back to the client
    res.status(500).json({ error: 'Failed to subscribe email' });
  }
});

module.exports = router;
