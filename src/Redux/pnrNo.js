import { createSlice} from "@reduxjs/toolkit";


const initialState ={
    pnrno:String
}


const pnrNo = createSlice({
name:"pnrno",
initialState,
reducers:{
    pnr(state , action){
        state.pnrno = action.payload;
    }
}


})

export const {pnr} = pnrNo.actions;
export default pnrNo.reducer;