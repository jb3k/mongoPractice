const express = require('express')
const router = express.Router()

//Getting all
router.get('/', (req, res) => {
    res.send('HELLO')


})
//Getting one
router.get('/:id', (req, res) => {



})
// Creating One
router.post('/', (req, res) => {



})
// Updating One
router.patch('/', (req, res) => {



})
// Deleting One
router.delete('/:id', (req, res) => {



})

module.exports = router
