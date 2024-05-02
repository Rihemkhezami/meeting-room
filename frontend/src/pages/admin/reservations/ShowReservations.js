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
import { DeleteEquipment, GetEquipments } from "../../../redux/actions/EquipmentAction.js";
import { DELETE_EQUIPMENT } from "../../../redux/store/types";
import Header from "../../../components/admin/header/Header";
import { Link } from "react-router-dom";

import Navbar from "../../../components/admin/navbar/Navbar";
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import "../../../App.css";
import { DeleteReservation, GetReservations } from "../../../redux/actions/ReservationAction.js";

function ShowReservations(){

    const reservations = useSelector(state => state.reservations)
    const dispatch  = useDispatch()

    useEffect(() => {
        dispatch(GetReservations());
    }, [dispatch]);

    if (!reservations) {
        return <div>Loading...</div>;
    }

    const DeleteHandler = (id)=>{
        dispatch(DeleteReservation(id))
      }

  

    return (
        <div style={{ height: "100%" }} >
      <div className="navCSS">
        <Navbar />
      </div>
      <div className="page">
        <div className="sidebarCSS">
          <Sidebar />
        </div>
        <div className="pagecontainer"  >
        <Link to="/reservations/add" style={{ textDecoration: "none" }}>
        <Header title="Create new reservation" />
         </Link>            <TableContainer component={Paper} style={{ marginLeft: "20px", marginTop: "40px" }} border={2}>
                <Table sx={{ minWidth: 100 }} aria-label="simple table" >
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Title</TableCell>
                            <TableCell align="left">Start Date</TableCell>
                            <TableCell align="center">End Date</TableCell>
                            <TableCell align="center">Room</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Actions</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {reservations.reservations.map((reservation) => (
                            <TableRow key={reservation._id}>
                                <TableCell align="left">{reservation.title}</TableCell>
                                <TableCell align="left">{reservation.startdate}</TableCell>
                                <TableCell align="center">{reservation.enddate}</TableCell>
                                <TableCell align="center" >{reservation.room ? reservation.room.name : ''}</TableCell>
                                <TableCell align="center">{reservation.status}</TableCell>
                                <TableCell align="center">

                                    <IconButton type="button">
                                    <Link to={`/reservation/${reservation._id}/update`} style={{ textDecoration: "none" }}>
                                        <EditOutlinedIcon color='success'  />
                                    </Link>
                                    </IconButton>
                                    <IconButton type="button" onClick={()=>DeleteHandler(reservation._id)}>
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

export default ShowReservations;
