import express, {Express, Request, Response,} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config()

const PORT = process.env.PORT || 8000
const app: Express = express()
app.use(express.json())
app.use(cors())
app.get('/', (req: Request, res: Response)=>{
    res.send('home')
})

app.listen(PORT,()=>{
    console.log('running🏃')
})