const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');

// Initialize
const app = express()

// Form Data Middleware
app.use(bodyParser.urlencoded({ extended: false }));
// Json Body Middleware
app.use(bodyParser.json());
// Cors middlaware
app.use(cors());
// Settin up the static directory
app.use(express.static(path.join(__dirname, 'public')))

// Use the passport middleware
app.use(passport.initialize());
require('./config/passport')(passport)

// Bring in the Database configurable
const db = require('./config/keys').mongoURL;

mongoose.connect(db, { 
  useNewUrlParser: true 
}).then(() => {
  console.log(`Database connect ${db}`)
}).catch(err => console.log('error' + err))

//Bring the Users Router
const users = require('./routes/api/users');
app.use('/api/users', users);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})