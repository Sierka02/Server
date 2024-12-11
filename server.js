import express from 'express'
import { pgPool } from './pg_connection.js';

const app = express()

app.listen(3001, () => {
    console.log('server is running...');
})

//get all movies
app.get('/movies', async (req,res) => {
    
    try {
        const result = await pgPool.query('SELECT * FROM movie')
        res.json(result.rows)
    } catch (error) {
       res.status(400).json ({error: error.message})
    }
})

// get movie by id
app.get('/movies/:id', async (req,res) => {
    const { id } = req.params

    try {
        const result = await pgPool.query('SELECT * FROM movie WHERE id = $1', [id])
        res.json(result.rows)
    } catch (error) {
        res.status(400).json ({error: error.message})
    }

})

// add new movies
app.post('/movies', async (req,res) => {
    
    const id = req.body.id
    const name = req.body.name
    const year = req.body.year
    const genre = req.body.genre
    
    try {
        await pgPool.query(
            'INSERT INTO movie VALUES ($1,$2,$3,$4)', [id, name, year, genre])
        res.end();
    } catch (error) {
       res.status(400).json({error: error.message})
    }


})
