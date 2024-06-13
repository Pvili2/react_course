import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "authication",
    initialState: { isAuthicated: true },
    reducers: {
        login(state) {
            state.isAuthicated = true
        },
        logout(state) {
            state.isAuthicated = false
        }
    }
})
export const authActions = authSlice.actions;

export default authSlice.reducer;