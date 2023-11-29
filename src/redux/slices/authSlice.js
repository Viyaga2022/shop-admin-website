import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoading:false,
    message:{}
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        reset: (state) => {
            state.isLoading = false
            state.message = {}
        },
        logout:(state) => {
            localStorage.setItem('auth', '')
            state.user = null
            state.isLoading = false
            state.message = {}
        }
    }
})