const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json())

mongoose.connect(process.env.MONGO_URL,{
    
}).then(() => console.log('Mongo DB Connect'))

.catch(err => console.log(err));

const authRoute = require('./routes/auth');
app.use('/api/auth',authRoute);

const informationRoute = require('./routes/information');
app.use('/api/',informationRoute);



const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT} `));