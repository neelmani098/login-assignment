import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    token:""
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state)=>{
            state.isAuthenticated = true;
            state.token = "ThisIsASampleToken";
        },
        logout: (state) =>{
            state.isAuthenticated = false
            state.token = ""
        }

    }

})

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;