const express = require('express');
const restaurantRouter = require('./routes/page1');
const hbs = require('express-handlebars');
const paht = require('path');
const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use('/', restaurantRouter);

app.listen(
    PORT,
    () => {
        console.log(`Listening to port ${PORT}`);
    }
);


app.engine('hbs', hbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');

app.use(express.static(paht.join(__dirname, 'public')));