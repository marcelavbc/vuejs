import User from '../models/User';
import jwt from "jsonwebtoken";
import config from "../config";

export const signUp = async (req, res) => {

    const { username, email, password } = req.body;

    const newUser = new User()
    newUser.email = email
    newUser.username = username
    newUser.password = await newUser.encryptPassword(password);
    console.log(newUser)

    const savedUser = await newUser.save();

    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
        expiresIn: 86400 //24 hours
    })
    res.status(200).json({ token: token, user: savedUser })
};

export const signIn = async (req, res) => {
    const userFound = await User.findOne({ email: req.body.email })
    if (!userFound) return res.status(400).json({ message: "User not found" });
    console.log(userFound);
    const matchPassword = await userFound.comparePassword(req.body.password, userFound.password);

    if (!matchPassword) return res.status(401).json({
        token: null,
        message: 'Invalid password'
    });
    const token = jwt.sign({ id: userFound._id }, config.SECRET, {
        expiresIn: 86400
    })
    res.status(200).json({ token: token, user: userFound });
};

export const getAllUsers = async (req, res) => {
    const users = await User.find();
    return res.json(users);
};

