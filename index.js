const express = require('express')
require('dotenv').config()

const authRouter = require("./routes/auth.routes")
const PORT = process.env.PORT || 5000;

const app = express()

app.use(express.json())
app.use('/', authRouter)

const start = () => {
    try {
        app.listen(PORT, () => console.log(`server running on ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()