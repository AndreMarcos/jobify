const mongoose = require('mongoose')
//require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})

const db = mongoose.connection

db.once('open', () => {
    console.log('Mongoose default connection is open')
})

db.on('error', err => {
    console.log(`Mongoose default connection has ocurred \n${err}`)
})

process.on('SIGINT', () => {
    db.close(() => {
        console.log(
            'Mongoose default connection is disconnected due to application termination'
        );
        process.exit(0);
    })
})

module.exports = mongoose