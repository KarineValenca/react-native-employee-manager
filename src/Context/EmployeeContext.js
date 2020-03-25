import firebase from 'firebase'
import createDataContext from './createDataContext'
import { navigate } from '../navigateRef'

const employeeReducer = ( state, action ) => {
    switch(action.type) {
        case 'add_employee':
            return { ...state }
        case 'fetch_employee_success':
            return action.payload
        case 'add_error':
            return { ...state, errorMessage: action.payload, isLoading: false}
        case 'default':
            return { ...state }
    }
}

const createEmployee = (dispatch) => (name, phone, shift) => {
    const { currentUser } = firebase.auth()
    firebase.database().ref(`/users/${currentUser.uid}/employees`).push({ name, phone, shift })
    dispatch({ type: 'add_employee' })
    navigate('Employee')
}

const fetchEmployees = (dispatch) => () => {
    const { currentUser } = firebase.auth()
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshot => {
            dispatch({ type: 'fetch_employee_success', payload: snapshot.val()})
        })
}

export const {Provider, Context } = createDataContext(
    employeeReducer,
    { createEmployee, fetchEmployees },
    { errorMessage: '' } 
)