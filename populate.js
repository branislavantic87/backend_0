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

});