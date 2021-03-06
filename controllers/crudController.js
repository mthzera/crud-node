'use strict';

const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.createUser = (req, res) => {
    const newUser = new User(req.body);
    newUser.save((err, user) => {
        if(err){
            res.send(err);
        }
        res.json(user);
    });
}
