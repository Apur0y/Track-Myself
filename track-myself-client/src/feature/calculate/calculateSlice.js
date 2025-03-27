import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// ✅ Correct Thunk Name (Renamed from "kills" to "fetchSkills")
export const fetchSkills = createAsyncThunk("calculate/skills", async () => {
  const response = await axios.get("http://localhost:5000/skills");
  return response.data;
});

export const calculateSlice = createSlice({
  name: 'calculate',
  initialState: {
    value: 0,
    eliteITTechnologies: [],  // ✅ Moved inside initialState
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addSkills: (state) => {
      state.eliteITTechnologies.push("redux");
      state.value += 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkills.pending, (state) => {  // ✅ Corrected Thunk Reference
        state.status = "loading";
      })
      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.eliteITTechnologies = action.payload;
        state.value = action.payload.length;
      })
      .addCase(fetchSkills.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

// Action creators
export const { increment, decrement, incrementByAmount, addSkills } = calculateSlice.actions;

export default calculateSlice.reducer;
