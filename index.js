const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const fs = require('fs');
const axios = require('axios');
const methodOverride = require('method-override');

const app = express();
app.set('view engine', 'ejs');

app.use(ejsLayouts);
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.send('WK-5 CHALLENGE');
});


app.get('/pokemon', (req, res) => {
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => {
        console.log(response.data);
        res.render('ditto', {  });
    });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`);
});