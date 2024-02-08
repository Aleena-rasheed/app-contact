//backend logics


//import db.js
const db = require('../services/db')

//get all the employees details from the database
const getAllDetails=()=>{
    return db.detail.find().then((result)=>{//details of employee
        
        if(result){

            return{//send to front end
                    statusCode:200,
                    detail:result
            }

        }
        else{
            return{
                statusCode:404,
                message:'cant find details'
            }
        }
    })
}


const addDetails=(id,username,phone,email,city)=>{
    return db.detail.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:404,
                message:"details already exists"
            }
        }
        else{
            //the id is not in the database it will add to the database
            const newDetails = new db.detail({id,username,phone,email,city})

            newDetails.save()
            return{
                statusCode:200,
                message:'employee added successfully'
            }
        }

    })
}

const deleteDetails=(id)=>{
    return db.detail.deleteOne({id}).then((result)=>{
        return{
            statusCode:200,
            message:"contact deleted succeessfully" 
        }
    })
    .catch((error)=>{
        return{
              statusCode:403,
              message:"couldnt find contact"
        }
    })
}

//get a particular contact
const getDetails=(id)=>{
    return db.detail.findOne({id}).then((result)=>{//details of employee
        
        if(result){

            return{//send to front end
                    statusCode:200,
                    detail:result
            }

        }
        else{
            return{
                statusCode:404,
                message:'cant find details'
            }
        }
    })
}

const  getDeatails=(id)=>{
    return db.detail.findOne({id}).then((result)=>{//details of employee
        
        if(result){

            return{//send to front end
                    statusCode:200,
                    detail:result
            }

        }
        else{
            return{
                statusCode:404,
                message:'cant find details'
            }
        }
    })
}
//update contact details
const updateAnDetail=(id,username,phone,email,city)=>{
    return db.detail.findOne({id}).then((result)=>{
        if(result){
            result.id=id;
            result.username=username;
            result.phone=phone;
            result.email=email;
            result.city=city


            result.save()

            return{
                statusCode:200,
                message:"contact updated successfuly"
            }
        }
        else{
            return{
                statusCode:404,
                message:"cant find employee"
            }
        }
    })
}

module.exports={
getAllDetails,
addDetails,
deleteDetails,
getDeatails,
updateAnDetail

}