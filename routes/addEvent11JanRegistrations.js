// var express = require("express");
// var router = express.Router();
// const event1 = require('../models/event1');

// router.post("/",async function(req,res,next){
//     const content = req.body;
//     console.log(content);
  
//     try{
//       const newregistration= new event1({
//         name: content.name,
//         branch: content.branch,
//         year:content.year,
//         semester:content.semester,
//         phone: content.phone,
//         emailid: content.emailid,
//       });
//       await newregistration.save()
//       res.send({"message":"Successfully Registered"})
//     }
//     catch(err){
//       res.status(400).send({"message":"Email or phone number already registered"})
//     }
//     //   .then((result)=>{
//     //   res.send(result)
//     // })
//     // .catch((err) =>{
//     //   console.log(err);
//     //   res.status(400).send(err);
//     // });
//   });
  
// module.exports=router;