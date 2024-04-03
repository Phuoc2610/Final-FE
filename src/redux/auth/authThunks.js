import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../service/axios-interceptor";


export const login = createAsyncThunk('auth/login', async(data, thunkApi)=>{
    try {
        const reponse = await http.post('auth/login', data)
        return reponse
    } catch (error) {
        if(error.statusCode ===403){
        }
        return thunkApi.rejectWithValue(error)
    }
})

export const registerAction = createAsyncThunk('auth/register', async(data, thunkApi)=>{
    console.log(data)
    try {
        const reponse = await http.post('auth/register', data)
        return reponse
    } catch (error) {
        if(error.statusCode ===403){
        }
        return thunkApi.rejectWithValue(error)
    }
})
