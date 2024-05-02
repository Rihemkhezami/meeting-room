import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LaptopIcon from '@mui/icons-material/Laptop';
import InsertChartIcon from "@mui/icons-material/InsertChart";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from "@mui/icons-material/ExitToApp"; 
import { Link } from "react-router-dom";
import { useContext, useState ,useEffect} from "react";
import axios from 'axios';

import RoomServiceOutlinedIcon from '@mui/icons-material/RoomServiceOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import BorderAllOutlinedIcon from '@mui/icons-material/BorderAllOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useDispatch } from "react-redux";
import { Logout } from "../../../redux/actions/AuthAction";




const Sidebar = () => {
  const [user,setUser]=useState([])
  const dispatch = useDispatch()

  const LogoutHanlder = ()=>{
    dispatch(Logout())
 }

 





  return (
    <div className="sidebar">
     
      <div className="s2">
        <ul>
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <li> 
            <HomeOutlinedIcon className="icon" />
            <span>Dashboard</span>
          </li>
          </Link>
          <Link to="/users" style={{ textDecoration: "none" }}>
          <li> 
            <ContactsOutlinedIcon className="icon" />
            <span>Manage Users</span>
          </li>
          </Link>
          <Link to="/rooms" style={{ textDecoration: "none" }}>
          <li> 
          <BorderAllOutlinedIcon className="icon" />
            <span>Manage Rooms</span>
          </li>
          </Link>
          <Link to="/equipments" style={{ textDecoration: "none" }}>
          <li> 
            <DevicesOutlinedIcon className="icon" />
            <span>Equipments</span>
          </li>
          </Link>
          <Link to="/reservations" style={{ textDecoration: "none" }}>
          <li> 
            <AccountBoxIcon 
            className="icon" />
            <span>Reservations</span>
          </li>
          </Link>
          <Link  style={{ textDecoration: "none" }}>
          <li onClick={LogoutHanlder}> 
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
            
          </li>
          </Link>
         
        </ul>
      </div>
      
    </div>
  );
};

export default Sidebar;