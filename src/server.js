//Servidor
const Database = require('./database/db')

const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//configurar nunjucks
const nunjucks = require('nunjucks')
const { query } = require('express')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})


server
//recebermos dados do req.body
.use(express.urlencoded({ extended: true }))
//arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//rotas
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-class", saveClasses)
//start
.listen(5500)