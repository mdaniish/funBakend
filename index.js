require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello India!')
})

app.get('/instagram', (req, res)=>{
   res.send('mdaniish') 
})

app.get('/login', (req, res)=>{
    res.send('<h1>Welcome h1 Tag</h1>')
})

app.get('/youtube', (req,res)=>{
    res.send('<h2>Chai aur code</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})