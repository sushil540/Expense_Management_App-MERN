const jwt = require('jsonwebtoken')

const authenticateUser = (req, res, next)=>{
    const token = req.headers['authorization'].split(' ')[1]
    try{
        const user = jwt.verify(token, process.env.JWT_SECRET)
        if(user){
            req.user = {
                id:user.id
            }
            next()
        }else{
            res.status(401).json("Invaid token")
        }
    }catch(e){
        res.json(e)
    }
}

module.exports = authenticateUser