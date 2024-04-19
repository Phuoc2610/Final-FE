import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../service/axios-interceptor";
import { openMessage } from "../modal/modalSlice";


export const getMyProfile = createAsyncThunk('profile/getMyProfile', async (_, thunkApi) => {
    try {
        const reponse = await http.get('profile')
        return reponse
    } catch (error) {
        if (error.statusCode === 403) {
            thunkApi.dispatch(openMessage({ message: "Get Data Failed", notificationType: 'error' }))
        }
        return thunkApi.rejectWithValue(error)
    }
})

export const updateProfile = createAsyncThunk('profile/updateProfile', async (data, thunkApi) => {
    const{id, ...profile} = data
    try {
        const reponse = await http.patch(`profile/${id}`, profile)
        thunkApi.dispatch(openMessage({ message: "Update Success", notificationType: 'success' }))
        return reponse
    } catch (error) {
        if (error.statusCode === 403) {
            thunkApi.dispatch(openMessage({ message: "Update Failed", notificationType: 'error' }))
        }
        return thunkApi.rejectWithValue(error)
    }
})


