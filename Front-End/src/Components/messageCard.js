//displays company data


export const MessageCard = ({idx, message}) => {    
    console.log('messcard hit')
    return ( 
        <button>
            <h2>{message.body} </h2>
            
        </button>
    )
}