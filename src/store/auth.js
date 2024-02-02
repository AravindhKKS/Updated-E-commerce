import { createSlice } from "@reduxjs/toolkit"


const authSlice = createSlice({
    name:'auth',
    initialState:{isLogged:false},
    reducers:{
        logIn(state){
            state.isLogged = true
        },
       logOut(state){
        state.isLogged = false
       }
    }
})

export const authActions = authSlice.actions

export default authSlice;