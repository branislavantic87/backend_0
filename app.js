const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// REQUIERING ROUTES
const movieRoutes = require('./routes/movies');

mongoose.connect('mongodb://localhost/movies_app');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {
    res.send('Stuff');
});

app.use(movieRoutes);

app.get('*', (req, res) => {
    res.status(404);
    res.send('Page not found');
})

app.listen(8080, () => {
    console.log('Server is running');
});

