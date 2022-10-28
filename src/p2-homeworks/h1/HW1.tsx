import React from 'react'
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Artem',
    message: 'npm start нажимал?',
    time: '22:00',
}

function HW1() {
    return (
        <section className="section">
            <div className="container">
                <h2 className="title">Homework 1</h2>
                <Message avatar={messageData.avatar} name={messageData.name} message={messageData.message} time={messageData.time}/>
            </div>
        </section>
    )
}

export default HW1
