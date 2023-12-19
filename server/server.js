const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const errorMiddleware = require("./middlewares/error-middleware.js");

const app = express();

const authRouter = require("./router/auth-router.js");
const contactRouter = require("./router/contact-router.js");
const serviceRouter = require("./router/service-router.js");
const connectDb = require("./utils/db.js");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);
app.use("/api/data", serviceRouter);
app.use(errorMiddleware);

connectDb(process.env.MONGO_URL).then(() => {
  app.listen(5000, () => {
    console.log("Server is running");
  });
});
