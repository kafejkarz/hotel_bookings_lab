const BookingsList = ({ bookings }) => {
    
    
    
    
    return (
        <div id="bookings-list">
        <h2>Bookings</h2>
        <ul>
            {bookings.map(booking => {
            return (
                <li key={booking._id}>{booking.name},{booking.email},{booking.checkIn}</li>
            )
            })}
        </ul>
        </div>
    )
}

export default BookingsList;