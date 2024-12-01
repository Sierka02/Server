import express from 'express'

var app = express()

app.listen(3001, () => {
    console.log('server is running...');
})

app.get('/API', (req,res) => {

})

app.get('/user', (req,res) => {
    
})

app.get('/genre', (req,res) => {
    
})

app.get('/movie', (req,res) => {
    
})

app.get('/review', (req,res) => {
    
})
