const express = require('express')
const Workout = require('../models/workoutModel')
const { createWorkout, getWorkout, getWorkouts, updateWorkout, deleteWorkout } = require('../controller/workoutController')
const requireAuth = require('../middleware/requireAuth')



const router = express.Router()

//require Auth for all workout routes.
router.use(requireAuth)

// GET all workouts
// router.get('/', async (req, res) => {
//     try {
//         const workouts = await Workout.find({})
//         res.status(200).json(workouts)
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// })

router.get('/', getWorkouts)


// GET a single workout by ID
// router.get('/:id', async (req, res) => {
//     try {
//         const workout = await Workout.findById(req.params.id)
//         if (!workout) return res.status(404).json({ error: 'Workout not found' })
//         res.status(200).json(workout)
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// })

router.get('/:id', getWorkout)



// POST a new workout
//We create a seprate folder AbortController we create a seperate controller workouts and method.

// router.post('/', async (req, res) => {
//     const { title, load, reps } = req.body
//     try {
//         const workout = await Workout.create({ title, load, reps })
//         res.status(201).json(workout)
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// })

// same as we write it.

router.post('/', createWorkout)



// DELETE a workout by ID
// router.delete('/:id', async (req, res) => {
//     try {
//         const workout = await Workout.findByIdAndDelete(req.params.id)
//         if (!workout) return res.status(404).json({ error: 'Workout not found' })
//         res.status(200).json({ msg: 'Workout deleted', workout })
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// })

router.delete('/:id', deleteWorkout)



// PATCH/update a workout by ID
// router.patch('/:id', async (req, res) => {
//     try {
//         const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true })
//         if (!workout) return res.status(404).json({ error: 'Workout not found' })
//         res.status(200).json(workout)
//     } catch (error) {
//         res.status(400).json({ error: error.message })
//     }
// })

router.patch('/:id', updateWorkout)



module.exports = router
