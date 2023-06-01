const express = require('express');
const path = require('path');

const app = express();

app.use(
  require("prerender-node").set("prerenderToken",'BCk4NCFmGN2ZVreWRHMT' )
);
// Serve the React app
app.use(express.static(path.join(__dirname, 'build')));

// Define your Node.js routes and logic here
// ...




// For all other requests, serve the React app
app.get('*', (req, res) => {
  // Your Node.js logic here before serving the React app
  // ...

  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;

