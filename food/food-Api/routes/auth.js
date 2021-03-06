const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// constraseña
const bcrypt = require('bcrypt');

// validation
const Joi = require('@hapi/joi');

const schemaRegister = Joi.object({
    username: Joi.string().min(2).max(14).required().alphanum(),
    email: Joi.string().email({ tlds: { allow: false } }),
    password: Joi.string().min(4).alphanum().required()
});


const schemaLogin = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }),
    password: Joi.string().min(4).alphanum().required()
});

router.post('/register', async (req, res) => {
    // validate user
    const { error } = schemaRegister.validate(req.body)

    if (error) {  
        return res.status(400).json({ error: error.details[0].message })
    }
    const isEmailExist = await User.findOne({ email: req.body.email });
    if (isEmailExist) {
        return res.status(400).json({ error: 'This email exists. Try with another one or connect to your account' })
    }

    // hash contraseña
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: password
    });

    // create token
    const token = jwt.sign(
        {
            username: user.username,
            id: user._id,
        },
        process.env.TOKEN_SECRET
    );

    try {
        const savedUser = await user.save();
        res.json({
            error: null,
            user: savedUser,
            token: token
        })
    } catch (error) {
        res.status(400).json({ error })
    }
})

router.post('/login', async (req, res) => {
    // validaciones
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message })

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ error: 'User not found' });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'wrong password' })

    // create token
    const token = jwt.sign(
        // payload data
        {
            username: user.username,
            id: user._id,
        },
        process.env.TOKEN_SECRET
    );

    res.header("auth-token", token).json({
        error: null,
        user: user, 
        token: token
    });
})

module.exports = router;

