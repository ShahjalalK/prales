const app = require('./app')
require('dotenv').config()
const PORT = process.env.PORT || 4000
const mongoDbUrl = process.env.dbURL
const mongoose = require('mongoose')

const mongoDbConnected = async () => {
    try{
        await mongoose.connect(mongoDbUrl);
        console.log('Mongodb is Connected')

    }
    catch(error){
        console.log(error)
        console.log('Mongodb is not Connected')
        process.exit(1)
    }
}


app.listen(PORT, async () => {
    console.log(`server is runnign localhost:${PORT}`)
    await mongoDbConnected()
})