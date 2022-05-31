import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../reducers/AuthReducer";
import userReducer from "../reducers/UserReducer";

export const store = configureStore({
    reducer:{
        auth: authReducer,
        user: userReducer
    },
})

export default store;