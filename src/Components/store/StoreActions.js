export const ACTIONS = {
    ADD_TOKEN: 'ADD_TOKEN',
    REMOVE_TOKEN: 'REMOVE_TOKEN',
    ADD_EXPIRE_DATE: 'ADD_EXPIRE_DATE',
    REMOVE_EXPIRE_DATE: 'REMOVE_EXPIRE_DATE',
    USER_INFO: 'USER_INFO',
    ADD_INN: 'ADD_INN',
    ADD_TONALITY: 'ADD_TONALITY',
    ADD_START_DATE: 'ADD_START_DATE',
    REMOVE_START_DATE: 'REMOVE_START_DATE',
    ADD_END_DATE: 'ADD_END_DATE',
    REMOVE_END_DATE: 'REMOVE_END_DATE',
    TOGGLE_MAX_FULLNESS: 'TOGGLE_MAX_FULLNESS',
    TOGGLE_IN_BUSINESS_NEWS: 'TOGGLE_IN_BUSINESS_NEWS',
    TOGGLE_ONLY_MAIN_ROLE: 'TOGGLE_ONLY_MAIN_ROLE',
    TOGGLE_ONLY_WITH_RISK_FACTORS: 'TOGGLE_ONLY_WITH_RISK_FACTORS',
    ADD_LIMIT: 'ADD_LIMIT',
    ADD_RESPONSE_FROM_HISTOGRAMS: 'ADD_RESPONSE_FROM_HISTOGRAMS',
    ADD_IDS_FROM_OBJECTSEARCH: 'ADD_IDS_FROM_OBJECTSEARCH'
}

export const addToken = (token) => {
    return {
        type: ACTIONS.ADD_TOKEN,
        token
    }
}

export const removeToken = () => {
    return {
        type: ACTIONS.REMOVE_TOKEN
    }
}

export const addExpireDate = (date) => {
    return {
        type: ACTIONS.ADD_START_DATE,
        date
    }
}

export const removeExpireDate = () => {
    return {
        type: ACTIONS.REMOVE_EXPIRE_DATE
    }
}

export const userInfo = (data) => {
    return {
        type: ACTIONS.USER_INFO,
        data
    }
}

export const addINN = (inn) => {
    return {
        type: ACTIONS.ADD_INN,
        inn
    }
}

export const addTonality = (tonality) => {
    return {
        type: ACTIONS.ADD_TONALITY,
        tonality
    }
}

export const addStartDate = (date) => {
    return {
        type: ACTIONS.ADD_START_DATE,
        date
    }
}

export const removeStartDate = () => {
    return {
        type: ACTIONS.REMOVE_START_DATE
    }
}

export const addEndDate = (date) => {
    return {
        type: ACTIONS.ADD_END_DATE,
        date
    }
}

export const removeEndDate = () => {
    return {
        type: ACTIONS.REMOVE_END_DATE,
    }
}

export const toggleMaxFullness = (boolean) => {
    return {
        type: ACTIONS.TOGGLE_MAX_FULLNESS,
        boolean
    }
}

export const toggleInBusinessNews = (boolean) => {
    return {
        type: ACTIONS.TOGGLE_IN_BUSINESS_NEWS,
        boolean
    }
}

export const toggleOnlyMainRole = (boolean) => {
    return {
        type: ACTIONS.TOGGLE_ONLY_MAIN_ROLE,
        boolean
    }
}

export const toggleOnlyWithRisk = (boolean) => {
    return {
        type: ACTIONS.TOGGLE_ONLY_WITH_RISK_FACTORS,
        boolean
    }
}

export const addLimit = (num) => {
    return {
        type: ACTIONS.ADD_LIMIT,
        num
    }
}

export const addResponseFromHistograms = (data) => {
    return {
        type: ACTIONS.ADD_RESPONSE_FROM_HISTOGRAMS,
        data
    }
}

export const addIdsFromObjectsearch = (data) => {
    return {
        type: ACTIONS.ADD_IDS_FROM_OBJECTSEARCH,
        data
    }
}