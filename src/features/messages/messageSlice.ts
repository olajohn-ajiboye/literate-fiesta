/* eslint-disable functional/no-conditional-statement */
/* eslint-disable functional/immutable-data */
/* eslint-disable no-console */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk } from "../../app/store";
import { RootState } from "../../app/rootReducer";
import { getMessagesList } from "../../fakeApi";
import { messageToInsert } from "../../data-mocks/messages";

interface MessageContentObject {
    source: string;
    amount: number;
}

interface MessageWithCustom {
    id: number;
    customMessage: typeof messageToInsert;
}

type MessageContent = Array<MessageContentObject> | string;

export type Message = {
    id: number;
    text: string;
    canDelete: boolean;
    btcAmount: number;
    messageType: string;
    messageContent: MessageContent;
    customMessage?: typeof messageToInsert;
};

const initialState: Array<Message> = [];

export const messageSlice = createSlice({
    name: "messages",
    initialState: { messageList: initialState },
    reducers: {
        getMessages: (state, { payload }: PayloadAction<Message[]>) => {
            state.messageList = payload;
        },
        deleteMessage: (state, { payload }: PayloadAction<number>) => {
            const updatedMessages = state.messageList.filter((message) => message.id !== payload);
            state.messageList = updatedMessages;
        },
        addCustomMessage: (state, { payload }: PayloadAction<MessageWithCustom>) => {
            state.messageList = state.messageList.map((message) => {
                if (message.id === payload.id) {
                    message.customMessage = payload.customMessage;
                }
                return message;
            });
        },
    },
});

export const { addCustomMessage, getMessages, deleteMessage } = messageSlice.actions;
export const getMessagesAsync = (): AppThunk => async (dispatch) => {
    getMessagesList().subscribe((messages) => dispatch(getMessages(messages)));
};

export const messageListSelector = (state: RootState) => state.messages;
export const messageReducer = messageSlice.reducer;
