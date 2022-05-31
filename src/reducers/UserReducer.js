import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Test User",
    email:"testuser@test.com",
    password: "test123",
    address:{
        line1: "Test domain",
        line2:"",
        locality:"Tester",
        city:"Testest",
        zip:"12345"

    }
}


const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        saveUser:(state, action)=>{
            state = action.payload;
        }

    }
})

export const{saveUser} = userSlice.actions;
export default userSlice.reducer;