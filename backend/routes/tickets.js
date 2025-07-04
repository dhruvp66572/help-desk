const express = require("express");
const { PrismaClient } = require("@prisma/client");
const {
  authenticateToken,
  authorizeRoles,
} = require("../middleware/authMiddleware");

const router = express.Router();
const prisma = new PrismaClient();

router.use(authenticateToken);

// Get all tickets
router.get('/', async (req, res) => {
  try {
    const tickets = await prisma.ticket.findMany({
      orderBy: { dateCreated: 'desc' },
      include: {
        createdBy: {
          select: { id: true, username: true }
        }
      }
    });

    res.json({ success: true, tickets });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to fetch tickets" });
  }
});

// get all tickets by user ID
router.get("/user/:id", async (req, res) => {
  try {
    const tickets = await prisma.ticket.findMany({
      where: { createdById: Number(req.params.id) },
      orderBy: { subject: "desc" },    
    });



    res.json({ success: true, tickets });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch tickets" });
  }
});

// Get ticket by ID
router.get("/:id", async (req, res) => {
  try {
    const ticket = await prisma.ticket.findUnique({
      where: { id: Number(req.params.id) },
    });

    if (!ticket)
      return res
        .status(404)
        .json({ success: false, message: "Ticket not found" });

    res.json({ success: true, ticket, createdBy: ticket.createdById });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to fetch ticket" });
  }
});

// Create new ticket (User, Operator, Support)
router.post(
  "/",
  authorizeRoles("user", "operator", "support", "admin"),
  async (req, res) => {
    const {

      subject,
      description,
      category,
      priority,
      department,
      ticketNumber,
    } = req.body;
    try {
      const ticket = await prisma.ticket.create({
        data: {
          department,
          subject,
          description,
          category,
          priority,
          status: "open",
          ticketNumber: ticketNumber,
          createdById: req.user.id,
          name: req.user.username,
        },
      });

      res.json({
        success: true,
        message: "Ticket created successfully",
        ticket,
      });
    } catch (error) {
      console.error("Error creating ticket:", error);
      res.status(500).json({
        success: false,
        message: "Failed to create ticket. Please try again.",
      });
    }
  }
);

// Update ticket status/details (Operator, Support, Admin)
router.put(
  "/:id",
  authorizeRoles("operator", "support", "admin"),
  async (req, res) => {
    const ticket = await prisma.ticket.update({
      where: { id: Number(req.params.id) },
      data: req.body,
    });
    res.json(ticket);
  }
);

// Approve ticket (Support, operator, admin)
router.post(
  "/:id/approve",
  authorizeRoles("support", "operator", "admin"),
  async (req, res) => {
    const { assignTo } = req.body;
    try {
      const ticket = await prisma.ticket.update({
        where: { id: Number(req.params.id) },
        data: {
          status: "approved",
          supportedById:  Number(assignTo),
        },
      });
      res.json({ success: true, ticket });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, message: "Failed to approve ticket" });
    }
  }
);

module.exports = router;
