import { useState } from "react";

const BookingsForm = ({onFormSubmit}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [checkIn, setCheckIn] = useState("false")

    const handleNameChange = (event) => {
        setName(event.target.value)
      }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
      }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const payload ={
            name,
            email
        }
        onFormSubmit(payload)
        // resetForm()
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={name} onChange={handleNameChange} />

            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={email} onChange={handleEmailChange} />
         
           <input type="submit" value="save"/>

        </form>
    )


}

export default BookingsForm;