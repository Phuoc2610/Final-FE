import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../service/axios-interceptor";


export const getCategory = createAsyncThunk('category/getCategory', async(_, thunkApi)=>{
    try {
        const reponse = await http.get('category')
        return reponse
    } catch (error) {
        if(error.statusCode ===403){
        }
        return thunkApi.rejectWithValue(error)
    }
})

export const createCategory = createAsyncThunk('category/createCategory', async(data, thunkApi)=>{
    try {
        const reponse = await http.post('category', data)
        return reponse
    } catch (error) {
        if(error.statusCode ===403){
        }
        return thunkApi.rejectWithValue(error)
    }
})
