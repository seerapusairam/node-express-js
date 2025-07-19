const { people } = require('../../data')

const getPeople = (req,res)=>{
    res.status(200).json({
        status:true,
        data:people
    })
}

const postPeople = (req,res)=>{
    const {name} = req.body

    if(!name){
        res.status(400).json({
            status:false,
            msg:"Please provide the value" // in js we are giving a alert so it will display
        })
    }else{
        res.status(201).send({
            status:true,
            person:name // sending the value to the java script - in that we are routerending the value temporally so if we reload we will get the pre values
        })
    }
}

const postPostman = (req,res)=>{
    const {name} = req.body

    if(!name){
        res.status(400).json({
            status:false,
            msg:"Please provide the value"
        })
    }else{
        res.status(201).send({
            status:true,
            data:[...people],name
        })
    }
}

const putPeople = (req,res)=>{
    const {id} = req.params
    const {name} = req.body

    const person = people.find((p)=> p.id === Number(id))

    if(!person){
        res.status(404).json({
            code:404,
            message:`person id: ${id} not found`
        })
    }
    
    if(name){
        person.name = name;
        res.json({
            data:people
        })
    }else{
        res.status(400).json({
            code:400,
            message:"Please provide the name"
        })
    }
}

const deletePeople = (req,res)=>{
    const {id} = req.params
    const person = people.find((p)=> p.id === Number(id))

    if(!person){
        res.status(404).json({
            code:404,
            message:`person id: ${id} not found`
        })
    }else{
        const delPeople = people.filter((person) => person.id !== Number(id))
        res.json({
            data:delPeople
        })

    }
}

module.exports =  {
    getPeople,
    postPeople,
    postPostman,
    putPeople,
    deletePeople
}