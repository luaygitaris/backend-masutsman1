const express = require("express")
const cors = require("cors")
const { Pool } = require('pg');
const userRoute = require("./router/userRoute.js")

const PORT = 3000

const app = express()

app.use(cors())

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  password: 'libraayra',
  port: 5432,
});

app.use(express.json())

app.use("/api", userRoute)

app.listen(PORT, () => console.log(`Server Running on ${PORT} PORT`))

app.get("/", (req, res)=>{
    res.send("API WORKING")
})