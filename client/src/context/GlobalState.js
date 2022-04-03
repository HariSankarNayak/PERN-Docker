import React, { createContext, useState, useReducer } from 'react';
import Reducer from './Reducer'

const initialState = {
    employee: [
        {
            "id": "40a780fd-a7cd-4e01-953f-0654d5dc97a5",
            "name": "Johaasn",
            "age": 25,
            "email": "zzz@sdfs.dsf",
            "dob": "2012-12-12T00:00:00.000Z",
            "address": "sdfsdf",
            "photo": "sdfsdf"
        },
        {
            "id": "b8ef844c-b472-4d41-83bf-e164aca6d5ec",
            "name": "Johsssaasn",
            "age": 25,
            "email": "zzz@sdfsss.dsf",
            "dob": "2012-12-12T00:00:00.000Z",
            "address": "sdfsdf",
            "photo": "sdfsdf"
        }
    ]
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state,dispatch] = useReducer(Reducer,initialState);
    const [employees, setEmployees] = useState([]);
    // const [employees, setEmployees] = useState([]);


    function createEmployee(employee){
        dispatch({
            type: 'CREATE_EMPLOYEE',
            payload: employee
        })
    }

    function deleteEmployee(id) {
        dispatch({
            type: 'DELETE_EMPLOYEE',
            payload: id
        });
    };
 

    function editEmployee(employee){
        dispatch({
            type: 'EDIT_EMPLOYEE',
            payload: employee
        })
    }

    return (<GlobalContext.Provider value={{
        employee: state.employee,
        employees,
        setEmployees,
        createEmployee,
        editEmployee,
        deleteEmployee
    }}>
        {children}
    </GlobalContext.Provider>);
}