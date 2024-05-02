import React, { useEffect } from "react";
import Navbar from "../../../components/admin/navbar/Navbar";
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import "../../../App.css";
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
import { DELETE_EQUIPMENT } from "../../../redux/store/types";
import { DeleteRoom, GetRooms } from "../../../redux/actions/RoomAction";
import { DeleteEquipment, GetEquipments } from "../../../redux/actions/EquipmentAction";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from "react-router-dom";
import Header from "../../../components/admin/header/Header";

function ShowRooms() {



    const rooms = useSelector(state => state.rooms)
    const dispatch  = useDispatch()

    useEffect(() => {
        dispatch(GetRooms());
    }, [dispatch]);


    if (!rooms) {
        return <div>Loading...</div>;
    }

    const DeleteHandler = (id)=>{
      dispatch(DeleteRoom(id))
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
        <Header title="Create new Room" />
            <TableContainer component={Paper} style={{ marginLeft: "0px", marginTop: "40px" }} border={2}>
                <Table sx={{ minWidth: 100 }} aria-label="simple table" >
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">capacity</TableCell>
                            <TableCell align="center">Equipments</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rooms.rooms.map((room) => (
                            <TableRow key={room._id}>
                                <TableCell align="left">{room.name}</TableCell>
                                <TableCell align="left">{room.capacity}</TableCell>
                                <TableCell align="center">{room.equipments.map((equipment)=>(
                                 <p>{equipment.name}</p>
                                ))}</TableCell>
                                <TableCell align="center">
                                <Link to={`/room/${room._id}`} style={{ textDecoration: "none" }}>
                                        <VisibilityIcon  style={{color:'#000080'}} />
                                </Link>
                                    <IconButton type="button" onClick={()=>DeleteHandler(room._id)}>
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
  );
}

export default ShowRooms;
