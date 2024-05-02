import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { GetReservations } from '../../../redux/actions/ReservationAction';
import TopBar from '../../../components/user/topbar/TopBar';

const MyCalendar = () => {
  const localizer = momentLocalizer(moment);
  const dispatch = useDispatch();
  const reservations = useSelector(state => state.reservations);

  useEffect(() => {
    dispatch(GetReservations()); // Récupérer les réservations
  }, [dispatch]);

  // Formatter les données des réservations pour le calendrier
  const formattedReservations = Array.isArray(reservations) ? reservations.map(reservation => ({
    id: reservation._id,
    title: reservation.title,
    start: new Date(reservation.startdate),
    end: new Date(reservation.enddate),
    // Autres données de réservation à ajouter selon les besoins
  })) : [];

  return (
    <div>
            <TopBar />
            <div className="page">
                <div className="">
                <div style={{ height: 500 }}>

      <Calendar
        localizer={localizer}
        events={formattedReservations}
        startAccessor="start"
        endAccessor="end"
        style={{ margin: '50px' }}
      />
      </div>
    </div>
    </div>
    </div>
  );
};

export default MyCalendar;
