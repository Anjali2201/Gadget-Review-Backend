// var express = require("express");
// var router = express.Router();
// const User = require('../models/User');



// router.post("/",function(req,res,next){
//   const content = req.body;
//   console.log(content);

//   const newuser= new User({
//     name: content.name,
//     college:content.college,
//     year: content.year,
//     branch: content.branch,
//     emailid: content.emailid,
//     phone: content.phone,
//     teamName: content.teamName,
//     teamMember1: content.teamMember1,
//     teamMember2: content.teamMember2,
//     teamMember3: content.teamMember3,
//     paymentStatus: content.paymentStatus
//   });

//   newuser.save()
//     .then((result)=>{
//     res.send(result)
//   })
//   .catch((err) =>{
//     console.log(err);
//   });
// });


// module.exports=router;