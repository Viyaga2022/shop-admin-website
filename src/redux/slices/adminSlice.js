import { createSlice } from "@reduxjs/toolkit";
import { registerAdmin } from "../services/adminservices";
import toast from "react-hot-toast";

const initialState = {
    admin: null,
    adminToken: null,
    isLoading: false,
    message: {}
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.message = {}
        },
        logout: (state) => {
            localStorage.setItem('adminAuth', '')
            state.admin = null
            state.isLoading = false
            state.message = {}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerAdmin.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerAdmin.fulfilled, (state, action) => {
                state.isLoading = false
                toast.success(action.payload.success)
                document.getElementById("sign-up-form").reset();
                document.querySelector(".container")?.classList.remove("sign-up-mode")
            })
            .addCase(registerAdmin.rejected, (state, action) => {
                state.isLoading = false
                toast.error(action.payload)
            })
    }
})

export { registerAdmin }
export const { reset, logout } = adminSlice.actions
export default adminSlice.reducer