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
import { DeleteEquipment, GetEquipments } from "../../../redux/actions/EquipmentAction";
import { DELETE_EQUIPMENT, DELETE_USER } from "../../../redux/store/types";
import Header from "../../../components/admin/header/Header";
import { Link } from "react-router-dom";

import Navbar from "../../../components/admin/navbar/Navbar";
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import "../../../App.css";
import { GetUsers } from "../../../redux/actions/UserAction";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';

function ShowUsers(){

    const users = useSelector(state => state.users)
    const dispatch  = useDispatch()

    useEffect(() => {
        dispatch(GetUsers());
    }, [dispatch]);

    if (!users) {
        return <div>Loading...</div>;
    }

   

    return (
        <div style={{ height: "100%" ,width:"100%"}} >
      <div className="navCSS">
        <Navbar />
      </div>
      <div className="page">
        <div className="sidebarCSS">
          <Sidebar />
        </div>
        <div className="pagecontainer"  >
            <Header title="Create new user" />
            <TableContainer component={Paper} style={{ marginLeft: "0px", marginTop: "10px" }} border={2}>
                <Table sx={{ minWidth: 10 }} aria-label="simple table" >
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Phone</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.users.map((user) => (
                            <TableRow key={user._id}>
                                <TableCell align="left">{user.firstname} {user.lastname}</TableCell>
                                <TableCell align="left">{user.phone}</TableCell>
                                <TableCell align="center">{user.email}</TableCell>
                                <TableCell align="center">
                                <IconButton type="button">
                                <Link to={`/user/${user._id}`} style={{ textDecoration: "none" }}>
                                        <VisibilityIcon  style={{color:'#000080'}} />
                                </Link>
                                    </IconButton>
                                    {
                                        /*<IconButton type="button">
                                        <EditOutlinedIcon color='success' />
                                    </IconButton>
                                    */}
                                    <IconButton type="button" >
                                        <DeleteOutlinedIcon color='error' />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
            </div>

        </div>
    )
}

export default ShowUsers;
