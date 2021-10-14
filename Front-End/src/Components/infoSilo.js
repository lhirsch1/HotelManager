//for each object generates appropriate card
import { CompanyCard } from "./companyCard";
import { GuestCard } from "./guestCard";
import { MessageCard } from "./messageCard";
import '../App.css';

export const InfoSilo = ({ allCompanies, allGuests, allMessages , setSelectedState, selectedState}) => {
  if (allCompanies) {
    return (
      <div className={"infoSilo"}>
        <>
          {allCompanies !== undefined
            ? allCompanies.map((company, idx) => {
                return <CompanyCard idx={idx} company={company} setSelectedState={setSelectedState} selectedState={selectedState} />;
              })
            : null}
        </>
      </div>
    );
  } 
  
  else if (allGuests) {
    console.log("all guests ", allGuests);
    return (
      <div className={"infoSilo"}>
        <>
          {allGuests !== undefined
            ? allGuests.map((guest, idx) => {
                return <GuestCard idx={idx} guest={guest} setSelectedState={setSelectedState} selectedState={selectedState}/>;
              })
            : null}
        </>
      </div>
    );
  } 

  
  else if (allMessages) {
      console.log('silo mess', allMessages);
      return (
          <>
    <div className={"infoSilo"}>
        <>
          {allMessages !== undefined
            ? allMessages.map((message, idx) => {
                console.log('mess filter', message)
                return <MessageCard idx={idx} message={message}/>;
              })
            : null}
        </>
        
      </div>
      <button>Send New Message</button>
      </>
      )
  } 

  else {
    return <div>howdy</div>;
  }
};
