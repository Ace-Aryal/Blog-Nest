import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // tracks changes affter backend call
        login: (state, action) => {
            state.status = true,
                state.userData = action.payload.userData
        },

        logout: (state, action) => {
            state.status = false,
                userData = null
        }



    }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer