const Category = require('../models/category')

const categoryCtlr = {}

categoryCtlr.create = async(req, res) =>{
    try{
        const body = req.body
        const categoryObj = new Category(body)
        categoryObj.userId = req.user.id
        const category = await categoryObj.save()
        res.json(category)
    }catch(e){
        res.json(e)
    }
}

categoryCtlr.list = async(req, res)=>{
    try{
        const categories = await Category.find({userId:req.user.id})
        res.json(categories)
    }catch(e){
        res.json(e)
    }
}

module.exports = categoryCtlr