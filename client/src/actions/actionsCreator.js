const url = 'http://192.168.43.220:8001/api/v1'

export function postStartupsDetails(data) {
    console.log("check2")
    return dispatch => {
        fetch(`${url}/startups`, {
            method : "POST", 
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
          }).then(res => res.json())
          .then(data => console.log(data))
    }
}

export function getAllCompanyData() {
    return dispatch => {
        fetch(`${url}/startups`)
        .then(res => res.json())
        .then(data => {
            dispatch({type: 'GET_DATA_SUCCESSFULLY', data})
        })
    }
}