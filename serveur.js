const express = require("express");
const app = express();
const port = 4000;
const connectdb = require("./config/connectdb");
const contactRoutes = require("./routes/contactRoutes");

connectdb();

//middle from express
app.use(express.json());

//path principale
app.use("/contact", contactRoutes);

app.get("/", (req, res) => {
  try {
    res.send(`welcome to localcost ${port}`);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, (err) => {
  err ? console.log(err) : console.log(`go to port : ${port} `);
});
