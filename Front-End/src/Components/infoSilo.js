//for each object generates appropriate card
import { CompanyCard } from "./companyCard";
import { GuestCard } from "./guestCard";
import '../App.css';

export const InfoSilo = ({ allCompanies, allGuests, allMessages , setSelectedState, selectedState}) => {
  if (allCompanies && allCompanies.length >= 1) {
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
  
  else if (allGuests && allGuests.length >= 1) {
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
//   else if (allMessages) {
//     allMessages.map((message) => {
//       return <div>Message: {message.body}</div>;
//     });
//   } 
  else {
    return <div>howdy</div>;
  }
};
