import React, { useEffect } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, IconButton } from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../../../components/admin/navbar/Navbar";
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import "../../../App.css";
import "./dashboard.scss"
import Widget from "../../../components/admin/widget/Widget";
import Top3 from "../../../components/admin/top3/Top3"
import Etatcmd from "../../../components/admin/widget/etatcmd" 
import CmdChart from "../../../components/admin/chart/Chart"
import { Link } from "react-router-dom";
function Dashboard(){

   

    return (
        <div style={{ height: "100%" }} >
      <div className="navCSS">
        <Navbar />
      </div>
      <div className="page" >
        <div className="sidebarCSS">
          <Sidebar />
        </div>

        <div className="pagecontainer">
    <div className="widgets"  style={{minWidth:'40%'}}>
        
    <Widget type="user"/>
    <Widget type="rooms"/>
    <Widget type="equipement"/>
    <Widget type="reservations"/>

       
    </div>
    <div className="charts">
    <CmdChart/>
  
    </div>
    <div  >
    <h1 className="title">  progress reservations
     <Link to="/reservations" className="link">
          All reservations
    </Link></h1>
    {
      
       <div className="widgets">
        <Etatcmd etat="pending" />
        <Etatcmd etat="confirmed"/>
        <Etatcmd etat="cancelled"/>
    </div>
      
    }
       
    </div>
    
    

</div>
       
</div>
        </div>
    )
}

export default Dashboard;
