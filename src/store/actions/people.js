import * as actionTypes from '../actionTypes';

export const peopleFetchStart = () => {
    return dispatch => {
        dispatch(peopleFetchStarting());
        setTimeout(() => {
            dispatch(peopleFetchSuccess([
                {
                    "firstName": "Stephen",
                    "lastName": "Curry",
                    "age": 30
                },
                {
                    "firstName": "Zion",
                    "lastName": "Willamson",
                    "age": 18
                },
                {
                    "firstName": "Kevin",
                    "lastName": "Durant",
                    "age": 31
                },
                {
                    "firstName": "Evan",
                    "lastName": "Feenstra",
                    "age": 30
                },
                {
                    "firstName": "Joe",
                    "lastName": "Shmoe",
                    "age": 31
                },
                {
                    "firstName": "Josh",
                    "lastName": "Aharonoff",
                    "age": 30
                }
            ]));
        }, 3000);
    }
}

export const peopleFetchStarting = () => {
    return {
        type: actionTypes.PEOPLE_FETCH_START
    }
}

export const peopleFetchSuccess = (people) => {
    return {
        people: people,
        type: actionTypes.PEOPLE_FETCH_SUCCESS,
        error: null
    }
}

export const peopleFetchFailed = (err) => {
    return {
        people: [],
        type: actionTypes.PEOPLE_FETCH_FAILED,
        error: err
    }
}

export const startPeopleSort = (header) => {
    return {
        type: actionTypes.PEOPLE_SORT,
        header: header
    }
}