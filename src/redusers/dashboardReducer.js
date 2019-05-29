export const dashboard = (state = {}, action) => {
    switch (action.type) {
        case 'FETCHING_DASHBOARD_SUCCESS':
            return {...state, ...action.payload};
        default:
            return state;
    }
};

export const dashboard2 = (state = {}, action) => {
    switch (action.type) {
        case 'FETCHING_DASHBOARD2_SUCCESS':
            return {...state, ...action.payload};
        default:
            return state;
    }
};

export const dashboard3 = (state = {}, action) =>{
    switch (action.type) {
        case 'FETCHING_DASHBOARD3_SUCCESS':
            return {...state, ...action.payload};
        default:
            return state;
    }
};