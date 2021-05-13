const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000

const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')))

// http logger
// app.use(morgan('combined'))

app.use(express.urlencoded({
    extended: true
}));
// app.use(express.json());
// template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

// Routes init // get from routes/index.js
route(app);

app.listen(port, () => console.log(`this is port : ${port}`))