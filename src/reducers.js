import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants'
const initialStateSearch = {
    searchField:'',
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error:''
}

export const searchRobots = (state= initialStateSearch, action={}) => {
    switch(action.type){

        case CHANGE_SEARCHFIELD:
            return state = {...state, searchField: action.payload }

        default:
            return state
    }
}

export const requestRobots = (state = initialStateRobots, action={}) => {
    switch(action.type){

        case REQUEST_ROBOTS_PENDING:
            return state = {...state, isPending: true}
        
        case REQUEST_ROBOTS_SUCCESS:
            return state = {...state, robots: action.payload, isPending: false}
        
        case REQUEST_ROBOTS_FAILED:
                return state = {...state, errors: action.payload, isPending: false}

        default:
            return state
    }
}