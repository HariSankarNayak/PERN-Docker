import React, { Fragment, useContext, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import EmployeesAPI from "../apis/EmployeesAPI";

export const EditEmployee = route => {
  let history = useHistory();
  const { employee, editEmployee } = useContext(GlobalContext);
  const [selectedEmployee, setSelectedEmployee] = useState({
    id: null,
    address: "",
    name: "",
    dob: "",
    email: "",
    photo: ""
  });
  const currentEmployeeId = route.match.params.id;

  useEffect(() => {
    const employeeId = currentEmployeeId;
    const selectedEmployee =  EmployeesAPI.get("/"+employeeId);
    setSelectedEmployee(selectedEmployee);
    // eslint-disable-next-line
  }, []);

  const handleOnChange = (employeeKey, val) =>
    setSelectedEmployee({ ...selectedEmployee, [employeeKey]: val });

  const onSubmit = e => {
    e.preventDefault();
    const selectedEmployee = EmployeesAPI.put("/"+currentEmployeeId);
    editEmployee(selectedEmployee);
    history.push("/");
  };

  return (
    <Fragment>
      <div className="container Employeeedit">
        <h3>Edit Employees</h3>
        <br />
        <br />
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Name</label>
            <input
              type="text"
              className="form-control"
              value={selectedEmployee.name}
              onChange={e => handleOnChange("name", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Email</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="2"
              value={selectedEmployee.email}
              onChange={e => handleOnChange("email", e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Date Of Bitrth</label>
            <input
              type="date"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              value={new Date(selectedEmployee.dob).toISOString().substring(0, 10)}
              onChange={e => handleOnChange("dob", e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={selectedEmployee.address}
              onChange={e => handleOnChange("address", e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Photo</label>
            <input
              type="text"
              className="form-control"
              id="photo"
              value={selectedEmployee.photo}
              onChange={e => handleOnChange("photo", e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-info">
            Save Employee
          </button>
          <Link to="/">
            {" "}
            <button type="button" className="btn btn-danger">
              Cancel
            </button>
          </Link>
        </form>
      </div>
    </Fragment>
  );
};
