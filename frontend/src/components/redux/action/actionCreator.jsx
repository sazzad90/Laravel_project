import * as actions from './actionType'

export function signup(){
    return {
        type: actions.SIGN_UP,
    }
}
export function signin(){
    return {
        type: actions.SIGN_IN,
      }
}
export function signout(){
    return {
        type: actions.SIGN_OUT, 
     }
}