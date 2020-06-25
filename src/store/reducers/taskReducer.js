import * as actionTypes from '../actionTypes';

const defaultState = {
 tasks: [],
 loading: false,
 error: null,
 success: null,
addTaskSuccess: false
};

export default function taskReducer(state = defaultState, action){
    switch(action.type){
        case actionTypes.GET_TASKS_REQUEST: 
        return {
            ...state,
            loading: true
        };
        case actionTypes.GET_TASKS_SUCCESS: 
        return {
            ...state,
            loading: false,
            tasks: action.data
        };
        case actionTypes.GET_TASKS_FAILURE: 
        return {
            ...state,
            loading: false,
            error: action.error
        }

        case actionTypes.ADD_TASK_REQUEST: 
        return {
            ...state,
            loading: true,
            addTaskSuccess: false,
            success: null
        };
        case actionTypes.ADD_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                tasks: [...state.tasks, action.task],
                success: 'Task added successfully!',
                addTaskSuccess: true
            };

        case actionTypes.ADD_TASK_FAILURE: 
        return {
            ...state,
            loading: false,
            error: action.error
        }


        default: return state;
    }


}