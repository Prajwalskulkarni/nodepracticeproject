const employeeRepository = require('../repositories/employeeRepository');

exports.getAllEmployees = async () => {
    return await employeeRepository.getAllEmployees();
};

exports.getEmployeeById = async (id) => {
    return await employeeRepository.getEmployeeById(id);
};

exports.createEmployee = async (employee) => {
    const existingEmployee =await employeeRepository.getemployeeByEmail(employee.email);
    if (existingEmployee) {
        throw new Error('Employee Already Exist');}
    return await employeeRepository.save(employee);
};

exports.updateEmployee = async (id, employee) => {

    console.log("ID:", id);
    console.log("Employee:", employee);

    const existingEmployee =
        await employeeRepository.findById(id);

    console.log("existingEmployee:", existingEmployee);

    const employeeWithEmail =
        await employeeRepository.getemployeeByEmail(employee.email);

    console.log("employeeWithEmail:", employeeWithEmail);

    if (
        employeeWithEmail &&
        employeeWithEmail.id != id
    ) {
        throw new Error('Email already exists');
    }

    return await employeeRepository.update(id, employee);
};

exports.deleteEmployee = async (id) => {
    return await employeeRepository.deleteEmployee(id);
};