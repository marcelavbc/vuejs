const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config()

const app = express();

// cors
const cors = require('cors');
app.use(cors())


// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Conexión a Base de datos
mongoose.connect(
    process.env.DB_CONNECT,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    () => console.log("connected to db")
);

// import routes
const authRoutes = require('./routes/auth');
const favoritesRoutes = require("./routes/favorites");

// route middlewares
app.use('/api/user', authRoutes);
app.use("/api/favorites", favoritesRoutes);


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
    console.log(`servidor andando en: ${PORT}`)
})