import { employee, employeeDetails } from './employee.js';
import addClient from './client.js';

let client = addClient('hal', 34, 'manager');
client.print();

let newEmployee = employee('melvin');
employeeDetails(newEmployee);
