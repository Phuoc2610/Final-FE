import { createSlice } from "@reduxjs/toolkit"
import { createCategory, getCategory, updateCategory } from "./categoryThunks"

const initialState  = {
    isLogin : false,
    loading: true,
    error: '',
    data:[]
}


const categorySlice = createSlice({
    name: "category",
    initialState ,
    reducers:{
        logOut:(state, action)=>{
            state.isLogin = false
        }
    },
    extraReducers:builder=>{
        builder.addCase(getCategory.pending,(state, action)=>{
            state.error=''
            state.loading = false
        })
        builder.addCase(getCategory.fulfilled,(state, action)=>{
            state.data = action.payload
            state.loading = true
        })
        builder.addCase(getCategory.rejected,(state, action)=>{
            state.error=''
            state.loading = true
        })
        builder.addCase(createCategory.pending,(state, action)=>{
            state.error=''
            state.loading = false
        })
        builder.addCase(createCategory.fulfilled,(state, action)=>{
            const newCategory = [...state.data, action.payload]
            state.data = newCategory
            state.loading = true
        })
        builder.addCase(createCategory.rejected,(state, action)=>{
            state.error=''
            state.loading = true
        })
        builder.addCase(updateCategory.pending,(state, action)=>{
            state.error=''
            state.loading = false
        })
        builder.addCase(updateCategory.fulfilled,(state, action)=>{
            const newCategory = state.data.filter((item) => item.id !== action.payload.id)
            state.data = [...newCategory, action.payload]
            state.loading = true
        })
        builder.addCase(updateCategory.rejected,(state, action)=>{
            state.error=''
            state.loading = true
        })
    }
})

export default categorySlice.reducer