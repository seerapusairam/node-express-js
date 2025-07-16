const express = require('express')
const app = express()

// Route for home page
app.get('/', (req, res) => {
    res.send('Home Page')
})

// Route for about page
app.get('/about', (req, res) => {
    res.send('About Page')
})

// Catch-all route for undefined endpoints
app.all('*',(req, res) => {
    res.status(404).send('<h1>Resource not found</h1>')
})

// Start server on port 5000
app.listen(5000, () => {
    console.log("Server at 5000")
})
