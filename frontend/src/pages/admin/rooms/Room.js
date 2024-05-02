import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams} from 'react-router';
import {useNavigate} from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";
import Navbar from "../../../components/admin/navbar/Navbar";
import Sidebar from "../../../components/admin/sidebar/Sidebar";import {Button} from '@mui/material' 
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import VisibilityIcon from '@mui/icons-material/Visibility';


const Room = () => {

  const [room,setRoom]=useState([])
  const [equipments,setEquipments]=useState([])
  const [conso,setConso]=useState([])
  const {id}=useParams();
  const [image, setImage] = useState(null)
  const [nom, setNom] = useState(null)
  const [description, setDescription] = useState(null)



  let navigate=useNavigate();

  useEffect(()=>{
      getRoom();
      fetchequip();
  
  },[])

  const getRoom=async ()=>{
      const {data}=await axios.get(`http://localhost:3002/room/${id}/`)
      console.log(data);
      setRoom(data);
  }
 

  const fetchequip=async()=>{
      const result=await axios.get('http://localhost:3002/equipment/')
      console.log(result.data)
      setEquipments(result.data)
  }

  
 

    return(
      <div>
        <div className='navCSS'><Navbar/></div>
    <div className="page">
<div className="menuCSS"><Sidebar/></div>
    <div className="pagecontainer">
        <div className="C1">
            <div className="left">
               
            </div>
                <div className="right">
                    <h3 className="H3">Room </h3>
                    <span style={{fontSize:'30px'}} className="">{room.name}</span>

                    <div style={{marginTop:'20px',marginRight:'20px'}}>
                    <Button style={{backgroundColor:'#1976d2',color:'white',borderRadius: '10px'}}>
                            Update
                    </Button>
                    <Button style={{marginLeft:'10px',backgroundColor:'#1976d2',color:'white',borderRadius: '10px'}}  >
                        Delete
                        </Button>
                    </div>
                </div>
                
        </div>  

        <div className="countConso">
        <h3 className="H3">Equipments </h3>
 
                  
             </div>
        <div className="">
        <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell align="left">Photo</TableCell>
          <TableCell align="left">name</TableCell>
          <TableCell align="left">Description</TableCell>
          <TableCell align="left" style={{align:'center'}}></TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
          {equipments.map(equipment => {
            if(equipment.id==room.equipments._id){
              return(
            <TableRow key={equipment._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align="left"><img className="imgC" src={equipment.image}/></TableCell>
              <TableCell align="left">{equipment.name}</TableCell>
              <TableCell align="left">{equipment.description}</TableCell>

              <TableCell align="left"><Link style={{textDecoration:'none'}} to="#"><Button style={{borderRadius: '5px',color: 'darkblue'}}><VisibilityIcon /></Button></Link>
              <Button ><DeleteOutlineIcon  style={{color:'#DC272F'}}   /></Button>
        
             </TableCell>
            
           
            </TableRow>
            )}})}
        </TableBody>
      </Table>
    </TableContainer>

        </div>
        <div className="btnC">
        <Button style={{backgroundColor:'#1976d2',color:'white',borderRadius: '10px',marginTop:'15px'}}>
                            Add Equipment 
                    </Button>
        </div>
        </div>
        
    </div>
   
</div>
    );
};
export default Room; 