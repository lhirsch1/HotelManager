


export const GuestCard = ({key, guest, selectedState, setSelectedState}) => {
    //handle click changes the guest id number so messages can be rendered
    const handleClick = (id) => {
        setSelectedState({"company":selectedState.company, "guest":guest})
    }
    return(
        <button  onClick={()=> {handleClick(guest.id)}}>
            <h2>{guest.firstName} {guest.lastName}</h2>
   
        </button>
    )
}