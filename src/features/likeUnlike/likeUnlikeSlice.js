import { updateLikesUnlikes } from "./likesUnlikesApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    updateLikesUnlikes:{},
    isLoading: false,
    isError: false,
    error: "",
};

// async thunk
export const fetchLikesUnlikes = createAsyncThunk("likesUnlikes/fetchLikesUnlikes", async ({id,likesOrUnlikesData}) => {
    const data = await updateLikesUnlikes(id,likesOrUnlikesData);
    return data;
});

const updateLikesUnlikesSlice = createSlice({
    name: "video",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchLikesUnlikes.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchLikesUnlikes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.updateLikesUnlikes = action.payload;
            })
            .addCase(fetchLikesUnlikes.rejected, (state, action) => {
                state.isLoading = false;
                state.updateLikesUnlikes = {};
                state.isError = true;
                state.error = action.error?.message;
            });
    },
});

export default updateLikesUnlikesSlice.reducer;
