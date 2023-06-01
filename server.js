const express = require("express");
const path = require("path");
const app = express();
app.use(
	require("prerender-node").set("prerenderToken",'BCk4NCFmGN2ZVreWRHMT' )
);
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});



const port = process.env.PORT || 5121;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});