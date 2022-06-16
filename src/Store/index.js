import { configureStore } from "@reduxjs/toolkit";
import uitoggle from "./UiSlice"
import adddata from "./CartSlice"

const store=configureStore({
    reducer:{ ui: uitoggle.reducer, additems: adddata.reducer }

})

export default store; 