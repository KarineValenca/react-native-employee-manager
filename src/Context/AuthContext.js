import createDataContext from './createDataContext'

const authReducer = (state, action ) => {
    switch(action.type) {
        case 'default':
            return state
    }
}

//TODO: improve this method to use a signup method


export const {Provider, Context } = createDataContext(
    authReducer,
    {  },
    { errorMessage: '' } 
)