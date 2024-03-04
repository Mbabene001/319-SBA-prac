import express from 'express';
const router = express.Router();
import Movie from '../models/moviemodel.mjs'; 

// get all 
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find(); 
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get movie by ID
router.get('/:id', getMovie, (req, res) => {
    res.send(res.movie.name);
});

// Create a movie
router.post('/post', async (req, res) => {
    try {
        const newMovie = await Movie.create({
            name: req.body.name,
            createdNewMovie: req.body.createdNewMovie
        });
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


// Update movie by ID
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID movie');
});

// Delete movie by ID
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID movie');
});

async function getMovie (req, res, next) {
     let Movie
     try {
         Movie = await Movie.findById (req.params.id)
         if (Movie == null ) {
             return res.status(404).json({message: ' Movie not Found'})
         }
        
     } catch (error) {
        return res.status(500).json({message: error.message})
        
     }

     res.movie = Movie
        next()

 }

export default router;
