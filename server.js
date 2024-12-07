import express from 'express'
import pg from 'pg'

const app = express()

const {Client} = pg

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

const client = new Client({
    user: '',
    password: '',
    database: '',
    host: '',
    port:''
})

connect()

async function connect() {
    try {
        await client.connect()
        console.log('Database connected...');
        

    } catch (error) {
        console.log(error.message);   
    }
}
