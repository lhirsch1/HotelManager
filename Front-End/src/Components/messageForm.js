import React, { useEffect, useState } from "react";
import { TimeConverter } from "./timeConverter";
import { MessageTemplate } from "./messageTemplate";
import { api } from "./api";

export const MessageForm = ({ selectedState, setSelectedState, messageState, setMessageState }) => {
  console.log("all messages form ", messageState);
  console.log('message form selectedstate', selectedState)

  const [msgType, setMsgType] = useState();
  const [msgBody, setMsgBody] = useState();

  let daytime = TimeConverter(selectedState.company.timezone);
  console.log('daytime', daytime)

  useEffect(() => {
    let firstName = selectedState.guest.firstName;
    let company = selectedState.company.company;
    let timePhrase = daytime;
    let roomNumber = selectedState.guest.reservation.roomNumber;
    //messagetype, time, firstname, otel, roomNumber, signOutTime, customMessage
    let generatedMsg = MessageTemplate(
      msgType,
      daytime,
      firstName,
      company,
      roomNumber,
      "noon",
      ""
    );
    setMsgBody(generatedMsg);
  }, [msgType]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let msgObj = {
      userId: selectedState.guest.id,
      companyId: selectedState.company.id,
      type: msgType,
      body: msgBody,
      dateTime: 1634232820,
    };
    api.post(msgObj).then((res) => {
      api.getOne("messages",selectedState.guest.id).then((res) =>{
          
            setMessageState(res)
      })
      
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select
          value={msgType}
          onChange={(e) => {
            setMsgType(e.target.value);
          }}
        >
          <option>Select message type</option>
          <option value="welcome">Welcome</option>
          <option value="signout">Sign Out Reminder</option>
          <option value="thankyou">Thank You</option>
          <option value="custom">Custom</option>
        </select>
        <input type="submit" />
      </form>
      <span>Preview Message : {msgBody}</span>
    </div>
  );
};
