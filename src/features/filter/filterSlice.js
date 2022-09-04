const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    tags: [],
    search: "",
    currentPage:1,
    author:''
};

const filterSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        tagSelected: (state, action) => {
            state.tags.push(action.payload);
        },
        tagRemoved: (state, action) => {
            const indexToRemove = state.tags.indexOf(action.payload);

            if (indexToRemove !== -1) {
                state.tags.splice(indexToRemove, 1);
            }
        },
        searched: (state, action) => {
            state.search = action.payload;
        },
        setCurrentPage:(state,action) => {
            state.currentPage = action.payload
        },
        filterByAuthor:(state,action) => {
            // to reset previous filter
                        state.tags = []
                        state.search = ''
                    state.author = action.payload
        },
        resetAllFilter:(state) => { 
            state.tags = []
            state.search = ""
            state.author = ""
            state.currentPage =1
        }
    },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched,setCurrentPage,filterByAuthor,resetAllFilter } = filterSlice.actions;
