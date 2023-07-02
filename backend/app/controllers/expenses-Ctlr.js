const Expense = require('../models/expense')
const User = require('../models/user') 

const expensesCtlr = {}

expensesCtlr.list = async(req, res) =>{
    try{
        const expenses = await Expense.find({userId:req.user.id})
        res.json(expenses)
    }catch(e){
        res.json(e)
    }
}

expensesCtlr.create = async(req, res) =>{
    try{
        // const { categoryId } = req.query
        const body = req.body
        const expenseObj = new Expense(body)
        expenseObj.userId = req.user.id
        // expenseObj.categoryId = categoryId
        const expense = await expenseObj.save()
        res.json(expense)
    }catch(e){
        res.json(e)
    }
}

expensesCtlr.read = async(req, res) =>{
    try{
        const id = req.params.id
        const expense = await Expense.findById(id)
        if(expense){
            res.json(expense)
        }else{
            res.json({})
        }
    }catch(e){
        res.json(e)
    }
}

expensesCtlr.update = async(req, res) =>{
    try{
        const id = req.params.id
        const body = req.body
        const expense = await Expense.findByIdAndUpdate(id, body, {new:true, runValidators:true})
        res.json(expense)
    }catch(e){
        res.josn(e)
    }
}

expensesCtlr.handleDestory = async(req, res)=>{
    try{
        const {id, type} = req.query
        let expense
        if(type === "delete"){
            expense = await Expense.findByIdAndUpdate(id, {isDeleted:true}, {new:true, runValidators:true})
        }else if(type === "undo"){
            expense = await Expense.findByIdAndUpdate(id, {isDeleted:false}, {new:true, runValidators:true})
        }
        res.json(expense)
    }catch(e){
        res.json(e)
    }
}

expensesCtlr.search = async(req, res)=>{
    try{
        const { searchString } = req.query
        const result = await Expense.find({note:{$regex:searchString, $options:"i"},userId:req.user.id}) 
        res.json(result)
    }catch(e){
        res.json(e)
    }
}

expensesCtlr.check = async(req, res)=>{
    try{
        const { expense } = req.query
        const result = await User.checkBudget({expense:expense, id:req.user.id})
        res.json(result)
    }catch(e){
        res.json(e)
    }
}

expensesCtlr.filter = async(req, res) =>{
    try{
        const { type } = req.query
        let expenses
        
        /**
         * if(type === "lessthen"){
            expenses = await Expense.find({userId:req.user.id,amount:{$lt:expense},isDeleted:false})
        }else if(type === "greaterthen"){
            expenses = await Expense.find({userId:req.user.id,amount:{$gt:expense},isDeleted:false})
        }else if(type === "greaterthenOrequals"){
            expenses = await Expense.find({userId:req.user.id,amount:{$gte:expense},isDeleted:false})
        }else if(type === "lesserthenOrequals"){
            expenses = await Expense.find({userId:req.user.id,amount:{$lte:expense},isDeleted:false})
        }else if(type === "equal"){
            expenses = await Expense.find({userId:req.user.id,amount:{$eq:expense},isDeleted:false})
        }else
         */
        if(type === "HigherToLower"){
            expenses = await Expense.find({userId:req.user.id,isDeleted:false}).sort({amount:"-1"})
        }else if(type === "LowerToHigher"){
            expenses = await Expense.find({userId:req.user.id,isDeleted:false}).sort({amount:"1"})
        }
        res.json(expenses)
    }catch(e){

    }
}


 
module.exports = expensesCtlr
