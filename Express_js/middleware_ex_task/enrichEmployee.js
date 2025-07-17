const employeeDB = {
  5439: "John Doe",
  1234: "Alice Smith",
  6789: "Bob Johnson"
};

const enrichEmployee = (req,res,next)=>{
    const {eid} = req.query
    const name = employeeDB[eid]

    if(name){
        req.employee = {eid, name}
        next();
    }else{
         res.status(404).json({code:404,status:"Not Found"})
    }
}

module.exports = enrichEmployee