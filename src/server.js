const proffys = [
    { 
        name: "Mateus Costa", 
        avatar: "https://avatars0.githubusercontent.com/u/34768777?s=460&u=cd8b6d1a6f39529148ddf04db28f598a0be98b51&v=4", 
        whatsapp: "80987644", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [
            0
        ], 
        time_from: [720], 
        time_to: [1220]  
    },

    { 
        name: "Ariel Matos", 
        avatar: "https://avatars0.githubusercontent.com/u/34768777?s=460&u=cd8b6d1a6f39529148ddf04db28f598a0be98b51&v=4", 
        whatsapp: "80987644", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [7], 
        time_from: [720], 
        time_to: [1220]  
    },

    { 
        name: "Roberto Siqueira", 
        avatar: "https://avatars0.githubusercontent.com/u/34768777?s=460&u=cd8b6d1a6f39529148ddf04db28f598a0be98b51&v=4", 
        whatsapp: "80987644", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost: "20", 
        weekday: [5], 
        time_from: [720], 
        time_to: [1220]  
    }
]

const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

function pageLanding(req, res) {
    return res.sendFile(__dirname + "/views/index.html");
}

function pageStudy(req, res) {
    return res.sendFile(__dirname + "/views/study.html");
}

function pageGiveClasses(req, res) {
    return res.sendFile(__dirname + "/views/give-classes.html")
}

server
    .use(express.static("public"))
    .get("/", pageLanding)
    .get("/study", pageStudy) 
    .get("/give-classes", pageGiveClasses)
    .listen(5000)



