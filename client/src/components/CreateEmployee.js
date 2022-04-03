import React, { Fragment, useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import EmployeesAPI from '../apis/EmployeesAPI';
import {GlobalContext} from '../context/GlobalState';

export const CreateEmployee = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dob, setDOB] = useState('');
    const [address, setAddress] = useState('');
    const [photo, setPhoto] = useState('');
    const {createEmployee} = useContext(GlobalContext);
    let history = useHistory();

    const onSubmit= async e =>{
        e.preventDefault();
        const employeeNew ={
            name,
            email,
            dob,
            address,
            photo
        }
        const newEmployee = await EmployeesAPI.post('/', employeeNew);
        createEmployee(newEmployee);
        history.push("/");
    }
    return (
        <Fragment>
            <div className="container Employeeedit">
                <h3>Create Employee</h3>
                <br />
                <br />
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Employee name</label>
                  <input  type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Email</label>
                  <input className="form-control" id="exampleFormControlinput1" rows="2" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Date Of Birth</label>
                  <input type="date"  className="form-control" id="dob" rows="5" value={dob} onChange={(e) => setDOB(e.target.value)}></input>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Address</label>
             
                  <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                </div>
                <div className="form-group">
                  <label htmlFor="formGroupExampleInput">Photo</label>
                  <input type="text" className="form-control" id="photo" value={photo} onChange={(e) => setPhoto(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-info">Save Employee</button>
                <Link to='/'><button type="button" className="btn">Cancel</button></Link>
              </form>
            </div>
        </Fragment>
    )
}