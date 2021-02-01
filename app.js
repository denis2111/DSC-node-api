const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config()

const jwt = require('jsonwebtoken');
const server = express()

server.use(bodyParser.json())
server.use(cors())

server.get('/users', (req, res) => {
    req.json({
        success: true
    })
})

server.listen(process.env.PORT, console.log(`server started`));

// joi
// mongoose
// bcrypt
// http-status-codes
// busboy