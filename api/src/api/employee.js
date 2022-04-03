const {Router} = require('express');
const Employee = require('../persistence/employees');

const router = new Router();

router.post('/', async (request, response) => {
  try {
    const {name , age, email, dob , address, photo} = request.body;
    if (!name || !email || !age || !dob || !address || !photo) {
      return response
        .status(400)
        .json({message: 'name , age, dob,photo , email and name must be provided'});
    }

    const employee = await Employee.create(name , age, email, dob , address, photo);
    if (!employee) {
      return response.status(400).json({message: 'Employee already exists'});
    }

    return response.status(200).json(employee);
  } catch (error) {
    console.error(
      `createEmployee({ email: ${request.body.email} }) >> Error: ${error.stack}`
    );
    response.status(500).json();
  }
});
router.get('/', async (request, response) => {
  try {
    const employees = await Employee.findAll();
    if (!employees) {
      return response.status(400).json({message: '!Employees'});
    }
    return response.status(200).json(employees);
  } catch (error) {
    console.error(
      `getEmployees() >> Error: ${error.stack}`
    );
    response.status(500).json({message: 'Something went wrong'});
  }


});

router.get('/:id', async (request, response) => {
  try {
    const {id} = request.params;
    const employee = await Employee.findById(id);
    if (!employee) {
      return response.status(400).json({message: '!Employee'});
    }
    return response.status(200).json(employee);
   
  } catch (error) {
    console.error(
      `getEmployees() >> Error: ${error.stack}`
    );
    response.status(500).json({message: 'Something went wrong'});
  }
});


router.put('/:id', async (request, response) => {
  try {
    const {id} = request.params;
    const {name , age, email, dob , address, photo} = request.body;
    const updateEmployee = await Employee.update(id, name , age, email, dob , address, photo);
    if (!updateEmployee) {
      return response.status(400).json({message: '!Employee'});
    }
    return response.status(200).json(updateEmployee);
  } catch (error) {
    console.error(
      `updateEmployee({ email: ${request.body.email} }) >> Error: ${error.stack}`
    );
    response.status(500).json({message: 'Something went wrong'});
  }
});
router.delete('/:id', async (request, response) => {
  try {
    const {id} = request.params;
    const deleteEmployee = await Employee.delete(id);
    if (!deleteEmployee) {
      return response.status(400).json({message: '!Employee'});
    }
    return response.status(200).json(deleteEmployee);
  } catch (error) {
    console.error(
      `deleteEmployee({ email: ${request.body.email} }) >> Error: ${error.stack}`
    );
    response.status(500).json({message: 'Something went wrong'});
  }
});
module.exports = router;
