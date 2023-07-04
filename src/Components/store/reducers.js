import { ACTIONS } from "./StoreActions";

export const InitialState = {
    token: '',
    expireDate: '',
    userInfo: {
        companyLimit: '',
        usedCompanyCount: ''
    },

    searchFormData: {
        issueDateInterval: {
            startDate: '',
            endDate: ''
        },
        searchContext: {
            targetSearchEntitiesContext: {
                targetSearchEntities: [
                    {
                        type: 'company',
                        sparkId: null,
                        entityId: null,
                        inn: null,
                        maxFullness: true,
                        inBusinessNews: null
                    }
                ],
                onlyMainRole: true,
                tonality: '',
                onlyWithRisk: true,
                riskFactors: {
                    and: [],
                    or: [],
                    not: []
                },
                themes: {
                    and: [],
                    or: [],
                    not: []
                }
            },
            themesFilters: {
                    and: [],
                    or: [],
                    not: []
                }
        },
        searchArea: {
            includedSources: [],
            excludedSources: [],
            includedSourceGroups: [],
            excludedSourceGroups: []
        },
        attributeFilters: {
            excludeTechNews: true,
            excludeAnnouncements: true,
            excludeDigests: true
        },
        similarMode: 'duplicates',
        limit: 100,
        sortType: 'sourceInfluence',
        sortDirectionType: 'desc',
        intervalType: 'month',
        histogramTypes: [
            'totalDocuments',
            'riskFactors'
        ]
    },
    responseFromHistograms: null,
    idsFromObjectsearch: null,
    posts: []
}

export const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TOKEN:
            return {...state, token: action.token};

        case ACTIONS.ADD_EXPIRE_DATE:
            return {...state, expireDate: action.date};

        case ACTIONS.REMOVE_EXPIRE_DATE:
            return {...state, expireDate: ''};
        
        case ACTIONS.USER_INFO:
            return {...state, userInfo: {
                companyLimit: action.data.companyLimit,
                usedLimit: action.data.usedLimit
            }}

        case ACTIONS.REMOVE_TOKEN:
            return {...state, token: ''}

        case ACTIONS.ADD_START_DATE:
            return {...state, searchFormData: {
                ...state.searchFormData,
                issueDateInterval: {...state.searchFormData.issueDateInterval,
                startDate: action.date}
            }}

        case ACTIONS.REMOVE_START_DATE:
            return {...state, searchFormData: {
                ...state.searchFormData,
                issueDateInterval: {...state.searchFormData.issueDateInterval,
                    startDate: ''
                }
            }}

        case ACTIONS.ADD_END_DATE:
            return {...state, searchFormData: {
                    ...state.searchFormData,
                    issueDateInterval: {...state.searchFormData.issueDateInterval,
                    endDate: action.date}
                }
            }

        case ACTIONS.REMOVE_END_DATE:
            return {...state, searchFormData: {
                ...state.searchFormData,
                issueDateInterval: {...state.searchFormData.issueDateInterval,
                    endtDate: ''
                }
            }}

        case ACTIONS.ADD_INN:
            return {...state, searchFormData: {...state.searchFormData,
                searchContext: {
                    ...state.searchFormData.searchContext,
                    targetSearchEntitiesContext: {
                        ...state.searchFormData.searchContext.targetSearchEntitiesContext,
                        targetSearchEntities: [
                            {
                                ...state.searchFormData.searchContext.targetSearchEntitiesContext.targetSearchEntities[0],
                                inn: action.inn
                            }
                        ]
                    }
                }
            }}

        case ACTIONS.TOGGLE_MAX_FULLNESS:
            return {...state, searchFormData:{
                ...state.searchFormData,
                searchContext: {
                    ...state.searchFormData.searchContext,
                    targetSearchEntitiesContext: {
                        ...state.searchFormData.searchContext.targetSearchEntitiesContext,
                        targetSearchEntities: [
                            {
                                ...state.searchFormData.searchContext.targetSearchEntitiesContext.targetSearchEntities[0],
                                maxFullness: action.boolean
                            }
                        ]
                    }
                }
            }}

        case ACTIONS.TOGGLE_IN_BUSINESS_NEWS:
            return {...state, searchFormData: {
                ...state.searchFormData,
                searchContext: {
                    ...state.searchFormData.searchContext,
                    targetSearchEntitiesContext: {
                        ...state.searchFormData.searchContext.targetSearchEntitiesContext, targetSearchEntities: [
                            {
                                ...state.searchFormData.searchContext.targetSearchEntitiesContext.targetSearchEntities[0],
                                inBusinessNews: action.boolean
                            }
                        ]
                    }
                }
            }}

        case ACTIONS.TOGGLE_ONLY_MAIN_ROLE:
            return {...state, searchFormData: {
                ...state.searchFormData,
                searchContext: {
                    ...state.searchFormData.searchContext,
                    targetSearchEntitiesContext: {
                        ...state.searchFormData.searchContext.targetSearchEntitiesContext, targetSearchEntities: [
                            {
                                ...state.searchFormData.searchContext.targetSearchEntitiesContext.targetSearchEntities[0],
                                onlyMainRole: action.boolean
                            }
                        ]
                    }
                }
            }}

        case ACTIONS.TOGGLE_ONLY_WITH_RISK_FACTORS:
            return {...state, searchFormData: {
                ...state.searchFormData,
                searchContext: {
                    ...state.searchFormData.searchContext,
                    targetSearchEntitiesContext: {
                        ...state.searchFormData.searchContext.targetSearchEntitiesContext, targetSearchEntities: [
                            {
                                ...state.searchFormData.searchContext.targetSearchEntitiesContext.targetSearchEntities[0],
                                onlyWithRisk: action.boolean
                            }
                        ]
                    }
                }
            }}

        case ACTIONS.ADD_TONALITY:
            return {...state, searchFormData: {
                ...state.searchFormData, searchContext: {
                    ...state.searchFormData.searchContext, 
                    targetSearchEntitiesContext: {
                        ...state.searchFormData.searchContext.targetSearchEntitiesContext,
                        tonality: action.tonality
                    }
                }
            }}

        case ACTIONS.ADD_LIMIT:
            return {...state, searchFormData: {...state.searchFormData,
                limit: action.num
            }}

        case ACTIONS.ADD_RESPONSE_FROM_HISTOGRAMS:
            return {...state, responseFromHistograms: action.data}

        case ACTIONS.ADD_IDS_FROM_OBJECTSEARCH:
            return {...state, idsFromObjectsearch: action.data}

        default: {
            return state;
        }
    }
}