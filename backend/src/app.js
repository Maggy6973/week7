const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Middleware
const allowedOrigins = [
    'http://localhost:5173',
    'https://week7frontend.vercel.app/'
];

app.use(cors({
    origin: function(origin, callback) {
        if (!origin) return callback(null, false); // block requests with no origin
        if (allowedOrigins.includes(origin)) {
            return callback(null, origin); // return the origin string, not true
        }
        return callback(new Error('Not allowed by CORS'));
    },
    credentials: true
}));
app.use(bodyParser.json());

// Database connection
const db = require('./config/db');
db();

// Routes
app.use('/api/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 5550;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});