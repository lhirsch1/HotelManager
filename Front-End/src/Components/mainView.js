import React, {useState, useEffect} from "react"
import {InfoSilo} from "./infoSilo"
import {api} from "./api"


export const MainView = (props) => {

const [companyState, setCompanyState] = useState()
const [guestState, setGuestState] = useState()
const [messageState, setMessageState] = useState()
const dataCompanies = api.getAll("companies")
console.log(dataCompanies)


useEffect(() => {
    api.getAll('companies').then(
        results => {
            console.log('results', results)
            setCompanyState(results)
        }
    )
    api.getAll("guests").then(
        results => {
            console.log('resultsguest ', results)
            setGuestState(results)
        }
    )
},[])

useEffect(()=>{

},[companyState, guestState, messageState])






return (
    <div>
        HOWDY
        <InfoSilo allCompanies={companyState} />
        <InfoSilo allGuests={guestState} />
        <InfoSilo allMessages={messageState} />

    </div>
)

}


