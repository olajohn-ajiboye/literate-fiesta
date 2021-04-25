import { of } from "rxjs";
import { delay } from "rxjs/operators";

import { shuffledMessageList } from "./data-mocks/messages";

export const getMessagesList = () => of(shuffledMessageList).pipe(delay(50));
