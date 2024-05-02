import "./widget.scss";
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios' ;
 
 
const Etatcmd = ({etat}) => {
    const [nbconf,setNbConf]=useState([])
    const [nbcanc,setNbCanc]=useState([])
    const [nbpend,setNbPend]=useState([])
 
     const confirmed = async () => {
         const result = await axios.get('http://localhost:3002/nb/confirmed');
         console.log(result.data)
        setNbConf(result.data)
     }
     const cancelled = async () => {
         const result = await axios.get('http://localhost:3002/nb/cancelled');
         console.log(result.data)
        setNbCanc(result.data)
     }
     const pending = async () => {
         const result = await axios.get('http://localhost:3002/nb/pending');
         console.log(result.data)
        setNbPend(result.data)
     }

 
 
     useEffect(()=>{
         confirmed();
         cancelled();
         pending(); 
     },[])
    let data;
    //insert bd
    //const amount=258
 
    switch(etat){
        case "confirmed":
        data={
            title:"CONFIRMED RESERVATION",
            icon: (<div className="termineIcon"> <CheckCircleOutlineIcon className="termineI"/></div>),
            value:nbconf
        };
        break;
        case "pending":
        data={
            title:"PENDING RESERVATION",
            icon: (<div className="pendingIcon"> <PauseCircleOutlineIcon className="pendingI"/></div>),
            value:nbpend

        };
        break;
        case "cancelled":
        data={
            title:"CANCELLED RESERVATION",
            icon: (<div className="annuleIcon"> <HighlightOffIcon className="annuleI"/></div>),
            value:nbcanc
        };
        break;
        default:
            break;
    }
    return(
        <div className="widget">
        <div className="left">
       
            <div className="widgetIcon">{data.icon} </div>
     
        </div>
        <div className="right">
            <span className="title">{data.title}</span>
            <span className="counter">{data.value}</span>
        </div>
           
 
        </div>
    )
}
 
export default Etatcmd;

