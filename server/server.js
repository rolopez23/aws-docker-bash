require('dotenv').config()
const express = require('express');
const path = require('path');

const proxyAtelier = require('./proxyAtelier.js')

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname,'../public')));

app.use('/atelier', proxyAtelier);


app.listen(PORT, ()=>{
  console.log('app is running on: ', PORT)
})