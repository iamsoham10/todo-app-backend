const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Task = require('./models/Task');
const User = require('./models/user');
const userRoute = require('./routes/paths');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 8000;

mongoose.connect("mongodb+srv://sohamchitale:pass_soham@todo.hxvfx4u.mongodb.net/?retryWrites=true&w=majority&appName=todo").then(function () {
    app.get("/", (req, res) => {
        const response = { messeage: "API Working" };
        res.json(response);
    });

    const taskRouter = require('./routes/paths')
    app.use("/tasks", taskRouter);
});

app.use('/', userRoute);

app.listen(port, () => {
    console.log(`Server is up and running on ${port}`);
});
