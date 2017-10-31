const mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    poster: {
        type: String,
        default: "http://via.placeholder.com/350x150",
    },
    genre: {
        type: String,
        enum: ["Comedy", "Romance", "SciFi"],
    },
    duration: Number,
    releaseDate: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model("Movie", movieSchema);
