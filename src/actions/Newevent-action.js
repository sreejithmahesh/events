export const receivedResponsibleList = (data) => {
    return {
        type: 'LOAD_RESPONSIBLE',
        data
    }
}

export const getResponsibleList = () => {
    return (dispatch) => {
        return fetch('http://www.mocky.io/v2/5bcdd7992f00006300c855d5')
            .then(response => response.json())
            .then(data => dispatch(receivedResponsibleList(data)));
    }
}

export const receivedCategorylist = (data) => {
    return {
        type: 'LOAD_CATEGORY',
        data
    }
}

export const getCategoryList = () => {
    return (dispatch) => {
        return fetch('http://www.mocky.io/v2/5bcdd3942f00002c00c855ba')
            .then(response => response.json())
            .then(data => dispatch(receivedCategorylist(data)));
    }
}

export const getTitleList = () => {
    return (dispatch) => {
        return fetch('http://www.mocky.io/v2/5bcdd8732f00007300c855da')
            .then(response => response.json())
            .then(data => dispatch(receivedTitlelist(data)));
    }
}

export const receivedTitlelist = (data) => {
    return {
        type: 'LOAD_TITLES',
        data
    }
}

export const publishAction = (data) => {
    return {
        type: 'PUBLISHED_EVENT',
        data
    }
}