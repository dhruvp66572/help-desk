const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { authenticateToken, authorizeRoles } = require('../middleware/authMiddleware');

const router = express.Router();
const prisma = new PrismaClient();

router.use(authenticateToken, authorizeRoles('admin'));


router.get('/', async (req, res) => {
  const teams = await prisma.team.findMany({ include: { users: true } });
  res.json(teams);
});

router.post('/', async (req, res) => {
  const team = await prisma.team.create({ data: { name: req.body.name } });
  res.json(team);
});

router.delete('/:id', async (req, res) => {
  await prisma.team.delete({ where: { id: Number(req.params.id) } });
  res.json({ message: "Team deleted" });
});

module.exports = router;
