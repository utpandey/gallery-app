const express = require('express');
const mongoose = require("mongoose");
const Image = mongoose.model('Image');
const router = express.Router();

// create a picture
router.post('/picture/add/:userId', async(req, res) => {
    // req.body.user = req.params.userId;
    const { link, album } = req.body;
    const user = req.params.userId;
    try {
        const pictureObj = new Image({ link, album, user });
        await pictureObj.save(function(err) {
            if (err) {
                res.status(401);
            }
            // console.log(pictureObj);
            // var pictureId = pictureObj._id;
            // res.status(200).send(bugObject);
            res.status(200).send(pictureObj);
        });
        // new Image(req.body).save()
        //     .then(saved => res.send(saved))
        //     .catch(next);
    } catch (err) {
        res.status(422).send(err.message);
        console.log(err);
    }
})

//     .post('/:userId', (req, res, next) => {
//     req.body.user = req.params.userId;
//     new Image(req.body).save()
//         .then(saved => res.send(saved))
//         .catch(next);
// })

.put('/:id', (req, res, next) => {
    Image.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updated => res.send(updated))
        .catch(next);
})

.delete('/picture/delete/:id', (req, res, next) => {
    const id = req.params.id;
    Image.findByIdAndRemove(id)
        .then(deleted => res.send(deleted))
        .catch(next);
});

module.exports = router;