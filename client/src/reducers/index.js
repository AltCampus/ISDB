const initialState = {
	companies: [],
	searchCompany: []
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
			
		default: return state
	}
}