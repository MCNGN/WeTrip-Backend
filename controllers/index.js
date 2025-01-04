const db = require("../db/connection");

// Example controller function to get data from the database
const getData = async (req, res) => {
  try {
    db.query("SELECT * FROM `trips`", (error, results) => {
      if (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal Server Error" });
        return;
      }
      res.json(results);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    db.query(
      "SELECT * FROM `login` WHERE `email` = ? AND `password` = ?",
      [email, password],
      (error, results) => {
        if (error) {
          console.error("Error fetching user:", error);
          res.status(500).json({ error: "Internal Server Error" });
          return;
        }

        if (results.length === 0) {
          res.status(401).json({ error: "Invalid email or password" });
          return;
        }

        res.json({ message: "Sign-in successful" });
      }
    );
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Example controller function to add data to the database
module.exports = {
  getData,
  signIn,
};
