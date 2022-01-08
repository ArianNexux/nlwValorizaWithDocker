import 'reflect-metadata'
import './database'
import 'express-async-errors'
import express,{ Response, Request, NextFunction} from 'express'
import router from './routes'

const app = express()

app.use(express.json())
app.use(router)

app.use((err: Error, request: Request, response: Response, next: NextFunction)=>{
    if(err instanceof Error){
        return response.status(400).json({ message: err.message})
    }

    return response.status(500).json({ message: 'Internal server error'})
})

app.listen(3000, () => {
    console.log("server running")
})