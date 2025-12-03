import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: null
};

// Thunk to fetch crackers
export const getData = createAsyncThunk(
  "cracker/getData",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:5000/api/crackers");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Error fetching data");
    }
  }
);

export const postData=createAsyncThunk(
  "cracker/postData",
  async(data,thunkAPI)=>{
   try {
      const response = await axios.post("http://localhost:5000/api/crackers",data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Error fetching data");
    }
  }
)

const crackerApiSlice = createSlice({
  name: "cracker",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getData.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(postData.fulfilled,(state,action)=>{
        state.data=action.payload;
        state.loading=false;
      })
      .addCase(postData.pending,(state,action)=>{
        state.loading=true;
      })
      .addCase(postData.rejected,(state,action)=>{
        state.error="the erro message"
        state.loading=true;
      })
      
  }
});

export default crackerApiSlice.reducer;
    