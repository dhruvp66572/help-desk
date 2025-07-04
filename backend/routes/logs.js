const express = require("express");
const { PrismaClient } = require("@prisma/client");
const {
  authenticateToken,
  authorizeRoles,
} = require("../middleware/authMiddleware");

const router = express.Router();
const prisma = new PrismaClient();

router.use(authenticateToken, authorizeRoles("admin"));

router.get("/", async (req, res) => {
  try {
    const logs = await prisma.log.findMany({
      include: { user: true },
      orderBy: { timestamp: "desc" },
    });
    res.json({
      success: true,
      logs: logs.map((log) => ({
        id: log.id,
        user: log.user.username,
        action: log.action,
        date: new Date(log.timestamp).toLocaleString(),
      })),
    });
  } catch (error) {
    console.error("Error fetching logs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
