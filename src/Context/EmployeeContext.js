import firebase from 'firebase'
import createDataContext from './createDataContext'
import { navigate } from '../navigateRef'

const employeeReducer = ( state, action ) => {
    switch(action.type) {
        case 'fetch_employee_success':
            return action.payload
        case 'add_error':
            return { ...state, errorMessage: action.payload, isLoading: false}
        case 'default':
            return { ...state }
    }
}

const createEmployee = () => (name, phone, shift) => {
    const { currentUser } = firebase.auth()
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
    .then(navigate('Employee'))
}

const editEmployee = () => (name, phone, shift, uid) => {
    const { currentUser } = firebase.auth()
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
    .set({ name, phone, shift})
    .then(navigate('Employee'))
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
    { createEmployee, editEmployee, fetchEmployees },
    { errorMessage: '', uid: '' } 
)