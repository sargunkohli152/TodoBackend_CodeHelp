// const express = require("express");

// const app = express();
// app.listen(3000, () => {
//     console.log("App is running successfully");
// })

const express = require("express");

const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 4000;


// middleware to parse json request body
app.use(express.json());

//import routes for Todo Api
const todoRoutes = require("./routes/todo");

//mount to todo api routes
//middleare
app.use("/api/v1", todoRoutes);

//start the serve, make it listen
app.listen(PORT, () => {
    console.log(`Server started successfully on PORT ${PORT}`);
})

//connect the db
const dbConnect = require("./config/database");
dbConnect();

//default route bhi likho
app.get("/", (req, res) => {
    res.send(`<h1>This is Home Page sahab ji</h1>`);
}) 