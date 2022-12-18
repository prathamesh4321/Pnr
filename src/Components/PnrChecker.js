import Header from "./Header";
import "./PnrChecker.css";

import { useNavigate } from "react-router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { pnr } from "../Redux/pnrNo";
function PnrChecker() {
    const [pnrno , setPnrno]= useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    window.localStorage.setItem("pnr",pnrno);
    const sendPnr =()=>{
        dispatch(pnr(pnrno))
        navigate("/pnrresult")
    }
    return  (
      <div>
      <Header />
      <div className="box">
      <div className="mg">Check PNR Status</div>
   
      <input className="input mg" placeholder="Enter PNR no " onChange={(e)=>setPnrno(e.target.value)} value={pnrno}/>
  <button className="button mg" onClick={()=>sendPnr()}>Check PNR Status</button>
   
      </div>
      </div>);
}

export default PnrChecker;