import React, { useEffect, useState } from "react";
import BookingsList from "../components/bookingsList"
import BookingsForm from "../components/bookingsForm";
import { method } from "lodash";



const BookingsContainer = () => {

    const [bookings, setBookings] = useState([])

    useEffect(() => {
        fetchBookings()
    }, [])

    const fetchBookings = () => {
        fetch('http://localhost:5000/api/bookings')
        .then(response => response.json())
        .then(bookings => setBookings(bookings));
    }

    const onFormSubmit = (payload) => {
        fetch('http://localhost:5000/api/bookings',{
            method: "POST",
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(() => fetchBookings())
    }


    
    
    
    return (
        <>
        <h1>List of bookings</h1>
        <BookingsForm onFormSubmit= {onFormSubmit}/>
        <BookingsList bookings = {bookings}/>

        </>
    )

     
}


export default BookingsContainer;