import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Ijob {
  _id: string;
  url: string;
  title: string;
  company_name: string;
  category: string;
  job_type: string;
  publication_date: Date;
  candidate_required_location: string;
  salary: string;
  description: string;
}

interface allJobs {
  allJobs: Ijob[];
  status: "idle" | "loading" | "failed";
}

const initialState: allJobs = {
  allJobs: [] as Ijob[],
  status: "idle",
};

const getUrl = "https://strive-benchmark.herokuapp.com/api/jobs";
export const jobsFetch = createAsyncThunk("fetch-jobs", async (limit: number = 10) => {
  try {
    const resposnse = await fetch(`${getUrl}/?&limit=${limit.toString()}`, {
      headers: {
        Authorization: process.env.REACT_APP_BEARER || "nonandra",
      },
    });
    if (resposnse.ok) {
      const data = await resposnse.json();
      return data;
    } else {
      console.log("Errore nel fetch dei lavori");
    }
  } catch (error) {
    console.log(error);
  }
});

const jobsSlice = createSlice({
  name: "save",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(jobsFetch.pending, (state) => {
        state.status = "loading";
      })
      .addCase(jobsFetch.fulfilled, (state, action) => {
        state.status = "idle";
        state.allJobs = action.payload;
      })
      .addCase(jobsFetch.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default jobsSlice.reducer;
