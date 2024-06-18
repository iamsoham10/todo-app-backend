// steps
// 1. define schema - details about model
// for example -> task: id, userid, content, dateadded

// 2. create model -> <model name> <schema> Task

const mongoose = require('mongoose');

// Create scheme for the task
const taskschema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    userid: {
        type: String,
        required: true
    },
    content: {
        type: String,
    },
    dateadded: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Task", taskschema);
