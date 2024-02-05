import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name:"video",
    initialState:{
        videoDetail : null
    },
    reducers:{
        addVideoDetail : (state,action) =>{
            state.videoDetail = action.payload
        } 
    }
    
});
export const {addVideoDetail} = videoSlice.actions;
export default videoSlice.reducer;