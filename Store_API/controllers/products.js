const product = require('../models/product')
const model = require('../models/product')

const getAllProducts = async (req,res)=>{
    let {featured, company, name, sort, field} = req.query
    const queObj = {}
    // Filter by featured
    if(featured){
        queObj.featured = featured === 'true' ? true : false
    }
    // Filter by company
    if(company){
        queObj.company = company
    }
    // Filter by name (regex for partial match)
    if(name){
        queObj.name = {$regex:name,$options:'i'} // options - i is for  case-insensitive
    }
    
    // Build query
    let result = model.find(queObj)
    // Sorting
    if(sort){
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    }
    //Selecting
    if(field){
        const fieldList = field.split(',').join(' ')
        result = result.select(fieldList)
    }
     // Execute query
    const task = await result
    res.json({task,hits:task.length})
}

const getAllStatic = async (req,res)=>{
    const allProducts = await model.find().select('name price')
    res.json({allProducts,hits:allProducts.length})
}

module.exports = {
    getAllProducts,
    getAllStatic
}