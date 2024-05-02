import "./widget.scss";
import GroupIcon from '@mui/icons-material/Group';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InsertChartIcon from "@mui/icons-material/InsertChart";
import LaptopIcon from '@mui/icons-material/Laptop';
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from 'axios' ;
import { useDispatch, useSelector } from "react-redux";
import { GetRooms } from "../../../redux/actions/RoomAction";
import { GetEquipments } from "../../../redux/actions/EquipmentAction";
import BorderAllOutlinedIcon from '@mui/icons-material/BorderAllOutlined';

const Widget = ({type}) => {

    const [nbuser,setNbuser]=useState([])
   const [nbequip,setNbequip]=useState([])
   const [nbrooms,setNbrooms]=useState([])
   const [nbreservations,setNbreservations]=useState([])

    const users = async () => {
        const result = await axios.get('http://localhost:3002/nb/users');
        console.log(result.data)
       setNbuser(result.data)
    }
    const equipements = async () => {
        const result = await axios.get('http://localhost:3002/nb/equipments');
        console.log(result.data)
       setNbequip(result.data)
    }
    const rooms = async () => {
        const result = await axios.get('http://localhost:3002/nb/rooms');
        console.log(result.data)
       setNbrooms(result.data)
    }
    const reservations = async () => {
        const result = await axios.get('http://localhost:3002/nb/reservations');
        console.log(result.data)
       setNbreservations(result.data)
    }


    useEffect(()=>{
        users();
        equipements();
        rooms();
        reservations();

    },[])
   
    let data;

    switch(type){
        case "user": 
        data={
            title:"USERS",
            //isMoney: false,
            link:"users",
            value:nbuser,
            icon: (<div className="userIcon"> <GroupIcon className="userI"/></div>)
        };
        break;
        case "rooms": 
        data={
            title:"ROOMS",
            //isMoney: false,
            value:nbrooms,
            link:"rooms",
            icon: (<div className="orderIcon"> <BorderAllOutlinedIcon className="orderI"/></div>)
        };
        break;
        case "equipement": 
        data={
            title:"EQUIPMENT",
            //isMoney: false,
            link:"equipments",
            value:nbequip,
            icon: (<div className="laptopIcon"> <LaptopIcon className="laptopI" /></div>)
        };
        break;
        case "reservations": 
        data={
            title:"RESERVATIONS",
           // isMoney: true,
            value:nbreservations,
            link:"/reservations",
            icon: (<div className="stockIcon"> <InsertChartIcon className="stockI"/></div>)
        };
        break;
        default: 
            break;
    }

    return(
        <div className="widget">
        <div className="left">
        <Link  to={data.link}> 
            <div className="widgetIcon">{data.icon} </div>
        </Link>
        </div>
        <div className="right">
            <span className="title">{data.title}</span>
            <span className="counter">{data.value}</span>
            
        </div>
            

        </div>
    )
}

export default Widget;

/*
<span className="counter">{data.isMoney && "TND"}{amount}</span>
*/