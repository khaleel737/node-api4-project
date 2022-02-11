const express = require('express');
const Users = require('./users-model')


const  { validateUserId, validateUser } = require(`../middleware/middleware`)


const router = express.Router();

router.get('/users', async (req, res) => {
  try {

    const allUsers = await Users.get(req.params);
    res.status(200).json(allUsers)
  } catch (err) {
    res.status(404).json({ message: `Request not found` })
  }
});

router.get('/login/:id', validateUserId,  (req, res) => {

    res.json(`Welcome ${req.user.name}`)
  
});

router.post('/register', validateUser, async (req, res, next) => {


    const insertUser = await Users.insert({ name: req.name});
    res.status(201).json(insertUser)
    next();
  
});

router.put('/:id', validateUserId, validateUser, async (req, res) => {

  try {
    const updateUser = await Users.update(req.params.id, {name: req.name});
    res.status(200).json(updateUser)
  } catch (err) {
    res.status(404).json({ message: `Update countered Error` })
  }
});

router.delete('/:id', validateUserId, async (req, res, next) => {

  try {
    const deleteUser = await Users.remove(req.params.id);
    res.json(deleteUser)
  } catch (err) {
    next(err)
  }
});



module.exports = router;
