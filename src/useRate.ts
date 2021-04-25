import { useState } from "react";
import { interval } from "rxjs";
import { mergeMap } from "rxjs/operators";

const fetchUrl = "https://api.coindesk.com/v1/bpi/currentprice/USD.json";
const poolingInterval = 10000;

export const useRate = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    interval(poolingInterval)
        .pipe(
            mergeMap(() =>
                fetch(fetchUrl).then((data) => {
                    setIsLoaded(true);
                    return data.json();
                }),
            ),
        )
        .subscribe((data) => {
            data;
        });

    return isLoaded;
};
