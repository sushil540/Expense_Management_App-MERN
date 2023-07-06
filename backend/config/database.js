const mongoose = require('mongoose')
module.exports = configDB = async(req, res)=>{
    try{
        const DB = await mongoose.connect(process.env.MONGODB_CONNECTION)
        console.log("Connected to db")
        
    }catch(e){
        console.log("Error connecting to db")
    }
}
