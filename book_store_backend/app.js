const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5007;
const connectDB = require("./auth/db");
const apiRoutes = require("./routes/api");
//Database Connection
connectDB();

app.use(bodyParser.json());
app.use(express.json());
// app.use(bodyParser.urlencoded());
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
