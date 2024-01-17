const express = require("express");
const app = express();
var cors = require("cors");
const router = require("./router/auth-router");
const connectDb = require("./utils/dbconn");
const errorMiddleware = require("./middlewares/error-middleware");
const contactRoute = require("./router/contact-router");

const port = 3000;
const hostName = "127.0.0.1";
app.use(cors());
app.use(express.json());

app.use("/api/auth", router);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);

// app.get("/", (req, res) => {
//   res.status(200).send("Hello World!");
// });
// app.get("/register", (req, res) => {
//   res.status(200).send("Welcome Register");
// });

connectDb().then(() => {
  app.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`);
  });
});
