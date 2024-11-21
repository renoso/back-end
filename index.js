const express = require("express")
const app = express()


const loginRouter = require('./router/longinRoute')

app.use(loginRouter)

app.get('/' , (req, res) => {
    res.send('<h1>Ola mundo</h1>')
})

//MVC modeo - view - controller (é um padrao para back-end)
app.get('/sobre', (req, res) => {
    res.send('<h2>Vem codar Brasil</h2>')
})


app.listen(3000, () => {
    console.log("sever esta usando a porta 3000")
})