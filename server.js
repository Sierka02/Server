import express from 'express'
import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

const {Client} = pg

app.listen(3001, () => {
    console.log('server is running...');
})

//get all movies
app.get('/', (req,res) => {

})

// add new movie
app.get('/', (req,res) => {

})

// get movie by id
app.get('/', (req,res) => {

})


const client = new Client()

connect()

async function connect() {
    try {
        await client.connect()
        console.log('Database connected...');
        

    } catch (error) {
        console.log(error.message);   
    }
}
