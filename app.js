const errorHandler = require('./util/errorHandler');
const userRouter = require('./routes/userRoutes');
const toyRouter = require('./routes/toyRoutes');
const express = require('express');
const app = express();

app.use(express.json());
app.use('/toys', toyRouter);
app.use('/user', userRouter);

app.use(errorHandler);
module.exports = app;