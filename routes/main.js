const express = require('express')
const router = express.Router()

router.get('/', (req,res) =>{
    const data = {
        title: "Timi's coffee house",
        description: "welcome to our house of coffee! we hope you enjoy our broad selection of premium coffee taste from all over the world "
    }

    res.render('home', data)
})


router.get('/blog', (req, res, next) =>{ 
    const data = {
        title: "Timi's coffee house",
        description: "welcome to our house of coffee! we hope you enjoy our broad selection of premium coffee taste from all over the world "
    }

    res.render('blog', data)
})
router.get('/home', (req, res, next) =>{
    const data = {
        title: "Timi's coffee house",
        description: "welcome to our house of coffee! we hope you enjoy our broad selection of premium coffee taste from all over the world "
    }
    res.render('home', data)
})
module.exports = router