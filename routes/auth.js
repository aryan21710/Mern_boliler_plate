const express=require('express')
const router=express.Router()
const signIn=require('../controllers/auth')

router.get('/',signIn)

module.exports=router;