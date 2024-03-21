import { createSlice } from "@reduxjs/toolkit"
import { login } from "./authThunks"

const initialState  = {
    isLogin : false,
    loading: true,
    error: '',
    token:[]
}


const authSlice = createSlice({
    name: "auth",
    initialState ,
    reducers:{
        logOut:(state, action)=>{
            state.isLogin = false
        }
    },
    extraReducers:builder=>{
        builder.addCase(login.pending,(state, action)=>{
            state.error=''
            state.loading = false
        })
        builder.addCase(login.fulfilled,(state, action)=>{
            state.isLogin= true
            console.log(action.payload)
            state.loading = true
        })
        builder.addCase(login.rejected,(state, action)=>{
            state.error=''
            state.loading = true
        })
    }
})

export const {logOut} = authSlice.actions;
export default authSlice.reducer