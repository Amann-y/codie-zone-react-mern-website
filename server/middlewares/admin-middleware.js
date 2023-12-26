
const adminMiddleware = async(req,res,next)=>{
    try {
        const adminRole = req.user.isAdmin
        if(!adminRole){
            return res.status(403).json({message:"Access Denied, User Is Not An Admin"})
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = adminMiddleware