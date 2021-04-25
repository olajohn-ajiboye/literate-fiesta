import { combineReducers } from "@reduxjs/toolkit";

import { messageReducer } from "../features/messages/messageSlice";
export const rootReducer = combineReducers({
    messages: messageReducer,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type RootState = ReturnType<any>;
