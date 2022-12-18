import {configureStore} from "@reduxjs/toolkit"
import pnrData from "./pnrData";
import pnrNo from "./pnrNo";
const store = configureStore({

reducer:{
    pnr:pnrData,
    pnrno:pnrNo
}



})
export default store;