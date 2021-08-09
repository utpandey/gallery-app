const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');
const serverConfig = require('../config');
const requireToken = require('../middlewares/requireToken');


// signup user
router.post('/user/signup', async(req, res) => {

    const { email, password, firstName, lastName, team } = req.body;

    try {
        const user = new User({ email, password, firstName, lastName, team });
        await user.save();
        const id = user._id;
        const token = jwt.sign({ userId: user._id }, serverConfig.jwtKey)
        res.send({ token, id })
    } catch (err) {
        res.status(422).send(err.message)
        console.log(err);
    }
})


// signin user
router.post('/user/signin', async(req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).send({ error: "Must provide email or password" })
    }
    const user = await User.findOne({ email })
    if (!user) {
        return res.status(422).send({ error: "Must provide email or password" })
    }

    try {
        await user.comparePassword(password)
        const token = jwt.sign({ userId: user._id }, serverConfig.jwtKey)
            // console.log('signin')
            // console.log(user.bugs)
            // console.log(user.firstName);
            // console.log(user.lastName);
            // console.log(user._id);
            // console.log(user.team)
        const { bugs, firstName, lastName, _id, team } = user;
        res.send({ token, bugs, firstName, lastName, _id, team })
    } catch (err) {
        console.log(err);
        return res.status(422).send({ error: "Must provide email or password" })
    }

})

// return  a user's(reportee) bug
router.post("/user/bug", async(req, res) => {
    const { reporteeId } = req.body;

    try {
        User.findOne({ _id: reporteeId },
            function(error, obj) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(obj)
                    res.status(200);
                    res.send(obj);
                    // console.log(success);
                }
            }
        );
    } catch (err) {
        res.status(422).send(err.message);
        console.log(err);
    }
});

router.get('/', requireToken, (req, res) => {
    res.send({ email: req.user.email })
})


// return all users
router.get('/user/all', (req, res) => {
    User.find({}, function(err, user) {
        var usersMap = [];
        user.forEach(function(users) {
            usersMap.push({
                id: users._id,
                email: users.email,
                firstName: users.firstName,
                lastName: users.lastName,
                team: users.team,
                bugs: user.bugs
            });
            // usersMap[visitor._id] = visitor;
        });
        console.log(usersMap);
        res.send(usersMap);
    })
})



module.exports = router;