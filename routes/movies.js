const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');


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

module.exports = router;