import React, {useEffect, useState} from "react";
import {TimeConverter} from "./timeConverter";
import { MessageTemplate } from "./messageTemplate";
import {api} from './api';





export const MessageForm = ({selectedState, setSelectedState}) => {

    console.log('msg comp', selectedState)

    const [msgType, setMsgType] = useState();
    const [msgBody, setMsgBody] = useState();
    console.log('message type ', msgType)
    console.log('msg', msgBody)

    useEffect(()=>{
    let firstName = selectedState.guest.firstName;
    let company = selectedState.company.company;
    let timePhrase = selectedState.guest.firstName;
    let roomNumber = selectedState.guest.reservation.roomNumber
    // let welcomeMsg =  `Good afternoon ${firstName}, and welcome to ${company}! Room ${roomNumber} is now ready for you. Enjoy your stay, and let us know if you need anything.`
    //messagetype, time, firstname, otel, roomNumber, signOutTime, customMessage
    let generatedMsg = MessageTemplate(msgType,'afternoon', firstName, company,roomNumber, 'noon', '' )   
    setMsgBody(generatedMsg)



    },[msgType])

    // let timePhrase = timeConverter.getTimePhrase(company.timeZone)

//    let welcomeMsg =  `Good ${timePhrase} ${guest.name}, and welcome to ${company.company}! Room ${guest.reservation.roomNumber} is now ready for you. Enjoy your stay, and let us know if you need anything.`
//    let signOutMsg =  `Good ${timePhrase} ${guest.name}, we appreciate you choosing ${company.company}! Sign out time for your room is at ${signOutTime}.  Enjoy the rest of your stay, and let us know if you need anything.`
//    let thankYouMsg =  `Good ${timePhrase} ${guest.name}. We hope that you enjoyed your stay ${company.company}! We hope to see you again in the future.`
//    let customMsg = ``

  const handleSubmit = (e) => {
      console.log('handleSubmit')
    e.preventDefault()
    console.log('event ', msgBody )
    let msgObj =  {
        "userId":2,
        "companyId":3,
        "type": "thankyou",
        "body":"hi there",
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