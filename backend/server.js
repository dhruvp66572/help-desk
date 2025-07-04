const express = require('express');
const cors = require('cors');
const app = express();

const authRoutes = require('./routes/auth');
// const ticketRoutes = require('./routes/tickets');
// const userRoutes = require('./routes/users');
// const teamRoutes = require('./routes/team');

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
// app.use('/api/tickets', ticketRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/team', teamRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
