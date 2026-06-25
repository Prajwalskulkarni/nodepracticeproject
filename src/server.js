require('dotenv').config();
const express= require('express');
const mysql= require('mysql2');
const bodyParser= require('body-parser');
const app= express();
app.use(express.json());

const employeeRoutes =require('./routes/employeeRoutes');
app.use('/api/employees', employeeRoutes);
const PORT= process.env.PORT ;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});