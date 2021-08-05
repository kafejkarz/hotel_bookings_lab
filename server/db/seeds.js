use hotel_checkIn;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Arek",
        email: "arek@",
        checkIn: "true"
    },
    { 
        name: "Nathan",
        email: "nathan@",
        checkIn: "true"

    },
    {
        name: "John",
        email: "john@",
        checkIn: "true"
    }
])
