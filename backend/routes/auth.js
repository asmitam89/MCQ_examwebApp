const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcrypt');

// Middleware to check if user is authenticated
function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  } else {

    return res.status(401).json({ error: "Unauthorized: Please log in." });
  }
}

// LOGIN Route
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.query("SELECT * FROM `admin` WHERE (Email = ? OR Password=?)", [username,username], async (err, results) => {
    if (err) return res.status(500).send(err);

    if (results.length === 0) {
      return res.status(401).send("User not found");
    }

    const user = results[0];
    const match = await bcrypt.compare(password, user.Password);

    if (results[0].length === 0) {
      return res.status(401).send("Incorrect password");
    }

    req.session.user = { id: user.id, username: user.username };
    delete user.Password;

    res.send({ message: "Login successful", user });
  });
});

// LOGOUT Route
router.get('/logout',isAuthenticated, (req, res) => {
  req.session.destroy();
  res.send('Logged out');
});

// CHECK SESSION
router.get('/check', (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user.username });
  } else {
    res.send({ loggedIn: false });
  }
});

// PROTECTED ROUTE EXAMPLE
router.get('/dashboard', isAuthenticated, (req, res) => {
  res.send({ message: "Welcome to the dashboard", user: req.session.user });
});

module.exports = router;
