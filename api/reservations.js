const { hash } = require('bcrypt');
const express = require('express');
const router = express.Router();

const knex = require('knex')(require('../knexfile'));

router
    .get('/', (req, res, next) => {
        knex
            .select()
            .table('reservation')
            .then(data => {
                res.status(200).json(data);
            }).catch(e => {
                console.error(e);
                res.status(404).json(e)
            });
    })

.post("/user/register", (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hashedPassword => {
            knex('users')
                .insert({
                    'username': req.body.username,
                    'email': req.body.email,
                    'passwrd': hashedPassword
                })
                .then(data => {
                    const userId = data[0];
                    console.log(reservationId);
                    res.status(201).json({ status: `user with id ${reservationId} created` });
                })
        })
        .catch(error => next(error))
})

.post("/user/login", (req, res, next) => {
    database("user")
        .where({ email: req.body.email })
        .first()
        .then(user => {
            if (!user) {
                response.status(401).json({
                    error: "No user by that email"
                })
            } else {
                return bcrypt
                    .compare(reqt.body.password, user.password)
                    .then(isAuthenticated => {
                        if (!isAuthenticated) {
                            res.status(401).json({
                                error: "Unauthorized Access!"
                            })
                        } else {
                            return jwt.sign(user, SECRET, (error, token) => {
                                res.status(200).json({ token })
                            })
                        }
                    })
            }
        })
});


module.exports = router;