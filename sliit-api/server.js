const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const subjectAPI = require('./src/api/subjectAPI');
const courseAPI = require('./src/api/courseAPI');

dotenv.config(); //configure dotenv
const app = express(); //instance of express dependency
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8081;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useCreateIndex : true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
    
}, (error) => {
    if(error){
        console.log('Database Error:', error.message);
    }
});

mongoose.connection.once('open', () => {
    console.log('Database Synced');
});

app.route('/').get((req,res) => {
    res.send('SLIIT AF-2018 FINAL PAPER API BY IT18204780 OF 2021 BATCH');
});

app.use('/subject', subjectAPI()); //calling functions to return endpoints
app.use('/course', courseAPI());

app.listen(PORT, () => {
        console.log('Server is up and running on PORT ${PORT}');
} )