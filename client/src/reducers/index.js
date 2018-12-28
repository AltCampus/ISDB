const initialState = {
	companies: []
}

export default function rootReducer(state = initialState, action){
	switch(action.type) {
		case "GET_DATA_SUCCESSFULLY": {
			return {
			companies: action.data
			}
		}
			
		default: return state
	}
}