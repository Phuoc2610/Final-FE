import { createSlice } from "@reduxjs/toolkit"
import { getMyProfile, updateProfile } from "./profileThunks"


const initialState  = {
    isLogin : false,
    loading: true,
    error: '',
    data:[]
}


const profileSlice = createSlice({
    name: "profile",
    initialState ,
    reducers:{
        logOut:(state, action)=>{
            state.isLogin = false
        }
    },
    extraReducers:builder=>{
        builder.addCase(getMyProfile.pending,(state, action)=>{
            state.error=''
            state.loading = false
        })
        builder.addCase(getMyProfile.fulfilled,(state, action)=>{
            state.data = action.payload
            state.loading = true
        })
        builder.addCase(getMyProfile.rejected,(state, action)=>{
            state.error=''
            state.loading = true
        })

        builder.addCase(updateProfile.pending,(state, action)=>{
            state.error=''
            state.loading = false
        })
        builder.addCase(updateProfile.fulfilled,(state, action)=>{
            state.data = action.payload
            state.loading = true
        })
        builder.addCase(updateProfile.rejected,(state, action)=>{
            state.error=''
            state.loading = true
        })

    }
})

export default profileSlice.reducer