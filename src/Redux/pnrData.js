import { createSlice} from "@reduxjs/toolkit";


const initialState ={
 
    data:{

    }
   
}


const pnrData = createSlice({
name:"pnr",
initialState,
reducers:{
    add(state , action){
      
        state.data =action.payload;
    }
}


})

export const {add} = pnrData.actions;
export default pnrData.reducer;