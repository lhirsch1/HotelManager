//for each object generates appropriate card
import CompanyCard from "./companyCard"
import {GuestCard} from "./guestCard"


export const InfoSilo = ({allCompanies, allGuests, allMessages}) => {
    
    if(allCompanies){
        allCompanies.map((company) =>{
            return (
                <div>
                    Company: {company.company} 
                </div>
            )
        })
    }
    else if(allGuests && allGuests.length >= 1){
        console.log('guests ', allGuests)
        // return (
        //     <div>
        //         guests
        //     </div>
        // )
        
        return (
            <>
                {allGuests !== undefined ? (
                    allGuests.map((guest,idx) =>{
                        return <GuestCard idx={idx} guest={guest} />
                    })
                ) :null 
                }
            </>
        )
        
    }
    else if(allMessages){
        allMessages.map((message) =>{
            return (
                <div>
                    Message: {message.body} 
                </div>
            )
        })
    }
    else{
        return (
            <div>
                howdy
            </div>
        )
    }
    
}