import { Router } from 'express'
const router = Router ()



// get all 

router.get ('/', async (req, res) => {
    res.send ('get all movies')
})


//get Post
router.post('/post', (req, res) => {
    res.send('Post movies')
})


// get by id 

router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID movie')

})


// update by id 

router.patch('/update/:id', (req, res) => {
    res.send('Update by ID movie')
})

// delete by id 

router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID movie')
});

