const postlogin = (req,res)=>{
    const {name} = req.body

    if(name){
        res.send(`Welcome ${name}`)
    }else{
        res.status(400).json({code:29,message:"Missing Form value"})
    }
}

module.exports = {
    postlogin
}