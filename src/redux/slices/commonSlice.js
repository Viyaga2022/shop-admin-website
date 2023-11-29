import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMenuOpen: false,
}

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        toggleMenuOpen: (state, action) => {
            state.isMenuOpen = action.payload
        }
    }
})

export const { toggleMenuOpen } = commonSlice.actions
export default commonSlice.reducer