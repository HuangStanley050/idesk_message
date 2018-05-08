const initialstate = {
    msg1: "Welcome to ITS, my name is Stanley, how may I help you?",
    msg2: "As your call has now been resolved no further action will be taken.  You will receive a call reference number for your records.  Thanks for contacting ITS.",
    msg3: "I haven’t received a response from you in a while. I understand you might be currently busy and unable to continue this chat at the moment. if I don’t hear from you shortly, I will end this chat sessions and an ITS Representative will follow up with you. A call reference number has been email to you for your reference.",
    msg4: "We are currently experiencing high call volumes. We will attend to your call as soon as possible. For urgent matters please contact ITS on Skype via ITS Australia, 1800 10 7007 or +61 2 9308 3777. Thank you",
    msg5: `In order to address your issue we require to speak with you.
            Could you please call ITS at your convenience. 
            You may reach ITS via: 
            1. Skype: Look up ITS Australia 
            2. National Free Call: 1800 10 7007
            3. National/International Call:+61 2 9308 3777 `

}

const reducer = (state = initialstate, action) => {
    return state;
}

export default reducer;
