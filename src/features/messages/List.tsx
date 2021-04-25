/* eslint-disable no-console */
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { messageToInsert } from "../../data-mocks/messages";
import { Message } from "./Message";
import {
    Message as MessageType,
    messageListSelector,
    getMessagesAsync,
    deleteMessage,
    addCustomMessage,
    CustomMessage,
} from "./messageSlice";

export const List = (): JSX.Element => {
    const dispatch = useDispatch();
    const { messageList, customMessages } = useSelector(messageListSelector, shallowEqual);

    useEffect(() => {
        dispatch(getMessagesAsync());
    }, [dispatch]);

    console.log(messageList, customMessages);

    return (
        <>
            <button onClick={() => dispatch(deleteMessage(2))}>Delete</button>
            <button
                onClick={() =>
                    dispatch(addCustomMessage({ id: 2, customMessage: messageToInsert }))
                }
            >
                Add
            </button>
            {messageList?.map((message: MessageType) => (
                <Message key={message.id} message={message} />
            ))}
            {customMessages?.map((msg: CustomMessage) => (
                <h1 key={msg.text}>{msg.text}</h1>
            ))}
        </>
    );
};
