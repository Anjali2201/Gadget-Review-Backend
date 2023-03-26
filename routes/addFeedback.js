// var express = require("express");
// var router = express.Router();
// const feedback = require('../models/feedback');

// router.post("/",function(req,res,next){
//   const content = req.body;
//   console.log(content);

//   const newfeedback= new feedback({
//     firstName: content.firstName,
//     lastName: content.lastName,
//     phone: content.phone,
//     emailid: content.emailid,
//     rating: content.rating,
//     organized: content.organized,
//     improvements: content.improvements,
//     likeAboutEvent: content.likeAboutEvent
//   });
// //   console.log(newfeedback);
//   newfeedback.save()
//     .then((result)=>{
//     res.send(result)
//   })
//   .catch((err) =>{
//     console.log(err);
//   });
// });


// module.exports=router;