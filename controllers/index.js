// This file exports controller functions that handle the business logic for the application.

const db = require('../db/connection');

// Example controller function to get data from the database
const getData = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM trip'); // Replace 'your_table_name' with your actual table name
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Example controller function to add data to the database
module.exports = {
  getData,
};