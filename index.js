const dotenv = require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 9000
const path = require("path")

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,"client/build")))

app.use("/api/",(_,res)=>{
    res.json({data:"API is accounted for"})
})

app.listen(port,()=>{
    console.log(`Server is alive on port ${port}`)
})

// console.log("Its alive!!!!!!")
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USERNAME)//mac USER
// console.log(process.env.PORT)
// console.log(process.env.FOOD)
// console.log(process.env.REALLY)
// console.log(process.env.GREET)

// console.log("It is alive!")
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USER)
// console.log(process.env.PORT)

// require('dotenv').config()
// const path = require('path')
// const express = require('express')

// const server = express()

// server.use(express.json())
// server.use(express.static(path.join(__dirname, 'client/build')))

// //on Heroku machine, an env variable is called NODE_ENV => production
// if (process.env.NODE_ENV === 'development'){
//     const cors = require('cors')
//     server.use(cors())
// }
// //our API comes earlier in the pipeline
// server.get('/api/hello', (req, res) => {
//     res.json({message: 'hello'})
// })

// //catch-all that just sends back index.html
// server.get('*', (req, res) => {
//     res.sendFile(path.jsoin(__dirname, 'client/build', 'index.html'))
// })

// const PORT = process.env.PORT || 4000

// server.listen(PORT, () => {
//     console.log(`listening on ${PORT}`)
// })
