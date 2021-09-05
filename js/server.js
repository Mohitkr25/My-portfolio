const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
console.log(app.get("view engine"));
console.log(app.get("views"));

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname) + "/index.html");
});
app.get("/download", (req, res) => {
  res.download(path.resolve(__dirname) + "/resumes/RESUME -Mohit kumar.pdf");
});
app.listen(PORT, () => {
  console.log(`Listenong on port  ${PORT}`);
});
