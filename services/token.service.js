const jwt = require("jsonwebtoken");

class TokenService {
    generateAccessToken (id) {
        const payload = {
            id
        }
        return jwt.sign(payload, process.env.SECRET, {expiresIn: process.env.TIME_TOKEN})
    }
}

module.exports = new TokenService()