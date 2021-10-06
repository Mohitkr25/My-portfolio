const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname) + "/index.html");
});
app.get("/style.css", (req, res) => {
  res.sendFile(path.resolve(__dirname) + "/style.css");
});
app.listen(PORT, () => console.log(`Listening port ${PORT}`));
app.get("/download", (req, res) => {
  res.download(path.resolve(__dirname) + "/public/resumes/mohit.pdf");
});
// app.get("/download", (req, res) => {
//   res.download(path.resolve(__dirname) + "/public/Screenshot (11).png");
// });
