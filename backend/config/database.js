const mongoose = require('mongoose')
module.exports = configDB = async(req, res)=>{
    try{
        const DB = await mongoose.connect('mongodb://127.0.0.1:27017/expense-management-app')
        console.log("Connected to db")
        
    }catch(e){
        console.log("Error connecting to db")
    }
}
