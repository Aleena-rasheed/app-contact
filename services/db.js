//connection code of node and mongodb
const mongoose = require('mongoose')

//connection string
mongoose.connect('mongodb://localhost:27017/Contactapp')

//model creation
const detail = mongoose.model('details',{
    
    id:String,
    email:String,
    username:String,
    firstname:String,
    lastname:String,
    phone:String,
    city:String

}) 
module.exports={
    detail
}