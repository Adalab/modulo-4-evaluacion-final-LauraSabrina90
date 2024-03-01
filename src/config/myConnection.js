const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = () => {
    const user = process.env.DB_USER;
    const password = process.env.DB_PASSWORD;
    const dbName = process.env.DB_NAME;

    const uri = `mongodb+srv://${user}:${password}@modulo-4.zqnxcir.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Modulo-4`;


    mongoose
    .connect(uri)
    .then(() => console.log('I am connected to MongoDB'))
    .catch((e) => console.log('ERROR!! NO CONNECTION!!', e));
};
module.exports = connectDb;
