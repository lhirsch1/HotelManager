import React, {useState, useEffect} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {api} from "./api";



export const AddGuest = ({allCompanies}) =>{

    const [showState, setShowState]=useState(0)


    const [newGuestState, setNewGuestState] = useState({
        firstName: null,
        lastName: null,
        company:null,
        roomNumber: null,

    });

    const [startDateValue, setStartDateValue] = useState(new Date());
    const [endDateValue, setEndDateValue] = useState(new Date());


    const handleSubmit = (e) => {
        // e.preventDefault()
        let newGuest =  {
            "id":"",
            "firstName":newGuestState.firstName,
            "lastName":newGuestState.lastName,
            "reservation":{
                "hotel": parseInt(newGuestState.company, 10),
                "roomNumber": newGuestState.roomNumber,
                "startTimeStamp": startDateValue.valueOf(),
                "endTimeStamp": startDateValue.valueOf(),
            }
        }
        console.log('new guest ' , newGuest)
        api.postGuest(newGuest).then((res)=>{
             console.log(res)
         })
        
       }
        return (




            <div>

            <button onClick={e => setShowState(1)}>Add New Guest</button>

            {showState === 1 ? <form onSubmit={handleSubmit}>
                <select name="hotel" value={newGuestState.company} onChange={e =>{setNewGuestState({...newGuestState,"company":e.target.value})}}>
                    <option>Select Hotel</option>
                    <option value={1}>Hotel California</option>
                    <option value={2}>The Grand Budapest Hotel</option>
                    <option value={3}>The Heartbreak Hotel</option>
                    <option value={4}>The Prancing Pony</option>
                    <option value={5}>The Fawlty Towers</option>
                </select>
                <label for="hotel">Hotel</label>
                <br></br>
                <input onChange={e =>{setNewGuestState({...newGuestState,"firstName":e.target.value})}} type="text" name="firstName" label="First Name"></input>
                <label for="firstName">First Name</label>
                <br></br>
                <input onChange={e =>{setNewGuestState({...newGuestState,"lastName":e.target.value})}}type="text" name="lastName" label="last Name"></input>
                <label for="lastName">Last Name</label>
                <br></br>
                <input onChange={e =>{setNewGuestState({...newGuestState,"roomNumber":e.target.value})}}type="text" name="roomNumber" label="Room Number"></input>
                <label for="roomNumber">Room Number</label>
                <br></br>
                <label for="startDate">Start Date</label>
                <DatePicker name="startDate" selected={startDateValue} onChange={date => setStartDateValue(date)} />
                <br></br>
                <label for="endDate">End Date</label>
                <DatePicker selected={endDateValue} onChange={date => setEndDateValue(date)} />
                <label for="startDate">Start Date</label>
                <input type="submit" />
            </form> : <> </>}
            
            </div>
    
    
    
        )
    







}