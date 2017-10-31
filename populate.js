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
});