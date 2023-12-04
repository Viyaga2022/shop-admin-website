// get error response
const errorResponse = (error) => {
    const message = (error.response && error.response.data && error.response.data.error)
        || error.message || error.toString()
    return message
}

// set Axios Header 
const setAxiosHeader = (token) => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}


export { errorResponse, setAxiosHeader }