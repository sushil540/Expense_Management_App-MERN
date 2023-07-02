const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Category = require('../models/category')
const Expense = require('../models/expense')
require('dotenv').config()

const usersCtlr = {}

usersCtlr.register = async(req, res) =>{
    try{
        const body = req.body
        const userObj = new User(body)
        const salt = await bcryptjs.genSalt()
        const hashPass = await bcryptjs.hash(body.password, salt)
        userObj.password = hashPass
        const user = await userObj.save()
        res.json(user)
    }catch(e){
        res.json(e)
    }
}

usersCtlr.login = async(req, res) =>{
    try{
        const body = req.body 
        const userObj = await User.findOne({email:body.email})
        if(userObj){
            const result = await bcryptjs.compare(body.password, userObj.password)
            if(result){
                const tokenData = {
                    id:userObj._id
                }
                const token = jwt.sign(tokenData, process.env.JWT_SECRET)
                    res.json({
                        token:`Bearer ${token}`
                    })
            }else{
                res.json({
                    message:"Invalid email / password"
                })
            }
        }else{
            res.json({
                message:"Invalid email / password"
            })
        }
    }catch(e){
        res.json({
            message:"Invalid email / password"
        })
    }
}

usersCtlr.account = async (req, res) =>{
    try{
        const user = await User.findById(req.user.id)
        if(user){
            res.json(user)  
        }else{
            res.json({})
        }
    }catch(e){
        res.json(e)
    }
}

usersCtlr.update = async(req, res)=>{
    try{
        const id = req.user.id
        const body = req.body
        const user = await User.findByIdAndUpdate(id, body, {new:true, runValidators:true})
        if(user){
            res.json(user)
        }else{
            res.json({})
        }
    }catch(e){
        res.json(e)
    }
}

usersCtlr.destroy = async(req, res) =>{
    try{
        const id = req.user.id
        const user = await User.findByIdAndRemove(id)
        const category = await Category.deleteMany({userId:id})
        const expenses = await Expense.deleteMany({userId:id})
        res.json(user)
    }catch(e){
        res.json(e)
    }
}

usersCtlr.profile = async(req, res) =>{
    try {
        const user = await User.findOneAndUpdate({_id:req.user.id},{imageURL:req.file.path},{new:true, runValidators:true})
        res.json(user)
    }catch(err) {
        res.json(err)  
    }
}

usersCtlr.deleteAccount = async(req, res) =>{
    try{
        const body = req.body
        const id = req.user.id
        const userObj = await User.findById(id)
        const match = await bcryptjs.compare(body.password, userObj.password)
        if(match){
            const value = await Promise.all([await User.findByIdAndDelete(id), await Category.deleteMany({userId:id}), await Expense.deleteMany({userId:id})])
            res.json({
                message:"Your account has been successfully deleted"
            })
        }else{
            res.json({error:"Invalid password"})
        }
    }catch(e){
        res.json({
            errors:e
        })
    }
}

module.exports = usersCtlr