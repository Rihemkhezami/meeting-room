import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './rooms.scss';
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { GetRooms } from "../../../redux/actions/RoomAction";
import { GetEquipments } from "../../../redux/actions/EquipmentAction";
import TopBar from "../../../components/user/topbar/TopBar";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Rooms = () => {
    const title={fontSize: "25px",  fontWeight: "bold",  fontFamily:" 'Anton', sans-serif",textAlign:'center',marginTop:"50px",marginBottom:"30px"}

    const rooms = useSelector(state => state.rooms)
    const equipments = useSelector(state => state.equipments)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetRooms());
        dispatch(GetEquipments());
    }, [dispatch]);

    if (!rooms || !equipments) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <TopBar />
            <div className="page">
                <div className="pagecontainer">
                    <div className="equiptable">
                        <div className="datatableTitle" style={title}>
                            LIST OF ROOMS
                        </div>
                        <div className="main_content">
                            {rooms.rooms.map((room) => (
                                <CardContent className="card" key={room._id}>
                                    <Typography variant="h5" component="div">
                                        Room Details
                                    </Typography>
                                    <div className="card_header">
                                        <Typography>Name : {room.name}</Typography>
                                        <Typography>Capacity : {room.capacity}</Typography>
                                        <Typography>Equipments :</Typography>
                                        <ul>
                                        {room.equipments.map((equipmentId) => {
    const equipment = Array.isArray(equipments) && equipments.find(equip => equip._id === equipmentId._id);
    return (
        <li key={equipmentId._id}>
            {equipment ? equipment._id : "Unknown Equipment"}
        </li>
    );
})}
                                        </ul>
                                        <div className="cellAction">
                                            <Link to="#" className="viewButton" style={{ textDecoration: 'none', color: 'black' }}>
                                                Afficher
                                            </Link>
                                        </div>
                                    </div>
                                </CardContent>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Rooms;
