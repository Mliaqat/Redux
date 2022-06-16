 import { createSlice } from "@reduxjs/toolkit";

 const uitoggle=createSlice({
    name:"ui",
    initialState:{
        toggle:false
    },
    reducers:{
        change(state){
            state.toggle= !state.toggle

        }
    }

 })

 export const uitoggleaction =uitoggle.actions; 

 export default uitoggle;