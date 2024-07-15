require("dotenv").config();
const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRouter = require("./routes/web");
const apiRouter = require("./routes/api");
const connection = require("./config/database");
const fileUpload = require("express-fileupload");
//new branch
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config file upload
app.use(fileUpload());
//config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded()); //Parse URL-encoded bodies

// config template engine
configViewEngine(app);

app.use("/", webRouter);
app.use("/v1/api/", apiRouter);

//test connection
(async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Backend app listening on port ${port}`);
    });
  } catch (error) {
    console.log(">>> Error connecrt to DB:", error);
  }
})();
