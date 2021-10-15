# # Lukas Hirsch
## Hotel Message Manager



## Description
This is a program that allows the owner of a chain of hotels to send a variety messages to guests staying at their locations. These messages are generated from data held in json-server to mimic a production database. The owner may also add a new guest by creating a new reservation. 

## Technologies Used
To build this application I used functional React.js and json-server. If this were a deployed application, the data stored in the api.js file would be moved to a node/express server which would be linked to a database. I chose to use React.js because it is a great tool for displaying dynamic data. I made use of several useEffect and useState hooks to update the display as the user makes selections. json-server is one of my favorite tools for creating mock-up apps and websites. Instead of using something like 'fs', json-server allows you to make api calls which are more representative of what the final product would be. 


## Design
The app has three types of data. Hotels, guests, and messages. A hotel can have many guests, a guest can have many messages, a message is linked to one guest, and a guest is linked to one hotel (they could be linked to two, but it is better to think of the guest as a room reservation rather than a person).
The App is configured for desktop, and is split into three columns, one for each data type. The user works their way across the screen from right to left, and the data becomes more atomic as they proceed. The user is not able to add a hotel, but they can create a new guest after selecting one. The selected hotel's information is automatically rendered in the guest.reservation object. After selecting a hotel and specifying a guest, the user is able to view their message history, and send them new messages. These messages are made by using a string inside a template literal with variables that are filled in automatically based on the user and hotel data. The user is then given a preview of the message before they decide to send.
While making this application, my main focus was making the process dynamic and the user changes instantly visible.

## Running the Program

The front end and the back end are running on two different ports.
in the terminal, navigate to HotelManager/Front-End and run the commands:
```sh
npm i
npm start
```
and in another terminal window navigate to HotelManager/Front-End and run:
```sh
npm i
npx json-server --watch db.json --port 8000
```

## Future Development
This has been a fun project, and I will be continuing to work on it. 
My next steps are:
#### Polishing Front End
The app works, but it is ugly. Some features like the Add Guest and Send Message would be better as Modals on desktop. 
#### Validation
For the first stage of development, I did not add comprehensive form validation. I used the vanilla React form elements to make the two forms, but will be converting them to Formik to take advantage of the easy yup validation schemas. For the moment, you will need to act in good faith. 
#### Creating Node/Express backend
Making a real api with a database connection will allow for more complex logic to take place, and allow for data to be shared outside of the local machine. 
#### Integrating Twilio
I have used Twilio on some other projects, and the integration is fairly simple