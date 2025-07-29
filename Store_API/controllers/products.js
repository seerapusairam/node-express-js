const product = require('../models/product')
const model = require('../models/product')

const getAllProducts = async (req,res)=>{
    let {featured, company, name, sort, field, numFilter} = req.query
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
    if(numFilter){
        console.log(numFilter)
        const operator = {
            '>':'$gt',
            '>=':'$gte',
            '<':'$lt',
            '<=':'$lte',
            '==':'$eq'
        }
        const regex = /\b(<|<=|>|>=|==)\b/g // we created the operation list

        let filter = numFilter.replace(regex,(match)=> `-${operator[match]}-`) // now we are replacing the operator to mongo operator
        // price-$gt-30,rating-$lt-4

        const options = ['price','rating']// made a list to check the field

        filter = filter.split(',').forEach((element)=>{ // price-$gt-30 rating-$lt-4
            const [tag,op,num] = element.split('-') // tag = price, op = $gt, num=30
            if(options.includes(tag)){    // checking if the field is price or rating
                queObj[tag] = {[op]:Number(num)} // {price:{$gt:30},rating:{$lt:4}}
            }
        })
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
    //Skip and limit
    const limit = Number(req.query.limit) || 10
    const page = Number(req.query.page) || 1
    const skip = (page -1)*10

    result = result.skip(skip).limit(limit)
     // Execute query
    const task = await result
    res.json({task,hits:task.length})
}

const getAllStatic = async (req,res)=>{
    const allProducts = await model.find({price:{$lt:40}})
    // .sort('name')
    // .select('name price')
    // .limit(5)
    // .skip(2) //chaining
    res.json({allProducts,hits:allProducts.length})
}

module.exports = {
    getAllProducts,
    getAllStatic
}