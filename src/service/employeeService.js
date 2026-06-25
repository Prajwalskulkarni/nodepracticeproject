const employeeRepository = require('../repositories/employeeRepository');

exports.getAllEmployees = async () => {
    return await employeeRepository.getAllEmployees();
};

exports.getEmployeeById = async (id) => {
    return await employeeRepository.getEmployeeById(id);
};

exports.createEmployee = async (employee) => {
    return await employeeRepository.save(employee);
};

exports.updateEmployee = async (id, employee) => {
    return await employeeRepository.updateEmployee(id, employee);
};

exports.deleteEmployee = async (id) => {
    return await employeeRepository.deleteEmployee(id);
};