const tokenService = require('../services/token.service')
const userService = require('../services/user.service')

class AuthController {
    async signUp (req, res) {
        try {
            const {username, password} = req.body;
            await userService.signUp(username, password, res)
            return res.status(201).json({message: `Пользователь успешно зарегистрирован`})
        } catch (e) {
            console.log(e)
            return res.status(400).json({message: 'Ошибка при регистрации'})
        }
    }

    async signIn (req, res) {
        try {
            const {username, password} = req.body
            const user = userService.signIn(username, password, res)
            const token = tokenService.generateAccessToken(user.id)
            return res.status(202).json({message: 'Успешная авторизация', token})
        } catch (e) {
            console.log(e)
            return res.status(400).json({message: 'Ошибка авторизации'})
        }
    }
}

module.exports = new AuthController()