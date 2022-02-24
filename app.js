const express = require("express");

const setupContactRoutes = require("./app/routes/index");

const { BadRequestError, errorHandler } = require("./app/errors");

// cors mongoose 
const cors = require("cors");

//instant express
const app = express();

app.use(cors());

// parse request of content type - application/json
app.use(express.json());

// parse request of content type - application/urlencorded
app.use(express.urlencoded({ extended: true }));

//simple route

app.get("/", (req, res) => {
    res.json({ message: "welcom to contact book application" });

});


setupContactRoutes(app);



// handle 404 response
app.use((req, res, next) => {
    // Code ở đây sẽ chạy khi không có route được định nghĩa nào
    // khớp với yêu cầu. Gọi next() để chuyển sang middleware xử lý lỗi
    next(new BadRequestError(404, "Resource not found"));
    });
    // define error-handling middleware last, after other app.use() and routes calls

    


module.exports = app;
