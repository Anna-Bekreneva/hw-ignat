import React from 'react';
import message from './Message.module.css';

type MessageType = {
	avatar: string,
	name: string,
	message: string,
	time: string,
}

function Message(props: MessageType) {
	return (
		<article className={message.cart}>
            <img className={message.img} src={props.avatar} alt={props.name} width="40" height="40" loading="lazy"/>

            <div className={message.content}>
                <span className={message.name}> {props.name}</span>

                <div className={message.box}>
					<p className={message.message}> {props.message}</p>
                    <time className={message.time}> {props.time} </time>
                </div>

            </div>

        </article>
	);
}

export default Message;
