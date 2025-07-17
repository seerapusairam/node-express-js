// ✅ Task: Secure Employee Info API with Middleware
// 🧩 Problem Statement:
// You're building an internal API endpoint /employee that returns employee details. The API has the following requirements:

// Clients must pass a password (pass=Sai) as a query param to access the data.

// Clients can pass only eid (employee ID), and your server should look up the employee name.

// All requests should be logged using a custom logger and morgan('tiny').

// 🚧 Requirements:
// 1. Create a fake database
// const employeeDB = {
//   5439: "John Doe",
//   1234: "Alice Smith",
//   6789: "Bob Johnson"
// };
// 2. Create 3 middleware functions
// auth: Checks if req.query.pass === 'Sai'. If not, respond with 401 Unauthorized.

// enrichEmployee: Gets eid from req.query, looks up name from employeeDB, and attaches { eid, name } to req.employee. Respond with 404 if not found.

// logger: Custom logger that logs method, url, and time.

// 3. Use morgan('tiny') alongside your custom logger.

// GET /employee?eid=5439&pass=Sai
// Should return:

// {
//   "message": "Employee data",
//   "data": {
//     "eid": "5439",
//     "name": "John Doe"
//   }
// }
  
// If pass is missing or wrong → 401 Unauthorized
// If eid is not found → 404 Employee not found

const express = require('express')
const app = express()

const auth = require('./auth')
const enrichEmployee =  require('./enrichEmployee')

app.use([auth, enrichEmployee])

app.get('/employee', (req,res)=>{
    res.json({
        message:"Employee Data",
        data: req.employee
    })
})

app.listen(5050, ()=>{
    console.log("Starting at 5000..")
})