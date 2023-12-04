import { createSlice } from "@reduxjs/toolkit";
import { registerAdmin, loginAdmin, getAdmin } from "../services/adminservices";
import toast from "react-hot-toast";

const initialState = {
    admin: null,
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

            // Register Admin ===============
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

            // Login Admin ====================
            .addCase(loginAdmin.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginAdmin.fulfilled, (state, action) => {
                state.isLoading = false
                state.admin = action.payload?.admin
                toast.success(action.payload?.success)
                localStorage.setItem('adminAuth', action.payload?.token)
            })
            .addCase(loginAdmin.rejected, (state, action) => {
                state.isLoading = false
                toast.error(action.payload)
            })

             // Login Admin ====================
             .addCase(getAdmin.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAdmin.fulfilled, (state, action) => {
                state.isLoading = false
                state.admin = action.payload?.admin
            })
            .addCase(getAdmin.rejected, (state, action) => {
                state.isLoading = false
                toast.error(action.payload)
            })
    }
})

export { registerAdmin, loginAdmin }
export const { reset, logout } = adminSlice.actions
export default adminSlice.reducer