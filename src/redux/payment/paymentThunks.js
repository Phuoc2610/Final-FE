import { createAsyncThunk } from "@reduxjs/toolkit"
import http from "../../service/axios-interceptor"


export const createBill = createAsyncThunk('payment/createBill', async(data, {rejectWithValue})=>{
    try {
        const reponse = await http.post(`/payment/create-payment-intent`, data)
        return reponse
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const updateAmountPayment = createAsyncThunk('payment/updateAmountPayment', async(data, {rejectWithValue})=>{
    const {id} = data
    try {
        const reponse = await http.patch(`/payment/${id}`,data)
        return reponse
    } catch (error) {
        return rejectWithValue(error)
    }
})


export const confirmPayment = createAsyncThunk('payment/confirmPayment', async(data, {rejectWithValue})=>{
    const {orderId} = data
    try {
        const reponse = await http.post(`/payment/confirm`,data)
        return reponse
    } catch (error) {
        return rejectWithValue(error)
    }
})