const {Router} = require('express')
const config = require('config')
const shortid = require('shortid')
const Film = require('../models/Film')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/generate', auth, async (req, res) => {
    try {
        //const baseUrl = config.get('baseUrl')
        const {from} = req.body

        //const existing = await Film.findOne({ from })

         // if (existing) {
         //     return res.json({ film: existing })
         // }

        //const to = baseUrl + '/t/' + code

        const film = new Film({
            name: from , owner: req.user.userId
        })

        await film.save()

        res.status(201).json({ film })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.get('/', auth, async (req, res) => {
    try {
        const films = await Film.find({ owner: req.user.userId })
        res.json(films)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.get('/:id', auth, async (req, res) => {
    try {
        const film = await Film.findById(req.params.id)
        res.json(film)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

module.exports = router