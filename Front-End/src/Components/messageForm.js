import React, {useEffect, useState} from "react";
import {TimeConverter} from "./timeConverter";
import { MessageTemplate } from "./messageTemplate";
import {api} from './api';





export const MessageForm = ({selectedState, setSelectedState}) => {

    console.log('msg comp', selectedState)

    const [msgType, setMsgType] = useState();
    const [msgBody, setMsgBody] = useState();


    let daytime = TimeConverter(selectedState.company.timezone)
    

    useEffect(()=>{
    let firstName = selectedState.guest.firstName;
    let company = selectedState.company.company;
    let timePhrase = daytime;
    let roomNumber = selectedState.guest.reservation.roomNumber
    //messagetype, time, firstname, otel, roomNumber, signOutTime, customMessage
    let generatedMsg = MessageTemplate(msgType, daytime, firstName, company,roomNumber, 'noon', '' )   
    setMsgBody(generatedMsg)

    },[msgType])


  const handleSubmit = (e) => {
      console.log('handleSubmit')
    e.preventDefault()
    console.log('event ', msgBody )
    let msgObj =  {
        "userId":selectedState.guest.id,
        "companyId":selectedState.company.id,
        "type": msgType,
        "body": msgBody,
        "dateTime":1634232820
    }


    console.log('msg obj', JSON.stringify(msgObj))
    api.post(msgObj).then((res)=>{
        console.log(res)
    })
    
   }
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <select value={msgType} onChange={e =>{setMsgType(e.target.value)}}>
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



    )



}