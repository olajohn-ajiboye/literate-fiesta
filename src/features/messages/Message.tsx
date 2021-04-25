/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import { MessageContent } from "./MessageContent";
import { Message as MessageType } from "../messages/messageSlice";

interface MessageProps {
    message: MessageType;
}
export function Message({ message }: MessageProps): JSX.Element {
    const { messageContent, text } = message;
    return (
        <div>
            <h1>{text}</h1>
            {/* <MessageContent message={messageContent} /> */}
            <button>Delete</button>
            <button>Add</button>
        </div>
    );
}
