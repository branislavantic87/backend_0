<<<<<<< HEAD
=======
// ROUTES/MOVIES.JS
>>>>>>> 008d492ef032e3c3b5382d082108cfd5c0dff8ba
const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

<<<<<<< HEAD

//index ruta
router.get('/movies',(req, res) => {
    Movie.find({}, (err, allMovies) => {
        if (err) throw err;
        res.json(allMovies);
    })
});
//new
router.get('/movies/new', (req, res) => {
    res.render('movies/new');
});
//Create

//Show 

//Edit

//Update

//Delete
=======
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
>>>>>>> 008d492ef032e3c3b5382d082108cfd5c0dff8ba

module.exports = router;