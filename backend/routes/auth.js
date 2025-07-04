const express = require('express');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const { generateToken } = require('../lib/utils');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();
const prisma = new PrismaClient();

router.post('/register', async (req, res) => {
  const { username, password, role, email, name, teamId } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { username, password: hashedPassword, role, email, name, teamId }
    });
    res.json({ success: true, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Registration failed" });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) return res.status(400).json({ success: false, message: "Invalid username" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ success: false, message: "Invalid password" });

    await prisma.log.create({
      data: {
        userId: user.id,
        action: "login"
      }
    });

    const token = generateToken({ id: user.id, role: user.role, username: user.username });

    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        username: user.username,
        role: user.role,
        name: user.name,
        email: user.email,
        teamId: user.teamId
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Login failed" });
  }
});

//logout endpoint
router.post('/logout',  authenticateToken, async (req, res) => {
  const userId = req.user.id; // Assuming user ID is set in the request by auth middleware
  try {
    await prisma.log.create({
      data: {
        userId,
        action: "logout"
      }
    });
    res.json({ success: true, message: "Logged out successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Logout failed" });
  }
}); 

router.get('/profile', async (req, res) => {
  const userId = req.user.id; // Assuming user ID is set in the request by auth middleware
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { team: true }
    });
    if (!user) return res.status(404).json({ success: false, message: "User not found" });

    res.json({ success: true, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to fetch profile" });
  }
});


module.exports = router;
