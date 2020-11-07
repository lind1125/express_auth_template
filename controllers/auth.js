const express = require('express')
const router = express.Router()
const db = require('../models')
const passport = require('../config/ppConfig.js')

router.get('/signup', (req, res)=>{
    res.render('auth/signup')
})

router.post('/signup', (req, res)=>{
    console.log('sign up form user input:', req.body)
    db.user.findOrCreate({     // check if the user already exists
        where: {email: req.body.email},
        defaults: {
            name: req.body.name,
            password: req.body.password
        }
    }) // create a new user if email wasn't found
    .then(([createdUser, wasCreated])=>{
        if(wasCreated){
            console.log('just created the following user:', createdUser)
            // log the new user in
            passport.authenticate('local', {
                successRedirect: '/'
            })(req, res) // IIFE = immediately invoked function
        } else {
            console.log('An account associated with that email address already exists! Try logging in.')
        }
        // redirect to login page
        // res.redirect('/auth/login') // a redirect starts a new request object
    })
    .catch(err=>{
        console.log('Did not post to DB!! See error:', err)
    })
})


router.get('/login', (req, res)=>{
    res.render('auth/login')
})

router.post('/login', passport.authenticate('local', {
    failureRedirect: '/auth/login',
    successRedirect: '/'
}))

router.get('/logout', (req, res)=>{
    req.logout()
    res.redirect('/')
})





module.exports = router