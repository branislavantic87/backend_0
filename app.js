const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyP = require('body-parser');
const methodOverride = require('method-override');

//Requring routes
const movieRoutes = require ('./routes/movies');

mongoose.connect('mongodb://localhost/moviesApp');

app.use(bodyP.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get('/', (req, res) => {
    res.send("Zdravo node svete!");
});
app.use(movieRoutes);

app.get('*', (req, res) => {
    res.status(404);
    res.send("Page not found!");
})

app.listen(8000, () => {
    console.log("Server is running");
});  