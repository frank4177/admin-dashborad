import { createSlice } from "@reduxjs/toolkit"

const darkmodeSlice = createSlice({
    name:"darkmode",
    initialState: {
        darkmode: false,
    },
    reducers: {
       light: (state)=> {
           state.darkmode = false;
       },
       toggle: (state)=> {
        state.darkmode = !state.darkmode;

       },
       dark:(state)=> {
        state.darkmode = true;

       },
    }
});

export const {light, dark, toggle} = darkmodeSlice.actions;
export default darkmodeSlice.reducer;