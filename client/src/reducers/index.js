const initialState = {
	companies: [],
	searchCompany: [],
	currentCompany: {}
}

export default function rootReducer(state = initialState, action){
	switch(action.type) {
		case "GET_DATA_SUCCESSFULLY": {
			return {
			companies: action.data
			}
		}

		case "COMPANY_SEARCH": {
			let convertCase = action.e.target.value.toLowerCase();
			let matchName = state.companies.filter((v) => v.nameOfCompany.toLowerCase().includes(convertCase));
			return {
				...state,
				searchCompany: matchName
			}
		}
		case "SEARCH_QUERY": {
			return {
				...state, 
				searchCompany: [action.queryData] || [...state.companies]
			}
		}
		case 'COMPANY_DETAILS': {
			const target = state.companies.filter(company => company.nameOfCompany === action.nameOfCompany)
			  return {
				  ...state,
				  currentCompany: target[0]
			  }
			  
		}	
		default: return state
	}
}