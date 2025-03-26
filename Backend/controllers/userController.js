const { getAllUsers, createUser } = require('../models/userModel');


const getAllUsersController = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).send('Error fetching users');
  }
};

const createUserController = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = await createUser(username, email, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send('Error creating user');
  }
};

module.exports = {
  getAllUsersController,
  createUserController,
};
