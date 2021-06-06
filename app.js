const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors")

const jwt = require("jsonwebtoken")
const SECRET = "ABCD435678"

const reservationsRouter = require('./api/reservations');
const protectedRouter = require('./api/protectedroutes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
const bcrypt = require("bcrypt")

app.use('/api', reservationsRouter);
app.use('/api/reservations', protectedRouter);



module.exports = app;