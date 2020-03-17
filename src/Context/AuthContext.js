import firebase from 'firebase'
import createDataContext from './createDataContext'

const authReducer = ( state, action ) => {
    switch(action.type) {
        case 'signin':
            return { errorMessage: '', isLoading: true }
        case 'add_error':
            return { ...state, errorMessage: action.payload, isLoading: false}
        case 'clear_loading':
            return { ...state, isLoading: false}
    }
}

//TODO: improve this method to use a signup method
const signin = (dispatch) => (email, password) => {
    console.log("sign called")
    try{
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log("login completed, clear loading please")
                dispatch({ type: 'clear_loading' })
            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    console.log("signup completed, clear loading please")
                    dispatch({ type: 'clear_loading' })
                })
                .catch(() => {
                    dispatch({ type: 'add_error', payload: "Authentication failed" })
                })
            })
        dispatch({ type: 'signin'})
    } catch (err) {
        dispatch({ type: 'add_error', payload: "Authentication error" })
    }
}


export const {Provider, Context } = createDataContext(
    authReducer,
    { signin },
    { isLoading: false, errorMessage: '' } 
)