import firebase from 'firebase'
import createDataContext from './createDataContext'
import { navigate } from '../navigateRef'

const employeeReducer = ( state, action ) => {
    switch(action.type) {
        case 'add_employee':
            return { ...state }
        case 'add_error':
            return { ...state, errorMessage: action.payload, isLoading: false}

        case 'default':
            return { ...state }
    }
}

const addEmployee = dispatch => (name, phone) => {
    dispatch({ type: 'add_employee'})
}

export const {Provider, Context } = createDataContext(
    employeeReducer,
    { addEmployee },
    { errorMessage: '' } 
)