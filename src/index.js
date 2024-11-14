const express = require("express");
const connection = require("./config/connection");
const router = require("./routes/register.route");
const accountRouter = require("./routes/account.route")
const routes = require("./routes/product.route");
const product = require("./models/product.model");
require("dotenv").config();
const app = express();
app.use(express.json());
connection();

app.use(router);
app.use (accountRouter);
app.use (product);

app.use("/", (req, res) => {
    res.send("Server is alive");
});

const port = 8000;
app.listen(port, () => {
    console.log("Server is running on:", port);
});
