
export const MessageTemplate = (messageType, time, firstName, hotel, roomNumber, signOutTime, customMessage) => {

    const msgWelcome = `Good ${time} ${firstName}, and welcome to ${hotel}! ${roomNumber} is now ready you. Enjoy your stay, and let us know if you need anything.`
    const msgSignOut = `Good ${time} ${firstName}! We hope that you are enjoying your stay with us at ${hotel}! Sign out time for ${roomNumber} is at ${signOutTime}. Enjoy the rest of your stay, and let us know if you need anything.`
    const msgThankYou = `Good ${time} ${firstName}, Thank you for choosing ${hotel}! We hope to see you again soon!`

    switch(messageType){
        case 'welcome':
            return msgWelcome;
        case 'signOut':
            return msgSignOut;
        case 'thankYou':
            return msgThankYou;
        case 'custom':
            return customMessage
    }
}

