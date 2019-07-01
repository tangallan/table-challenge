import _ from 'lodash';
import * as actionTypes from '../actionTypes';

const initialState = {
    people: [],
    loading: false,
    error: null,
    headers: [
        {
            name: 'First Name',
            key: 'firstName',
            isSorting: false,
            descending: false
        },
        {
            name: 'Last Name',
            key: 'lastName',
            isSorting: false,
            descending: false
        },
        {
            name: 'Age',
            key: 'age',
            isSorting: false,
            descending: false
        }
    ]    
}

const peopleStart = (state, action) => {
    return {
        ...state,
        loading: true
    }
}

const peopleSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        people : action.people
    }
}

const peopleFailed = (state, action) => {
    return {
        ...state,
        loading: false,
        people: action.people,
        error: action.error
    }
}

const peopleSort = (state, action) => {
    const peopleToSort = [...state.people];
    
    let orderByPeopleResult = _.sortBy(peopleToSort, p => p[action.header.key]);
    if(action.header.descending) {
        orderByPeopleResult = orderByPeopleResult.reverse();
    }

    let headersToUpdate = [...state.headers];
    headersToUpdate = headersToUpdate.map(m => {
        return {
            ...m,
            isSorting:  m.key === action.header.key ? action.header.isSorting : false,
            descending: action.header.descending
        }
    });

    return {
        ...state,
        people: orderByPeopleResult,
        headers: headersToUpdate
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PEOPLE_FETCH_START: return peopleStart(state, action);
        case actionTypes.PEOPLE_FETCH_SUCCESS: return peopleSuccess(state, action);
        case actionTypes.PEOPLE_FETCH_FAILED: return peopleFailed(state, action);
        case actionTypes.PEOPLE_SORT: return peopleSort(state, action);
        default:
            return state;
    }
}

export default reducer;