import express from 'express'

var app = express()

app.listen(3001, () => {
    console.log('server is running...');
})