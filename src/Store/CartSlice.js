import { createSlice } from "@reduxjs/toolkit";

const adddata=createSlice({
    name:'additems',
    initialState:{
        name:[ ]
    },
    reducers:{
        additems(state,action){
            const  newitem=action.payload;
            state.name.push({name:newitem.name,age:newitem.age})

        }
    }

})

export const additem=adddata.actions;
export default adddata;