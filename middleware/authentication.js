const CustomErr = require('../errors');
const {isTokenValid} = require('../utils')

const authenticateUser = async (req, res, next) => {
    const token = req.signedCookies.token;
    if(!token) {
        console.log('error, no token preset')
    } else {
        console.log('token preset')
    }
    next()
}

module.exports = {
    authenticateUser
}