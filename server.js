import express from 'express'
import { pgPool } from './pg_connection.js';


const app = express()
app.use(express.urlencoded({extended:true}))

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
    
    const name = req.body.name
    const release_year = req.body.release_year
    const genre = req.body.genre
    
    try {
        await pgPool.query(
            'INSERT INTO movie (name, release_year, genre) VALUES ($1,$2,$3)', [name, release_year, genre])
        res.end();
    } catch (error) {
       res.status(400).json({error: error.message})
    }
})



// add new user
app.post('/user', async (req,res) => {

    const name = req.body.name
    const username = req.body.username
    const password = req.body.password
    const birth_year = req.body.birth_year
    
    try {
        await pgPool.query(
            'INSERT INTO user_profile (name, username, password, birth_year) VALUES ($1,$2,$3,$4)', [name, username, password, birth_year])
        res.end();
    } catch (error) {
       res.status(400).json({error: error.message})
    }

})

// add new genre
app.post('/genre', async (req,res) => {

const name = req.body.name

try {
    await pgPool.query(
        'INSERT INTO genre (name) VALUES ($1)', [name])
    res.end()
} catch (error) {
    res.status(400).json({error: error.message})
}


})


//add a review
app.post('/review', async (req,res) => {

    const movie_id = req.body.movie_id
    const user_id = req.body.user_id
    const rev = req.body.rev
    
    try {
        await pgPool.query(
            'INSERT INTO review (movie_id, user_id, rev) VALUES ($1,$2,$3)', [movie_id, user_id, rev])
        res.end();
    } catch (error) {
       res.status(400).json({error: error.message})
    }

})


//remove movies by id
app.post('/removeMovie/:id', async (req,res) => {

    const { id } = req.params
    
    try {
        const result = await pgPool.query('DELETE FROM movie WHERE id = $1', [id])
        res.json(result.rows)
    } catch (error) {
        res.status(400).json ({error: error.message})
    }

})

