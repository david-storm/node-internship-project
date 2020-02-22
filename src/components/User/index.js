const UserService = require('./service');

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function findAll(req, res, next) {
    try {
        const users = await UserService.findAll();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}
async function findUsers(req, res, next) {
    try {
        const users = await UserService.findUsers(res.query);
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

async function createUser(req, res, next) {
    try {
        const user = await UserService.createUser(req.body.email, req.body.fullName);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

async function updateUser(req, res, next) {
    try {
        const user = await UserService.updateUser(req.body.email, req.body.fullName);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

async function deleteUser(req, res, next) {
    try {
        const user = await UserService.deleteUser(req.body);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    findAll,
    findUsers,
    createUser,
    updateUser,
    deleteUser
}