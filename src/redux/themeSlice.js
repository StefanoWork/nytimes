import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    darkmode: false,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleDarkmode: (state) => {
            state.darkmode = !state.darkmode;
        },
        setDarkmode: (state, action) => {
            state.darkmode = action.payload;
        },
    },
});

export const { toggleDarkmode, setDarkmode } = themeSlice.actions;
export default themeSlice.reducer;