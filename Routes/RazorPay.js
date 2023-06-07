const express=require('express')
const Router=express.Router()
const paymentcontroller= require('../Controllers/Payment')

Router.post('/razorpay', paymentcontroller.completePayment );
Router.post('/transaction', paymentcontroller.saveTransaction );
  
module.exports=Router