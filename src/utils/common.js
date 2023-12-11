"use client"

import axios from "axios";

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

const getAuthToken = () => {
    const token = JSON.parse(localStorage.getItem('auth')) || null
    return token
}

const instanceOne = (token) => {
    const instance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_SERVER_ONE,
        headers: {
            'Authorization': token
        },
    })

    return instance
}


export { errorResponse, setAxiosHeader, getAuthToken, instanceOne }