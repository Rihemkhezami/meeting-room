import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { jwtDecode } from "jwt-decode";
import { setAuth } from "./redux/util/setAuth";
import { Logout, setUser } from "./redux/actions/AuthAction";
import store from "./redux/store/store";
import { useSelector } from "react-redux";
import DefaultRouter from "./components/DefaultRouter";
import NoAccess from "./components/NoAccess";
import Profile from "./pages/user/profile/Profile";
import Rooms from "./pages/user/rooms/Rooms";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import AdminRouter from "./components/admin/AdminRouter";
import ShowRooms from "./pages/admin/rooms/ShowRooms";
import Room from "./pages/admin/rooms/Room";
import ShowEquipments from "./pages/admin/equipments/ShowEquipments";
import ShowUsers from "./pages/admin/users/ShowUsers";
import ShowReservations from "./pages/admin/reservations/ShowReservations";
import AddEquipment from "./pages/admin/equipments/AddEquipment";
import AddReservation from "./pages/admin/reservations/AddReservation";
import User from "./pages/admin/users/profile/User";
import UpdateReservation from "./pages/admin/reservations/UpdateReservation";
import MyCalendar from "./pages/user/calendar/MyCalendar";

if(window.localStorage.jwt){
  const decode = jwtDecode(window.localStorage.jwt)
  store.dispatch(setUser(decode))
  setAuth(window.localStorage.jwt)
  const currentDate = Date.now / 1000

  if(decode.exp >  currentDate){
   store.dispatch(Logout()) 
  }
}



function App() {
  const auth = useSelector(state => state.auth)
  const user = {
    isConnected: auth.isConnected,
    role: auth.user.role
  }



  return (
    <BrowserRouter>
      <Routes>


        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Login/>} />
        <Route path="/noaccess" element={<NoAccess/>} />
        
           {/*User Routes*/}
        <Route path="/profile" element={
          <DefaultRouter user={user}>
            <Profile />
          </DefaultRouter>
        } />
        <Route path="/allrooms" element={
          <DefaultRouter user={user}>
            <Rooms />
          </DefaultRouter>
        } />
        <Route path="/calendar" element={
          <DefaultRouter user={user}>
            <MyCalendar />
          </DefaultRouter>
        } />

        {/*Admin Routes*/}

        <Route path="/dashboard" element={
          <AdminRouter user={user}>
            <Dashboard />
          </AdminRouter>
        } />

<Route path="/room/:id" element={
          <AdminRouter user={user}>
            <Room />
          </AdminRouter>
        } />

<Route path="/rooms" element={
          <AdminRouter user={user}>
            <ShowRooms />
          </AdminRouter>
        } />

<Route path="/equipments" element={
          <AdminRouter user={user}>
            <ShowEquipments />
          </AdminRouter>
        } />

<Route path="/users" element={
          <AdminRouter user={user}>
            <ShowUsers />
          </AdminRouter>
        } />
<Route path="/user/:id" element={
          <AdminRouter user={user}>
            <User />
          </AdminRouter>
        } />

<Route path="/reservations" element={
          <AdminRouter user={user}>
            <ShowReservations />
          </AdminRouter>
        } />
        <Route path="/reservation/:id/update" element={
          <AdminRouter user={user}>
            <UpdateReservation />
          </AdminRouter>
        } />

<Route path="/equipments/add" element={
          <AdminRouter user={user}>
            <AddEquipment />
          </AdminRouter>
        } />

<Route path="/reservations/add" element={
          <AdminRouter user={user}>
            <AddReservation />
          </AdminRouter>
        } />





      </Routes>
      


    </BrowserRouter>
  );
}

export default App;
