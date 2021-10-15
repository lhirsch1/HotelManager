//displays company data


export const MessageCard = ({idx, message}) => {    
    console.log('messcard hit')
    return ( 
        <button>
            <p>{message.body} </p>
        </button>
    )
}