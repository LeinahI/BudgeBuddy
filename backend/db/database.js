/* also db.js */
const mongoose = require('mongoose')

const db = async () => {
    try{
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Ya database connected!')
    } catch (error){
        console.log('sah database connection error!')
    }
}

module.exports = {db}