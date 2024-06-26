const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee.js');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee")
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error(err, "Error connecting to MongoDB"));

app.post('/register',(req, res) => {
    EmployeeModel.create(req.body)
        .then(employees => res.json(employees))
        .catch(err => res.json(err));
});

app.listen(3001, () => {
    console.log("Server is running");
});
