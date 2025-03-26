const express = require('express');
const router = express.Router();
const { getAllUsers, createUser } = require('../models/userModel');


router.get('/users', async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).send('Error fetching users');
  }
});


router.post('/users', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = await createUser(username, email, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send('Error creating user');
  }
});

module.exports = router;
