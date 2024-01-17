import * as actions from '../action/actionType'

export function reducer(state = {}, action){
    if(action.type === actions.SIGN_UP){
        return {
            message: 'Registration successful'
            }
        
    }else if(action.type === actions.SIGN_IN){
        return{
            message: 'Login successful'
        }
    }else if(action.type === actions.SIGN_OUT){
        return {
            message: 'Logout successful'
        }
    }else{
        return state;
    }
}