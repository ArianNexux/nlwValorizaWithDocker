import 'reflect-metadata'
import './database'
import express from 'express'
import router from './routes'

const app = express()

app.use(express.json())
app.use(router)

app.use((err, request, response, next)=>{
    if(err instanceof Error){
        return response.status(400).json({ message: err.message})
    }

    return response.status(500).json({ message: 'Internal server error'})
})

app.listen(3000, ()=>{
    console.log("server running")
})