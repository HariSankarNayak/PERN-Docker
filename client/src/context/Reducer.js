/* eslint-disable import/no-anonymous-default-export */
export default (state,action) => {
    switch(action.type){
        case 'CREATE_EMPLOYEE':
            return{
                ...state,
                employee: [...state.employee, action.payload]
            };
        
        case 'EDIT_EMPLOYEE':
            const editingEmployee = action.payload;
            const updatedEmployee = state.employee.map(employee=>{
                if(employee.id === editingEmployee.id){
                    return editingEmployee;
                }
                return employee;
            });
            return{
                ...state,
                employee: updatedEmployee
            }

            case 'DELETE_EMPLOYEE':
                return { 
                    ...state,
                    employee: state.employee.filter(employee => employee.id !== action.payload)
                };

            default: return state;
    }
} 