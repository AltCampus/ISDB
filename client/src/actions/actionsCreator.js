const url = 'http://192.168.225.35:8001/api/v1'

export function postStartupsDetails(data) {
  console.log("check2")
  return dispatch => {
    fetch(`${url}/startups`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }).then(res => res.json())
      .then(data => console.log(data))
  }
}

export function editCompanyData(id) {
  return dispatch => {
    fetch(`${url}/startups/${id}`)
    .then(res => res.json())
    .then(data => console.log(data))
  }
}
export function getAllCompanyData() {
  return dispatch => {
    fetch(`${url}/startups`)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: 'GET_DATA_SUCCESSFULLY',
          data
        })
      })
  }
}

export function handleSearch(e) {
  return {
    type: 'COMPANY_SEARCH',
    e
  }
}

export function adminPanel(data) {
  return dispatch => {
    fetch(`${url}/startups/${data.id}/edit`,{
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data.data)
    })
    .then(res => res.json())
    .then(data => console.log(data));
  }
}

export function querySearch(query) {
  return dispatch => {
    fetch(`${url}/startups?search=${query}`)
    .then(res => res.json())
    .then(queryData => {
      return dispatch({
        type: 'SEARCH_QUERY',
        queryData
      })
    }).catch(error => alert("Data not Found"));

  }
}

export function currentCompanyDetail(nameOfCompany) {
  return {
    type: 'COMPANY_DETAILS',
    nameOfCompany
  }
}