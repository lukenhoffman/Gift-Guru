require('dotenv').config();  // Ensure dotenv is required at the very top
console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('TEST_VAR:', process.env.TEST_VAR);  // Additional debug line

const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/dbConfig');

const authRoutes = require('./routes/authRoutes');
const giftRoutes = require('./routes/giftRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => console.log("Database Connected Successfully"))
  .catch((err) => console.log("Database Connection Error: ", err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/gifts', giftRoutes);
app.use('/api/recommendations', recommendationRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
