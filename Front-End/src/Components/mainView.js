import React, { useState, useEffect } from "react";
import { InfoSilo } from "./infoSilo";
import { api } from "./api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const MainView = (props) => {
  const [companyState, setCompanyState] = useState();
  const [guestState, setGuestState] = useState();
  const [messageState, setMessageState] = useState();
  const dataCompanies = api.getAll("companies");
  console.log(dataCompanies);

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

  return (
    <Container>
      <Row>
        <Col lg={4}>
            <h2>Click to select a guest</h2>
          <InfoSilo allCompanies={companyState} />
        </Col>
        <Col lg={4}>
         <h2>Click to select a company</h2>
          <InfoSilo allGuests={guestState} />
        </Col>
        <Col lg={4}>
          <InfoSilo allMessages={messageState} />
        </Col>
      </Row>
    </Container>
  );
};
