import { LOGIN_START, LOGIN_FAILURE, LOGIN_SUCCESS } from '../actions';

const initialState = {
    deletingFriend: false,
    fetchingFriends: false,
    friends: [],
    loggingIn: false,
    savingFriends: false,
    updatingFriend: false,
    error: null,
};



function reducer(state = initialState, action){
    switch(action.type){
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
                error: '',
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                logginIn: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;