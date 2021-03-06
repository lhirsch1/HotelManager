//displays company data


export const CompanyCard = ({idx, company, setSelectedState, selectedState}) => {
    // console.log('key ', idx)

    const handleClick = (id) => {
        console.log('company click ', company)
        setSelectedState({"company":company, "guest":null})
    }
    
    return(
      
        <button 
        // className={"card"} 
        // onclick={()=>setSelectedState({...selectedState, "company": company.id})} 
        onClick={()=> {handleClick(company.id)}}

        >
            <h2>{company.company} {company.city}</h2>
            <h3>{company.timezone}</h3>
        </button>
    )
}