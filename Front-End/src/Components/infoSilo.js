//for each object generates appropriate card
import {CompanyCard} from "./companyCard"
import {GuestCard} from "./guestCard"


export const InfoSilo = ({allCompanies, allGuests, allMessages}) => {
    
    if(allCompanies && allCompanies.length >= 1){
        console.log(' all companies ', allCompanies)
        return (
            <>
                HI THERE
                {allCompanies !== undefined ? (
                    allCompanies.map((company,idx) =>{
                        return <CompanyCard idx={idx} company={company} />
                    })
                ) :null 
                }
            </>
        )
    }
    else if(allGuests && allGuests.length >= 1){
        console.log('all guests ', allGuests)
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