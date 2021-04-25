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
} from "./messageSlice";

export const List = (): JSX.Element => {
    const dispatch = useDispatch();
    const { messageList } = useSelector(messageListSelector, shallowEqual);

    useEffect(() => {
        dispatch(getMessagesAsync());
    }, [dispatch]);
    console.log(messageList);
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
            {messageList &&
                messageList.map((message: MessageType) => (
                    <Message key={message.id ?? message.text} message={message} />
                ))}
        </>
    );
};
