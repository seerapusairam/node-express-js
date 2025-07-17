const log = (req,res,next) =>{
    const method = req.method
    const url = req.url
    const time = new Date().getDate()
    console.log(method, url, time)
    //res.send("Done") - either you need to send data from here or
    next() // tell the express to go to next middle ware or app. funtion
}

module.exports = log;