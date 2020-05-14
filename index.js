const express = require('express')
const customerController = require('./customerController')

let app = express();
app.use(express.json());
app.use('/customers', customerController)

app.listen(3005);