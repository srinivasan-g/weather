// import { Action } from '@ngrx/store';

// TO BE IMPLEMENTED IF YOU DECIDE TO USE NG-RX
export interface Action {
    type: string;
    payload?: any;
}
export const ADD_QUERY = 'ADD_QUERY';


export function addQueryReducer(state = [], action: Action) {
    switch (action.type) {
    case ADD_QUERY:
        return [...state, action.payload];
    default:
        return state;
        }
}
