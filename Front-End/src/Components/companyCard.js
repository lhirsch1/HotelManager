//displays company data


export const CompanyCard = ({key, company}) => {
    
    return(
        <>
            <h2>{company.company} {company.city}</h2>
            <h3>{company.timezone}</h3>
        </>
    )
}