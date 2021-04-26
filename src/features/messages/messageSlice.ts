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
        getMessages: (state, { payload }: PayloadAction<Message[]>) => {
            const messageList = payload;
            return {
                ...state,
                messageList: [...messageList],
            };
        },

        deleteMessage: (state, { payload }: PayloadAction<number>) => {
            const updatedMessages = state.messageList.filter((message) => message.id !== payload);
            return {
                ...state,
                messageList: updatedMessages,
            };
        },
        addCustomMessage: (state, { payload }: PayloadAction<AddMessage>) => {
            const updatedMessages = state.messageList.filter(
                (message) => message.id === payload.id,
            );
            /* eslint-disable functional/immutable-data */
            // redux toolkit encourages mutating deeply nested objects because it uses immer
            updatedMessages[0].customMessage = payload.customMessage;
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

export const messageListSelector = (state: RootState): RootState["messages"] => state.messages;
export const messageReducer = messageSlice.reducer;
