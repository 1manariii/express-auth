const db = require("../db");
const bcryptjs = require("bcryptjs");

class UserService {
    async signUp (username, password, res) {
        const errors = []
        if(username.length < 6) {
            errors.push('Длина логина не может быть меньше 6 символов')
        }
        if(password.length < 6) {
            errors.push('Длина пароля не может быть меньше 6 символов')
        }
        if(errors.length>0) {
            return res.status(421).json({message: 'Ошибка при регистрации', errors})
        }

        const candidate = await db.query(`SELECT * FROM users WHERE username LIKE '${username}'`)

        if(candidate.rowCount === 1) {
            return res.status(400).json({message: 'Пользователь с таким именем уже существует!'})
        }

        const hashPassword = bcryptjs.hashSync(password, 5)

        await db.query(`INSERT INTO users (username, password) values ($1, $2) RETURNING *`, [username, hashPassword])
    }

    async signIn (username, password, res) {
        const foundedUser = await db.query(`SELECT * FROM users WHERE username LIKE '${username}'`)

        if(foundedUser.rowCount === 0) {
            return res.status(400).json({message: `Пользователь с ${username} не найден!`})
        }

        const user = foundedUser.rows[0]
        const validPassword = bcryptjs.compareSync(password, user.password)
        if (!validPassword) {
            return res.status(400).json({message: `Введен неверный пароль!`})
        }

        return user
    }
}

module.exports = new UserService()