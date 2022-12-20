const express = require("express")
const colors = require("colors")
const {errorHandler} = require("./middleware/errorMiddleware")
const connectDB = require("./config/db")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 5000

//connect to db
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false }))

app.use("/api/users", require("./routes/userRoutes"))
app.use(errorHandler)

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))