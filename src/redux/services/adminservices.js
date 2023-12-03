import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { errorResponse } from "./commonServices";

const baseUrl = process.env.NEXT_PUBLIC_SERVER_ONE + "/admin"

const registerAdmin = createAsyncThunk(
    'auth/register',
    async (adminData, { rejectWithValue }) => {
        try {
            const res = await axios.post(`${baseUrl}/register`, adminData)
            return res.data
        } catch (error) {
            return rejectWithValue(errorResponse(error))
        }
    }
)

export { registerAdmin }