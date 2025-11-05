// Import packages
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

//Routes
const workoutRoutes = require('./routes/workout')
const userRoutes = require('./routes/user')


dotenv.config()

// Express app
const app = express()



// Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// Routes
app.get('/', (req, res) => {
    res.json({ msg: 'Welcome to our Application' })
})

// All workout routes under /api/workouts
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// Port
const PORT = process.env.PORT || 4000

// Connect to DB and start server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is up and listening on port: ${PORT} & database connected`)
        })
    })
    .catch((error) => {
        console.log('Database connection error:', error)
    })
