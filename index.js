const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/",(req, res) => {
  
  res.render("index.ejs");
});

app.get("/ask", (req, res) => {
  res.render("ask");
})

app.listen(3000, () => {
  console.log("App rodando!");
});
