import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage, setSessionStorage } from "../components/context/utilities";

const initialState = {
    user: {},
};

const registerSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {

    },

    extraReducers: ( builder ) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            if( action.payload.status ) {
                window.sessionStorage.setItem('email', action.payload.data.email)
                alert('Registration Successful.');
                window.location.href = '/login'
            }else{
                alert(action.payload.message)
            }
        })

        builder.addCase(loginUser.fulfilled, (state, action) => {
            if( action.payload.status ) {
                let storage = getLocalStorage(['remember_me']);
                const registeredUser = JSON.stringify(action.payload.data);
                if (storage.remember_me) {
                    localStorage.removeItem('remember_me')
                    setLocalStorage({user: registeredUser})
                } else {
                    setSessionStorage({user: registeredUser})
                }
                window.location.href = '/dashboard'
            }else{
                alert(action.payload.message)
            }
        })
    }
});

export default registerSlice.reducer;

// Thunks

export const registerUser = createAsyncThunk( 'register' , async (payload) => {
    const res = await fetch(process.env.REACT_APP_API_URL + "/api/register",
   {
     headers: {
      "Content-Type": "application/json",
    },
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    body: payload, // body data type must match "Content-Type" header
   });
    const data = await res.json();
    return data;
})


export const loginUser = createAsyncThunk( 'login' , async (payload) => {
    const res = await fetch(process.env.REACT_APP_API_URL + "/api/register/login",
   {
     headers: {
      "Content-Type": "application/json",
    },
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    body: payload, // body data type must match "Content-Type" header
   });
    const data = await res.json();
    return data;
})
