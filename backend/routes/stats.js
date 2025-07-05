const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();
const prisma = new PrismaClient();

router.use(authenticateToken);

router.get('/', async (req, res) => {
  const [total, open, pending, closed] = await Promise.all([
    prisma.ticket.count(),
    prisma.ticket.count({ where: { status: 'open' } }),
    prisma.ticket.count({ where: { status: 'pending' } }),
    prisma.ticket.count({ where: { status: 'closed' } })
  ]);
  res.json({
    success: true,
    ticketStats: {
      total,
      open,
      pending,
      closed
    }
   });
});

module.exports = router;
