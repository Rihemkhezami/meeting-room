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
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from "react-router-dom";

import Navbar from "../../../components/admin/navbar/Navbar";
import Sidebar from "../../../components/admin/sidebar/Sidebar";
import "../../../App.css";

function ShowEquipments(){

    const equipments = useSelector(state => state.equipments)
    const dispatch  = useDispatch()

    useEffect(() => {
        dispatch(GetEquipments());
    }, [dispatch]);

    if (!equipments) {
        return <div>Loading...</div>;
    }

    const DeleteHandler = (id)=>{
      dispatch(DeleteEquipment(id))
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
        <Link to="/equipments/add" style={{ textDecoration: "none" }}>
        <Header title="Create new equipment" />
         </Link>
            <TableContainer component={Paper} style={{ marginLeft: "20px", marginTop: "40px" }} border={2}>
                <Table sx={{ minWidth: 100 }} aria-label="simple table" >
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Description</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {equipments.equipments.map((equipment) => (
                            <TableRow key={equipment._id}>
                                <TableCell align="left">{equipment.name}</TableCell>
                                <TableCell align="left">{equipment.description}</TableCell>
                                <TableCell align="center">{equipment.stock}</TableCell>
                                <TableCell align="center">
                                <IconButton type="button">
                                <Link to={`/equipment/${equipment._id}`} style={{ textDecoration: "none" }}>
                                        <VisibilityIcon  style={{color:'#000080'}} />
                                </Link>
                                    </IconButton>
                                    <IconButton type="button" onClick={()=>DeleteHandler(equipment._id)}>
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

export default ShowEquipments;
