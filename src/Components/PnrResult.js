import React, { useEffect, useState } from 'react'
import Header from './Header';
import "./PnrResult.css"
import axios from "axios"

import { uri, uriLib } from './uris';
import {useSelector,useDispatch} from "react-redux"
import { add } from '../Redux/pnrData';
import { useNavigate } from 'react-router';
function PnrResult() {
const navigate = useNavigate()
const dispatch = useDispatch()
const [loading , setLoading]= useState(false)
const selector = useSelector(state=>state.pnr)
const pnr = useSelector(state=>state.pnrno)
console.log(pnr)
const pnrNo = localStorage.getItem("pnr")
console.log(pnrNo)
console.log(selector.data.PassengerStatus)
useEffect(()=>{
const fetchfun =async()=>{

  setLoading(true)
    const options = {
        method: 'GET',
        url: 'https://irctc1.p.rapidapi.com/api/v3/getPNRStatus',
        params: {pnrNumber: pnrNo},
        headers: {
            'X-RapidAPI-Key': 'f21aa03ef3msh5dc2a86c4b31099p1b5b2cjsn46168781ad17',
            'X-RapidAPI-Host': 'irctc1.p.rapidapi.com'
        }
      };

    axios.request(options).then(function (response) {
        console.log(response.data);
        dispatch(add(response.data.data))
        setLoading(false)
     
    }).catch(function (error) {
        console.error(error);
    });

}


if (pnrNo){
    fetchfun();
}
  
},[])



if(selector.data.Duration){
  var duration =selector.data.Duration;
  var hrs = duration.substring(0,2);
  var mins = duration.substring(3,5)
  console.log(hrs)
}



    return ( 
        <div >
            <Header />
          
            { 
            
            loading===true ? <div style={{textAlign:"center" , marginTop:"10%"}}>loading...</div>:
            
            <div>
           
           <div className='box1 h6'>
          
           
           <div className='font' ><div  style={{display:"flex" ,justifyContent:"space-between"}}><div ><b>PNR {selector.data.Pnr}</b> </div> <div>{selector.data.ChartPrepared===true ? <div style={{color:"green"}}>Chart Prepared</div>:<div>Chart Not Prepared</div>}</div></div>
                <div  style={{display:"flex" }}> <b>{selector.data.TrainNo+" "}</b>  {selector.data.TrainName} </div>
                <div  style={{display:"flex" , justifyContent:"space-between"}}> <div>{selector.data.BoardingStationName
}</div><div> {selector.data.ReservationUptoName
}</div>  </div>
                <div  style={{display:"flex" , justifyContent:"space-between"}}> <div>{selector.data.SourceName}</div><div> {selector.data.DestinationName}</div>  </div>
                <div  style={{display:"flex" , justifyContent:"space-between"}}> <div>{selector.data.From}</div> -- <div>{hrs}hrs {mins}mins </div>  --<div>{selector.data.To}</div>  </div>
                <div  style={{display:"flex" , justifyContent:"space-between"}}> <div>Departure Time : {selector.data.DepartureTime

}</div><div> Arrival Time : {selector.data.ArrivalTime}</div>  </div>
               
                <div >  Quota <b>{selector.data.Quota}</b> | Class <b>{selector.data.Class}</b> </div>
                <div>BookingDate: {selector.data.BookingDate}</div>
            </div>
            </div>
        
           
           
           
            <div className='box1 h6 font' >
               
                <table style={{width:"100%" }}>
                <tr style={{color:'gray'}}>
    <td>Passenger</td>
    <td>Booking Status</td>
    <td>Current Status</td>
  
  </tr>

             
                {selector.data.PassengerStatus && selector.data.PassengerStatus.map(passenger=>{
                return    <tr  >
                <td >Passenger {passenger.Number}</td>
                <td style={{color:"green" }}>{passenger.BookingStatus
                } </td>
                <td style={{color:"green"}}>{passenger.CurrentStatusNew
                }</td>
              </tr>
             
            

            })
        } 
          </table>
            </div>
            <div>      
            </div>
            </div>
            }
          
                    </div>

 
     );
        }


export default PnrResult;