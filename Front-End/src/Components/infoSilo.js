//for each object generates appropriate card
import { CompanyCard } from "./companyCard";
import { GuestCard } from "./guest/guestCard";
import { MessageCard } from "./message/messageCard";
import { MessageForm } from "./message/messageForm";
import "../App.css";

export const InfoSilo = ({
  allCompanies,
  allGuests,
  allMessages,
  setMessageState,
  setSelectedState,
  selectedState,
}) => {

    console.log('all mess', allMessages)
  if (allCompanies) {
    return (
      <div className={"infoSilo"}>
        <>
          {allCompanies !== undefined
            ? allCompanies.map((company, idx) => {
                return (
                  <CompanyCard
                    idx={idx}
                    company={company}
                    setSelectedState={setSelectedState}
                    selectedState={selectedState}
                  />
                );
              })
            : null}
        </>
      </div>
    );
  } else if (allGuests) {
    return (
      <div className={"infoSilo"}>
        <>
          {allGuests !== undefined
            ? allGuests.map((guest, idx) => {
                return (
                  <GuestCard
                    idx={idx}
                    guest={guest}
                    setSelectedState={setSelectedState}
                    selectedState={selectedState}
                  />
                );
              })
            : null}
        </>
      </div>
    );
  } else if (allMessages) {
    return (
      <>
        <div className={"infoSilo"}>
          <>
            {allMessages !== undefined ? (
              allMessages.map((message, idx) => {
                console.log("mess filter", message);
                return <MessageCard idx={idx} message={message} />;
              })
            ) : (
              <> </>
            )}
          </>
        </div>
        <MessageForm
          selectedState={selectedState}
          setSelectedState={setSelectedState}
          messageState={allMessages}
          setMessageState={setMessageState}
        />
      </>
    );
  } else {
    return <div></div>;
  }
};
