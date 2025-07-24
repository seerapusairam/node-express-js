
const getAllProducts = (req,res)=>{
    throw new Error("testing")
    res.send("send all products")
}

const getAllStatic = (req,res)=>{
    res.send("get static")
}

module.exports = {
    getAllProducts,
    getAllStatic
}