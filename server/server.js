/*require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(express.json());

const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];
app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps, curl, etc.)
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

app.post('/send', async (req, res) => {
    const { name, subject, email, body } = req.body;

    try {
        await transporter.sendMail({
            from: email, // sender address
            to: process.env.EMAIL_USER, // your email address
            subject: subject, // Subject line
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${body}`, // plain text body
        });

        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to send email" }); 
    }
});

app.get('/', (req, res) => {
  res.send('Server is running'); 
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
*/