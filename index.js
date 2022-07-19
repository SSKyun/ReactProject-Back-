const express = require('express');
const fs = require('fs');
const cores = require('cors');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());


const PORT = 4000;
app.listen(PORT, () => {
    console.log("Server Test 4000");
});

app.use('/api/test',require('./routes/testRouter'));

