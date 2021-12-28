import 'reflect-metadata'
import './database'
import express from 'express'


const app = express()

app.get("/", (request, response)=>{
    response.json({
        success:'Meu nome é'
    })
})

app.listen(3000, ()=>{
    console.log("server running")
})