const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.get('/', (req, res)=>{
    Exercise.find()
    .then(exercises =>res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/new-exercise', (req, res)=>{
    const userId = req.body.userId;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date)

    const newExercise = new Exercise({
        userId,
        description,
        duration,
        date
    });
    newExercise.save()
    .then(() =>res.json(newExercise))
    .catch(err => res.status(400).json('Error: ' + err));
    
})

router.get('/:id', (req, res)=>{
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json("Error: " + err))
})
router.delete('/:id', (req, res)=>{ 
    Exercise.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Exercise Deleted. '))
    .catch(err => res.status(400).json('Error: ' + err));
})
router.post('update/:id', (req, res)=>{
    Exercise.findById(req.params.id)
    .then(exercise => {
        exercise.userId = req.body.userId;
        exercise.body.description;
        exercise.body.duration = Number(req.body.duration);
        exercise.body.date = Date.parse(req.body.date);
        exercise.save()
        .then(()=> res.json('Exercise updated! '))
        .cach(err => res.status(400).json("Error: " + err))
    })
})

module.exports = router