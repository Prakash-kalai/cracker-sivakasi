import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
    data:[],
    loading:false,
    error:null
}

export const orderGetData=createAsyncThunk(
    "orders/orderGetData",
    async(_,thunkApi)=>{
        try{
            const response=await axios.get("http://localhost:5000/api/orders");
            return response.data;
        }catch(err){
            console.log(err);
            
        }
    }
)

const ordrsSlice=createSlice({
    name:"orders",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(orderGetData.fulfilled,(state,action)=>{
                state.data=action.payload;
                state.loading=false
            })
    }
})

export default ordrsSlice.reducer