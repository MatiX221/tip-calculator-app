import React from "react";
import Button from "./Button";
import Dollar from "./svg/Dollar";
import Person from "./svg/Person";

function Inputs({ bill, people, tip, getBillAmount, getPeopleAmount, getTipAmount, getClickedBtn }: any) {
    return (
        <div className="inputs">
            <div className="bill">
                <p>Bill</p>
                <div className="input__container">
                    <Dollar></Dollar>
                    <input
                        className="input"
                        type="number"
                        step="0.01" //
                        value={bill === 0 ? "" : bill}
                        onInput={(event: any) => getBillAmount(event.target.value)}
                        placeholder="0"
                    />
                </div>
            </div>
            <div className="tip">
                <p>Select Tip %</p>
                <Button getClickedBtn={getClickedBtn} value="5"></Button>
                <Button getClickedBtn={getClickedBtn} value="10"></Button>
                <Button getClickedBtn={getClickedBtn} value="15"></Button>
                <Button getClickedBtn={getClickedBtn} value="25"></Button>
                <Button getClickedBtn={getClickedBtn} value="50"></Button>
                <input
                    className="tip__input"
                    type="number"
                    step="1" //
                    value={tip === 0 ? "" : tip}
                    onInput={(event: any) => getTipAmount(event.target.value)}
                    placeholder="Custom"
                />
            </div>
            <div className="people">
                <p>Number of People</p>
                <div className="input__container">
                    <Person></Person>
                    <input
                        className="input"
                        type="number"
                        step="1" //
                        value={people === 0 ? "" : people}
                        onInput={(event: any) => getPeopleAmount(event.target.value)}
                        placeholder="0"
                    />
                </div>
            </div>
        </div>
    );
}

export default Inputs;
