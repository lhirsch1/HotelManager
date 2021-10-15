import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { api } from "./api";

export const AddGuest = ({ selectedState, setSelectedState }) => {
  //this state is used to conditionally render the form
  const [showState, setShowState] = useState(0);
  //holds info for post
  const [newGuestState, setNewGuestState] = useState({
    firstName: null,
    lastName: null,
    roomNumber: null,
  });

  //date info for post
  const [startDateValue, setStartDateValue] = useState(new Date());
  const [endDateValue, setEndDateValue] = useState(new Date());

  //form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let newGuest = {
      id: "",
      firstName: newGuestState.firstName,
      lastName: newGuestState.lastName,
      reservation: {
        hotel: selectedState.company.id,
        roomNumber: newGuestState.roomNumber,
        startTimeStamp: startDateValue.valueOf(),
        endTimeStamp: startDateValue.valueOf(),
      },
    };
    //posts to db
    api.postGuest(newGuest).then((res) => {
      console.log(res);
    });
    setSelectedState({...selectedState.company, guest:newGuest })
  };
  return (
    <div>
      {showState === 0 ? (
        <button onClick={(e) => setShowState(1)}>Add New Guest</button>
      ) : (
        <> </>
      )}
      {showState === 1 ? (
        <form onSubmit={handleSubmit}>
          <h4>New {selectedState.company.company} Guest</h4>
          <br></br>
          <input
            onChange={(e) => {
              setNewGuestState({ ...newGuestState, firstName: e.target.value });
            }}
            type="text"
            name="firstName"
            label="First Name"
          ></input>
          <label >First Name</label>
          <br></br>
          <input
            onChange={(e) => {
              setNewGuestState({ ...newGuestState, lastName: e.target.value });
            }}
            type="text"
            name="lastName"
            label="last Name"
          ></input>
          <label >Last Name</label>
          <br></br>
          <input
            onChange={(e) => {
              setNewGuestState({
                ...newGuestState,
                roomNumber: e.target.value,
              });
            }}
            type="text"
            name="roomNumber"
            label="Room Number"
          ></input>
          <label>Room Number</label>
          <br></br>
          <label>Start Date</label>
          <DatePicker
            name="startDate"
            selected={startDateValue}
            onChange={(date) => setStartDateValue(date)}
          />
          <br></br>
          <label>End Date</label>
          <DatePicker
            selected={endDateValue}
            onChange={(date) => setEndDateValue(date)}
          />

          <input type="submit" />
          <br></br>
          <button onClick={(e) => setShowState(0)}>Cancel Add Guest</button>
        </form>
      ) : (
        <> </>
      )}
    </div>
  );
};
