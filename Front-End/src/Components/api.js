
export const api = {

    baseURL: "http://localhost:8000",

    //get all takes in table and returns all results 
    getAll: async (table) =>{

        const data = await fetch(`${api.baseURL}/${table}`, {
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        return data.json()
    },

    // post is used to update messages and guests tables
    post: async (obj) => {
        const data = await fetch(`${api.baseURL}/messages`, {
            method:"POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        return data.json()
    },

    //used to get a user's messages
    getOne: async (table, id) =>{
        const data = await fetch(`${api.baseURL}/${table}/?userId=${id}`, {
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        return data.json()
    },
}