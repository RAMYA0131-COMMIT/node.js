const mongoose = require("mongoose")
const connection =()=>{
    
    try{
    mongoose.connect(process.env.MONGO_URL)
    console.log("MongoDb Connected");
    }catch(error) {
        console.log(`Connection error: ${error.message}`);
    };
}

    module.exports = connection;