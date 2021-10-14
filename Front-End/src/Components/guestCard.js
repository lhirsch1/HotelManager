


export const GuestCard = ({key, guest, selectedState, setSelectedState}) => {

    const handleClick = (id) => {
        setSelectedState({...selectedState, "guest":id})
    
    }
    
    
    return(
        <button  onClick={()=> {handleClick(guest.id)}}>
            <h2>{guest.firstName} {guest.lastName}</h2>
   
        </button>
    )
}