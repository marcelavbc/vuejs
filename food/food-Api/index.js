const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config();
const morgan = require('morgan');

const app = express();

// cors
const cors = require('cors');
app.use(cors())


// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Conexión a Base de datos
mongoose.connect(
    process.env.BD_CONNECT,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => console.log("connected to data base")
);

// import routes
const authRoutes = require('./routes/auth');
const favoritesRoutes = require("./routes/favorites");

app.use(morgan('dev'))

// route middlewares
app.use('/api/user', authRoutes);
app.use("/api/favorites", favoritesRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404;
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
})

// route middlewares
app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'works!'
    })
});

// iniciar server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Running in: ${PORT}`)
})