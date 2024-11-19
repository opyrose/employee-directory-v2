const express = require("express")
const router = express.Router();
module.exports = router;

const employees = require("./employees");

app.get("/employees", (req, res) => {
    res.json(employees);
});

router.post("/employees", (req, res, next) => {
    const { name } = req.body;
    if (name) {
        const newEmployee = { id: employees.length + 1 };
        employees.push(newEmployee);
        res.status(201).json(newEmployee);

    } else {
        next({ status: 400, message: "New employee must have a name." });
    }
})
app.get("/employees/random", (req, res) => {
    const i = Math.floor(Math.random() * employees.length);
    res.json(employees[i]);
});

app.get("/employees/:id", (req, res) => {
    const { id } = req.params;
    const employee = employees.find((e) => e.id === +id);
    if (employee) {
        res.json(employee);
    } else {
        res.status(404).send(`There is no employee with id ${id}.`);
    }
});