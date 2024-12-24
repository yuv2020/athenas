
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());

// Mock data for candidates
const candidates = [
  { id: 1, name: "Alice", skills: "JavaScript, React", experience: 5 },
  { id: 2, name: "Bob", skills: "Python, Django", experience: 3 },
  { id: 3, name: "Charlie", skills: "Java, Spring Boot", experience: 7 },
  { id: 4, name: "Diana", skills: "HTML, CSS, Bootstrap", experience: 2 },
];

// API endpoint to get candidates
app.get("/api/candidates", (req, res) => {
  res.json(candidates);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
