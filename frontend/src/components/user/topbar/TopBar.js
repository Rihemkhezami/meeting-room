import React,{useEffect,useState} from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExitToAppIcon from "@mui/icons-material/ExitToApp"; 
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import "./TopBar.css";
import { useDispatch } from "react-redux";
import { Logout } from "../../../redux/actions/AuthAction";


const TopBar = () => {

    const dispatch = useDispatch()

    const LogoutHanlder = ()=>{
      dispatch(Logout())
   }

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="s1"> 

          <Link to="/employe" style={{ textDecoration: "none" }}>
          <span className="logo">ReservaRoom</span>
            </Link>     
        </div>


        <div className="search">
            <input type="text" placeholder="Search..." />
            <SearchOutlinedIcon />
        </div>
        <div className="menu">
        <Link to="/allrooms" style={{ textDecoration: "none" }}>
            <span className="m1">Rooms</span>
          </Link>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <span className="m1">Profile</span>
          </Link>
          <Link to="/calendar" style={{ textDecoration: "none" }}>
            <span className="m1">Agenda</span>
          </Link>
          
          </div>

      <div className="items">
        <div className="item">
          <Link to='/' style={{textDecoration:'none',color:'black'}}>
            <ExitToAppIcon className="icon" onClick={LogoutHanlder} 
              />

          </Link>
          </div>
          
          
          <div className="item">
          
          </div>
        </div>
        </div>
    </div>
  );
};

export default TopBar;