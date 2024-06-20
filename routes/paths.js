const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const userController = require('../controller/user_controller');

router.post("/list", async (req, res) => {
    var task = await Task.find({ userid: req.body.userid });
    res.json(task);
});

router.post("/add", async (req, res) => {
    await Task.deleteOne({ id: req.body.id });
    const newTask = new Task({
        id: req.body.id,
        userid: req.body.userid,
        content: req.body.content
    });
    await newTask.save();
    const response = { message: "New task has been created " + `id: ${req.body.id}` };
    res.json(response);
});

router.post("/delete", async (req, res) => {
    await Task.deleteOne({ id: req.body.id });
    const response = { message: "Task deleted " + `id: ${req.body.id}` };
    res.json(response);
});

router.post("/register", userController.register);

module.exports = router;