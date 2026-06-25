const db = require('../config/db');

exports.getAllEmployees = async () => {
    const [rows] = await db.query('SELECT * FROM employees');
    return rows;
};

exports.getemployeeByEmail = async (email) => {

    const [rows] = await db.query(
        'SELECT * FROM employees WHERE email = ?',
        [email]
    );

    return rows[0];
};
exports.findById = async (id) => {

    const [rows] = await db.query(
        'SELECT * FROM employees WHERE id = ?',
        [id]
    );

    return rows[0];
};

exports.update = async (id, employee) => {
    const { name, email, salary } = employee;
    const [result] = await db.query(
        'UPDATE employees SET name=?, email=?, salary=? WHERE id=?',
        [name, email, salary, id]
    );
    return result;
};

exports.save = async (employee) => {
    const{ name, email, salary }=employee;
    const[result]=await db.query('INSERT INTO employees (name, email, salary) VALUES (?, ?, ?)', [name, email, salary]);
    return { id: result.insertId, name, email, salary };
    return result;
};



exports.deleteEmployee = async (id) => {
    const [result] = await db.query('DELETE FROM employees WHERE id = ?', [id]);
    return result;
};