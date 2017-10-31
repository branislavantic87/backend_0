// ROUTES/MOVIES.JS
const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

// INDEX
router.get('/movies', (req, res) => {
    Movie.find({}, (err, allMovies) => {
        if (err) throw err;
        res.json(allMovies);
    });
});
// NEW 
router.get('/movies/new', (req, res) => {
    res.render('movies/new');
});
// CREATE

// SHOW 

// EDIT 

// UPDATE

// DESTROY

module.exports = router;