<<<<<<< HEAD
const Movie = require('./models/movie');
const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/moviesApp');

var jedan = {
    title: "Transformers",
    genre: "SciFi",
    duration: 90
}

Movie.create(jedan, (err, created) => {
    if (err) throw err;
=======
// populatejs
const express = require('express');
const Movie = require('./models/movie');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/movies_app');

var prvi = {
    title: 'Super film',
    genre: 'Action',
    duration: 90,
};

Movie.create(prvi, (err, createdPrvi) => {
    if (err) throw err;

>>>>>>> 008d492ef032e3c3b5382d082108cfd5c0dff8ba
});