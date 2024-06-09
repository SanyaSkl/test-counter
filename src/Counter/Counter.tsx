import React from "react";
import {Button} from "../Button/Button";

type CountType = {
count: number
    setCount: (count: number) => void
    disabledInc: boolean
    setDisabledInc: ( disableInc: boolean) => void
    disabledReset: boolean
    setDisabledReset: (disabledReset: boolean) => void
}

export const Counter = (props: CountType) => {
const {count, setCount, disabledInc, setDisabledInc, disabledReset, setDisabledReset} = props

    const handleIncrement = () => {
        if (count < 5) {
            setCount(count + 1);
            setDisabledReset(false);
        } else {
            setDisabledInc(true);
        }

    };

    const handleReset = () => {
        setCount(0);
        setDisabledInc(false);
        setDisabledReset(true);
    };


    return (
        <div className="countBox">
            <h1 className={count === 5 ? "countEnd" : "count"}>{count}</h1>
            <div className="buttonBox">
                <Button onClick={handleIncrement}
                        title={"inc"}
                        className={"button"}
                        disabled={disabledInc}
                />
                <Button onClick={handleReset}
                        title={"reset"}
                        className={"button"}
                        disabled={disabledReset}
                />
            </div>
        </div>
    );
};
