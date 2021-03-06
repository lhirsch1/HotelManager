import React, { useState, useEffect } from "react";
import { InfoSilo } from "./infoSilo";
import { api } from "./util/api";
import { AddGuest } from "./guest/addGuest";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const MainView = (props) => {
  const [companyState, setCompanyState] = useState();
  const [guestState, setGuestState] = useState();
  const [companyGuestState, setCompanyGuestState] = useState();
  const [messageState, setMessageState] = useState();
  const [selectedState, setSelectedState] = useState({
    company: null,
    guest: null,
  });
  const dataCompanies = api.getAll("companies");
  console.log(dataCompanies);

  let guests = [];

  //useeffect fired on first render
  //sets company state and populates guests array
  useEffect(() => {
    api.getAll("companies").then((results) => {
      console.log("results", results);
      setCompanyState(results);
    });
    api.getAll("guests").then((results) => {
      console.log("resultsguest ", results);
      setGuestState(results);
    });
  }, []);

  useEffect(() => {}, [companyState, guestState, messageState]);

  // this use effect handles when columns are populated
  useEffect(() => {
    if (selectedState.company && !selectedState.guest) {
      setMessageState(null);
      let companyGuests = guestState.filter((guest) => {
        return guest.reservation.hotel === selectedState.company.id;
      });
      console.log("company guests ", companyGuests);
      setCompanyGuestState(companyGuests);
    } else if (selectedState.company && selectedState.guest) {
      //if has messages, populate state
      //no messages, prompt to make
      api.getOne("messages", selectedState.guest.id).then((results) => {
        setMessageState(results);
      });
    } else {
      console.log("no selected ", selectedState);
    }
  }, [selectedState]);

  return (
    <Container>
      <Row>
        <Col>
          <h2>Click to select a company</h2>
        </Col>
        <Col>
        <>
            {selectedState.company ? <h2>Guests of {selectedState.company.company}</h2> : <h2>Select a company to see guests</h2> }
        </>
          
        </Col>
        <Col>
            <>
                {selectedState.guest ? <h2>Message History for {selectedState.guest.firstName} {selectedState.guest.lastName} </h2>
                : <h2>Messages</h2>}
            </>
          
        </Col>
      </Row>
      <Row>
        <Col lg={4}>
          <InfoSilo
            allCompanies={companyState}
            setSelectedState={setSelectedState}
            selectedState={selectedState}
          />
        </Col>
        <Col lg={4}>
           <> 
           {selectedState.company ? <AddGuest selectedState={selectedState} setSelectedState={setSelectedState}/> : <> </>}
        <br></br>
        <br></br>
          <InfoSilo
            allGuests={companyGuestState}
            setSelectedState={setSelectedState}
            selectedState={selectedState}
          />
          </>
        </Col>
        <Col lg={4}>
          <InfoSilo
            allMessages={messageState}
            setMessageState={setMessageState}
            setSelectedState={setSelectedState}
            selectedState={selectedState}
          />
        </Col>
      </Row>
    </Container>
  );
};
