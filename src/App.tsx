import React from "react";

import { useRate } from "./useRate";
import { List } from "./features/messages/List";

export const App = () => {
    const isReadyToRender = useRate();
    return isReadyToRender ? <List /> : <p>We loading rate for u. Wait a bit</p>;
};
