import {createSlice} from '@reduxjs/toolkit';

export const themeSlice=createSlice({
    name:'user',
    initialState:{value:{name:'',age:0,email:''}},
    reducers:{
        changeColor:(state,action)=>{
           state.value=action.payload
        },
    }
});

export const {changeColor} =themeSlice.actions;
export default themeSlice.reducer;