const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { authenticateToken, authorizeRoles } = require('../middleware/authMiddleware');

const router = express.Router();
const prisma = new PrismaClient();

router.use(authenticateToken, authorizeRoles('admin'));

// create a new user
router.post('/', async (req, res) => {
  const user = await prisma.user.create({
    data: req.body
  });
  res.status(201).json(user);
});

// get all users
router.get('/', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

// get a user by ID
router.put('/:id', async (req, res) => {
  const user = await prisma.user.update({
    where: { id: Number(req.params.id) },
    data: req.body
  });
  res.json(user);
});

// delete a user by ID
router.delete('/:id', async (req, res) => {
  await prisma.user.delete({ where: { id: Number(req.params.id) } });
  res.json({ message: "User deleted" });
});



module.exports = router;
