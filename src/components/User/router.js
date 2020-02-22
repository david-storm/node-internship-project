const { Router } =  require('express');
const UserComponent =  require('../User');
const validation = require('./validation.js');

/**
 * Express router to mount user related functions on.
 * @type {Express.Router}
 * @const
 */
const router = Router();

/**
 * Route serving list of users.
 * @name /v1/users
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */

router.use(function(req, res, next) {
    let value = {};
    if(Object.keys(req.query).length){
         value = validation.validate(req.query);
    }   

    if(Object.keys(req.body).length){
         value = validation.validate(req.body);
    }

    if(value.error){
        res.status(400).json(value.error.details[0].message);
        return;
    }
    next();
});

router.get('/', UserComponent.findAll);

router.get('/find', UserComponent.findUsers);

router.post('/create', UserComponent.createUser);

router.put('/update', UserComponent.updateUser);

router.delete('/delete', UserComponent.deleteUser);

module.exports = router;