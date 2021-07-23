const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');
require('../models/course');
const Course = mongoose.model('Course');


const courses = [
    {id:1,course:'course1'},
    {id:2,course:'course2'},
    {id:3,course:'course3'}
]



router.get('/',(req,res)=>{  // localhost:3000/api/courses in browser.

    res.send(courses)
})

//getting a single record based on parameter
router.get('/:name',(req,res)=>{
   
    // const course = courses.find(c=>c.id===parseInt(req.params.id));
    // if(course)
    // {
    //     res.status(200).send(course)
    // }
    // else
    // {
    //    return res.status(404).send(`The coures With id ${req.params.id} is not found!`)
    // }

//when user sedns id in request
    // let id = parseInt(req.params.id)
    // console.log('hello')
    // Course.find().then(result=>{
    //     if(result[id])
    //         res.send(result[id])
    //     else
    //         res.status(404).send(`The coures With id ${req.params.id} is not found!`)}).catch(error=>console.log(error))
//when user sends book name in request
Course.find({name: new RegExp(req.params.name,'i')}) //object inside find() method is a filter which means if the given name exists in Course collection.
.then(result=>{ 
    if(result.length)
        res.send(result)
    else
        res.status(404).send(`The coures With name ${req.params.name} is not found!`)}).catch(error=>console.log(error))

})

//http post request 
router.post('/',(req,res)=>{
    // const course = {
    //     id:courses.length+1,
    //     course:req.body.name+(courses.length+1) //for this line to work we have to use middleware function(parsing of json object in body of request) which is router.use(express.json()) // to convert body of the request into json format
    //                             //by default express does not provide this parsing
    //                             //it populares req.body if there is a json object
    // }
    // courses.push(course);
    // res.send(course)
    const course = new Course({
        name:req.body.name,
        author:req.body.author,
        isPublished:req.body.isPub,
    })
    course.save().then(result=>res.json({message:"Saved succesfully!"})).catch(result=>console.log(result));
    //res.send(course);
})

//updating record using PUT method

router.put('/:id',(req,res)=>{
    // const course = courses.find(c=>c.id === parseInt(req.params.id));
    // if(!course)
    // {
    //    return res.status(404).send('The given id does not exist!')
    // }
    // else
    // {
    //     //updating if id exist
    //     course.course = req.body.name
    //     res.send(course)
    // }
//Approach 1: Update first
    Course.updateOne({_id:req.params.id},{
        $set:{
            author:req.body.author
        }
    }).then(result=>res.json({message:"Updated!"})).catch(err=>res.json({message:"id not found"}))


})

//deleting record using DELETE() method
router.delete('/:id',(req,res)=>{
    // const course = courses.find(c=>c.id=== parseInt(req.params.id));
    // if(!course)
    //     return res.status(400).send('Given ID does not exist');
    // else
    //     {
    //         const index = courses.indexOf(course);
    //         courses.splice(index,1)
    //         res.send(course)
    //     }
    Course.deleteOne({_id:req.params.id}).then(result=>res.json({message:result})).catch(err=>res.json({Erro:"not found!"}))
})

module.exports = router;