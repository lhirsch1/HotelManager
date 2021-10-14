import React from "react";
import {TimeConverter} from "./timeConverter";
import {api} from './api';





export const MessageForm = ({company, guest}) => {

    console.log('msg comp', comp)
    console.log('msg guest');

    // let timePhrase = timeConverter.getTimePhrase(company.timeZone)

//    let welcomeMsg =  `Good ${timePhrase} ${guest.name}, and welcome to ${company.company}! Room ${guest.reservation.roomNumber} is now ready for you. Enjoy your stay, and let us know if you need anything.`
//    let signOutMsg =  `Good ${timePhrase} ${guest.name}, we appreciate you choosing ${company.company}! Sign out time for your room is at ${signOutTime}.  Enjoy the rest of your stay, and let us know if you need anything.`
//    let thankYouMsg =  `Good ${timePhrase} ${guest.name}. We hope that you enjoyed your stay ${company.company}! We hope to see you again in the future.`
//    let customMsg = ``

  const handleSubmit = (e) => {
      console.log('handleSubmit')
    e.preventDefault()
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
        <form onSubmit={handleSubmit}>
            <select>
                <option value="welcome">Welcome</option>
                <option value="signout">Sign Out Reminder</option>
                <option value="thankyou">Thank You</option>
                <option value="custom">Custom</option>
            </select>
            <input type="submit" />
        </form>



    )



}