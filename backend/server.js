const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('config');

const app = express();
app.use(cors());
app.use(express.json());

const URI = config.get('ATLAS_URI');
mongoose.connect(URI, {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connection to MongoDB established successfully..");
})

app.use('/users', require('./routes/user'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Your app is running on port: ${PORT}`);
})

