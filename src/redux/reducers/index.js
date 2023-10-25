const initialState = {
    inn: [{inn: ''}],
    tonality: [{tonality: ''}],
    limit: [{limit: ''}],
    startDate: [{startDate: ''}],
    endDate: [{endDate: ''}],
    onlyWithRiskFactors: [{onlyWithRiskFactors: null}],
    excludeTechNews: [{excludeTechNews: null}],
    excludeAnnouncements: [{excludeAnnouncements: null}],
    excludeDigests: [{excludeDigests: null}],
    maxFullness: [{maxFullness: null}],
    inBusinessNews: [{inBusinessNews: null}],
    onlyMainRole: [{onlyMainRole: null}],
}


export default function formReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_INN':
            return {
              ...state,
                inn: [...state.inn, action.payload]
            }
        case 'ADD_TONALITY':
            return {
              ...state,
                tonality: [...state.tonality, action.payload]
            }
        case 'ADD_LIMIT':
            return {
              ...state,
                limit: [...state.limit, action.payload]
            }
        case 'ADD_START_DATE':
            return {
              ...state,
                startDate: [...state.startDate, action.payload]
            }
        case 'ADD_END_DATE':
            return {
              ...state,
                endDate: [...state.endDate, action.payload]
            }
        case 'ADD_ONLY_WITH_RISK_FACTORS':
            return {
                ...state,
                    onlyWithRiskFactors: [...state.onlyWithRiskFactors, action.payload]
                }
        case 'ADD_EXCLUDE_TECH_NEWS':
            return {
               ...state,
                    excludeTechNews: [...state.excludeTechNews, action.payload]
                }
        case 'ADD_EXCLUDE_ANNOUNCEMENTS':
            return {
              ...state,
                    excludeAnnouncements: [...state.excludeAnnouncements, action.payload]
                }
        case 'ADD_EXCLUDE_DIGESTS':
            return {
             ...state,
                    excludeDigests: [...state.excludeDigests, action.payload]
                }
        case 'ADD_MAX_FULLNESS':
            return {
            ...state,
                    maxFullness: [...state.maxFullness, action.payload]
                }
        case 'ADD_IN_BUSINESS_NEWS':
            return {
            ...state,
                    inBusinessNews: [...state.inBusinessNews, action.payload]
                }
        case 'ADD_ONLY_MAIN_ROLE':
            return {
                ...state,
                onlyMainRole: [...state.onlyMainRole, action.payload]
            }
        default:
            return state;
    }
}