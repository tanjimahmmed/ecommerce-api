const User = require('../models/User');
const {StatusCodes} = require('http-status-codes');
const customError = require('../errors');

const register = async (req, res) => {
    const {email, name, password} = req.body;

    const emailAlreadyExists = await User.findOne({email});
    
    if(emailAlreadyExists) {
        throw new customError.BadRequestError('Email already exists')
    }

    // first registered user is admin
    const isFirstAccount = await User.countDocuments() === 0;

    const role = isFirstAccount? 'admin' : 'user'

    const user = await User.create({name, email, password, role});
    res.status(StatusCodes.CREATED).json({user})
}

const login = async (req, res) => {
    res.send('login')
}

const logout = async (req, res) => {
    res.send('logout')
}

module.exports = {
    register,
    login,
    logout
}