/* eslint-disable functional/immutable-data */
/* eslint-disable functional/no-conditional-statement */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk, RootState } from "../../app/store";
import { getMessagesList } from "../../fakeApi";
import { messageToInsert } from "../../data-mocks/messages";

interface MessageContentObject {
    source: string;
    amount: number;
}
export type CustomMessage = typeof messageToInsert;

interface AddMessage {
    id: number;
    customMessage: CustomMessage;
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

export interface InitialState {
    messageList: Message[];
    customMessages?: CustomMessage[];
}

const initialState: InitialState = {
    messageList: [],
};

export const messageSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        getMessages: (state, { payload }: PayloadAction<Message[]>) => ({
            ...state,
            messageList: payload,
        }),
        deleteMessage: (state, { payload }: PayloadAction<number>) => {
            const updatedMessages = state.messageList.filter((message) => message.id !== payload);
            return {
                ...state,
                messageList: updatedMessages,
            };
        },
        addCustomMessage: (state, { payload }: PayloadAction<AddMessage>) => {
            const updatedMessages = state.messageList.map((message) => {
                if (message.id === payload.id) {
                    // eslint-disable-next-line functional/immutable-data
                    message.customMessage = payload.customMessage;
                }
                return message;
            });
            state.messageList = updatedMessages;
            state.customMessages = [payload.customMessage];
        },
    },
});

export const { addCustomMessage, getMessages, deleteMessage } = messageSlice.actions;
export const getMessagesAsync = (): AppThunk => async (
    dispatch: (arg0: { payload: Message[]; type: string }) => void,
) => {
    getMessagesList().subscribe((messages) => dispatch(getMessages(messages)));
};

export const messageListSelector = (state: RootState) => state.messages;
export const messageReducer = messageSlice.reducer;
