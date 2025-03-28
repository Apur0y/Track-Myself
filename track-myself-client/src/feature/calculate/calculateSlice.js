import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// ✅ Correct Thunk Name (Renamed from "kills" to "fetchSkills")
export const fetchSkills = createAsyncThunk("calculate/skills", async () => {
  const response = await axios.get("https://track-myself-server.vercel.app/skills");
  return response.data;
});
export const fetchMySkills = createAsyncThunk("calculate/myskills", async () => {
  const response = await axios.get("https://track-myself-server.vercel.app/myskills");
  return response.data;
});

export const calculateSlice = createSlice({
  name: 'calculate',
  initialState: {
    value: 0,
    eliteITTechnologies: [],
    mySkills:[],
    skillsStatus: "idle", // Separate status for skills
    mySkillsStatus: "idle",  // 'idle' | 'loading' | 'succeeded' | 'failed'
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

    //Handle fetch allskills
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
      })

      //Handle My Skills
      .addCase(fetchMySkills.pending, (state) => {  // ✅ Corrected Thunk Reference
        state.status = "loading";
      })
      .addCase(fetchMySkills.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.mySkills = action.payload;
        state.value = action.payload.length;
      })
      .addCase(fetchMySkills.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

// Action creators
export const { increment, decrement, incrementByAmount, addSkills } = calculateSlice.actions;

export default calculateSlice.reducer;
