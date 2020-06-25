const initalState = {
    categoryList: [],
    responsibleList: [],
    publishedData: {},
    titleData: []
};

export function handleEventReducer(state = initalState, actions) {
    switch (actions.type) {
        case "LOAD_RESPONSIBLE": {
            const stateObj = {
                responsibleList: actions.data
            }
            return Object.assign({}, state, stateObj);
        }
        case "LOAD_CATEGORY": {
            const stateObj = {
                categoryList: actions.data
            }
            return Object.assign({}, state, stateObj);
        }
        case "LOAD_TITLES": {
            return Object.assign({}, state, { titleData: actions.data });
        }
        case 'PUBLISHED_EVENT': {
            return Object.assign({}, state, { publishedData: actions.data });
        }
        default:
            return state
    }

}