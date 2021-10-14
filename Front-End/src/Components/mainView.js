import React, { useState, useEffect } from "react";
import { InfoSilo } from "./infoSilo";
import { api } from "./api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const MainView = (props) => {
  const [companyState, setCompanyState] = useState();
  const [guestState, setGuestState] = useState();
  const [companyGuestState, setCompanyGuestState] = useState();
  const [messageState, setMessageState] = useState();
  const [selectedState, setSelectedState] = useState({"company": null, "guest":null});
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
    setGuestState(results)
    });
  }, []);

  useEffect(() => {}, [companyState, guestState]);


  // this use effect handles when columns are populated
  useEffect(() => {
    console.log('selected state changed', selectedState)
    if(selectedState.company && !selectedState.guest){

        let companyGuests = guestState.filter((guest)=> {
            return guest.reservation.hotel === selectedState.company
        });
        console.log('company guests ', companyGuests)
        setCompanyGuestState(companyGuests)
    }
    else if(selectedState.company && selectedState.guest){
        console.log('select populated', selectedState)
        api.getOne('messages', selectedState.guest)
    }
    else{
        console.log('no selected ', selectedState)
    }
  },[selectedState])

  return (
    <Container>
      <Row>
        <Col lg={4}>
            <h2>Click to select a company</h2>
          <InfoSilo allCompanies={companyState} setSelectedState={setSelectedState} selectedState={selectedState} />
        </Col>
        <Col lg={4}>
         <h2>Click to select a guest</h2>
          <InfoSilo allGuests={companyGuestState} setSelectedState={setSelectedState} selectedState={selectedState} />
        </Col>
        <Col lg={4}>
          <InfoSilo allMessages={messageState}/>
        </Col>
      </Row>
    </Container>
  );
};
