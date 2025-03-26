const express = require("express")
const cors = require("cors")
const { Pool } = require('pg');
const userRoute = require("./router/userRoute.js")

const PORT = 3000

const app = express()

app.use(cors())


app.use(express.json())

app.use("/api", userRoute)

app.listen(PORT, () => console.log(`Server Running on ${PORT} PORT`))

app.get("/", (req, res)=>{
    res.send("API WORKING")
})