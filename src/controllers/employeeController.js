const employeeService = require('../service/employeeService');

exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await employeeService.getAllEmployees();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await employeeService.getEmployeeById(req.params.id);
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createEmployee = async (req, res) => {
    try {
        const newEmployee = await employeeService.createEmployee(req.body);
        res.status(201).json({
            message: 'Employee created successfully',
            employeeId: newEmployee.id
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
         });
    }
};

exports.updateEmployee = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await employeeService.updateEmployee(id, req.body);
        res.status(200).json({
            success: true,
            message: 'Employee updated successfully'
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

exports.deleteEmployee = async (req, res) => {
    try {
        const result = await employeeService.deleteEmployee(req.params.id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};