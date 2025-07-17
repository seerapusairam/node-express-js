const auth = (req,res,next)=>{
    const { password } = req.query

    if(password !== 'Sai'){
        res.status(401).json({code:401,status:"Unauthozied"})
    }else{
        next();
    }
}

module.exports = auth