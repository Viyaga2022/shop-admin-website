const errorResponse = (error) => {
    const message = (error.response && error.response.data && error.response.data.error)
        || error.message || error.toString()
    return message
}

export { errorResponse }