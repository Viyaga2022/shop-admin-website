import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { errorResponse, setAxiosHeader } from "./commonServices";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_ONE + "/admin"

const registerAdmin = createAsyncThunk(
    'admin/register',
    async (adminData, { rejectWithValue }) => {
        try {
            const res = await axios.post(`${baseUrl}/register`, adminData)
            return res.data
        } catch (error) {
            return rejectWithValue(errorResponse(error))
        }
    }
)

const loginAdmin = createAsyncThunk(
    'admin/login',
    async (adminData, { rejectWithValue }) => {
        try {
            const res = await axios.post(`${baseUrl}/login`, adminData)
            return res.data
        } catch (error) {
            return rejectWithValue(errorResponse(error))
        }
    }
)

const getAdmin = createAsyncThunk(
    'admin/account',
    async (token, { rejectWithValue }) => {

        setAxiosHeader(token)

        try {
            const res = await axios.post(`${baseUrl}/getAdmin`)
            return res.data
        } catch (error) {
            return rejectWithValue(errorResponse(error))
        }
    }
)

export { registerAdmin, loginAdmin, getAdmin }