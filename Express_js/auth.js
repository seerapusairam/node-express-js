const auth = (req,res,next) =>{
    const {pass} = req.query
    if(pass === 'Sai'){
        req.pass = { name: 'sai', id: 4 }; // <-- adding custom data to the request
        next();  // Go to the next middleware or route handler
    }else{
        res.status(401).json({code:401,status:"Unauthozied"})
    }
}

module.exports = auth;