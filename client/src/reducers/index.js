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
			console.log(action.e)
			let matchName = state.companies.filter((v) => v.nameOfCompany.includes(action.e.target.value));
			return {
				...state,
				searchCompany: matchName
			}
		}
		default: return state
	}
}