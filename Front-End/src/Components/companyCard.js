//displays company data


export const CompanyCard = ({idx, company}) => {
    console.log('key ', idx)
    
    return(
      
        <div id={company.id} className={"card"}>
            <h2>{company.company} {company.city}</h2>
            <h3>{company.timezone}</h3>
        </div>
    )
}