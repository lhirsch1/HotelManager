
export const MessageTemplate = (messageType, time, firstName, hotel, roomNumber, signOutTime, customMessage) => {
    console.log('template hit ', messageType)
    const msgWelcome = `Good ${time} ${firstName}, and welcome to ${hotel}! ${roomNumber} is now ready you. Enjoy your stay, and let us know if you need anything.`
    const msgSignOut = `Good ${time} ${firstName}! We hope that you are enjoying your stay with us at ${hotel}! Sign out time for ${roomNumber} is at seven. Enjoy the rest of your stay, and let us know if you need anything.`
    const msgThankYou = `Good ${time} ${firstName}, Thank you for choosing ${hotel}! We hope to see you again soon!`

    switch(messageType){
        case 'welcome':
            console.log('welcome hit')
            return msgWelcome;
        case 'signout':
            console.log('sign out hit')
            return msgSignOut;
        case 'thankyou':
            console.log('thankyou hit')
            return msgThankYou;
        case 'custom':
            console.log('custom hit')
            return customMessage
    }
}

