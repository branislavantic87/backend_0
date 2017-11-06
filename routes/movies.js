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
router.post('/movies', (req, res) => {
    var newMovie =  {
        title : req.body.title,
        poster : req.body.poster,
        genre : req.body.genre,
        duration : req.body.duration,
        releaseDate : Date.parse(req.body.releaseDate)
    }
    console.log(req.body);
    if(!newMovie.poster) delete newMovie.poster;
    Movie.create(newMovie, (err, createdMovie) => {
        if (err) {
            res.redirect('/movies')
        } else {
        res.json(newMovie);
        }
    });
});
//Show 
router.get('/movies/:id', (req, res) => {
    var id = req.params.id;
    Movie.findById(id, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});
//Edit
router.get('/movies/:id/edit', (req, res) => {
    var id = req.params.id;
    Movie.findById(id, (err, result) => {
        if (err) throw err;
        res.render('movies/edit', {result});
    });
});
//Update
router.put('/movies/:id', (req, res) => {
    var updateMovie =  {
        $set:{
        title : req.body.title,
        poster : req.body.poster,
        genre : req.body.genre,
        duration : req.body.duration,
        releaseDate : req.body.releaseDate
        }
    }
    Movie.findByIdAndUpdate(req.params.id, updateMovie, (err, result) => {
        if (err) throw err;
        res.redirect('/movies');
    })
});
//Delete
router.delete('/movies/:id', (req, res) => {
    var id = req.params.id;
    Movie.findByIdAndRemove(id, (err, deletedMovie) => {
        if (err) throw err;
        res.json(deletedMovie);

    })
})

module.exports = router;