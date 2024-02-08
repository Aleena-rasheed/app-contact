//import express
const express = require('express')

//import cors
const cors = require('cors')

//import logic
const logic= require('./services/logics')

//create a backend application using express
const contactServer = express()

//connecting the front end application
contactServer.use(cors({
    origin:'http://localhost:3000'
}))

//convert the json data to js and js to json using json function
contactServer.use(express.json())

//define the port number

contactServer.listen(7000,()=>{
    console.log("details server listening on port 7000");
})

//API call for get all contacts details
contactServer.get('/get-all-details',(req,res)=>{
    logic.getAllDetails().then((response)=>{
    res.status(response.statusCode).json(response);
    })
})

//API call for add details
contactServer.post('/add-a-details',(req,res)=>{
    logic.addDetails(req.body.id,req.body.username,req.body.phone,req.body.email,req.body.city).then((response)=>{
        res.status(response.statusCode).json(response);
    })
})

//API call for delete contact
contactServer.delete('/delete-a-contact/:id',(req,res)=>{
    logic.deleteDetails(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response);
    })
})

//get particular
contactServer.get('/get-an-details/:id',(req,res)=>{
    logic.getDeatails(req.params.id).then((response)=>{
    res.status(response.statusCode).json(response);
    })
})

//update

contactServer.post('/update-an-details/:id',(req,res)=>{
    logic.updateAnDetail(req.params.id,req.body.username,req.body.phone,req.body.email,req.body.city).then((response)=>{
    res.status(response.statusCode).json(response);
    })
})

