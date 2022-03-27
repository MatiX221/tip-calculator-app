import React from "react";
import Button from "./Button";

function Inputs({ bill, people, tip, getBillAmount, getPeopleAmount, getTipAmount, getClickedBtn }: any) {
    return (
        <div className="inputs">
            <div className="bill">
                <input
                    className="input"
                    type="number"
                    step="0.01" //
                    value={bill === 0 ? "" : bill}
                    onInput={(event: any) => getBillAmount(event.target.value)}
                    placeholder="0"
                />
            </div>
            <div className="tip">
                <Button getClickedBtn={getClickedBtn} value="5"></Button>
                <Button getClickedBtn={getClickedBtn} value="10"></Button>
                <Button getClickedBtn={getClickedBtn} value="15"></Button>
                <Button getClickedBtn={getClickedBtn} value="25"></Button>
                <Button getClickedBtn={getClickedBtn} value="50"></Button>
                <input
                    className="tip"
                    type="number"
                    step="1" //
                    value={tip === 0 ? "" : tip}
                    onInput={(event: any) => getTipAmount(event.target.value)}
                    placeholder="Custom"
                />
            </div>
            <div className="people">
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
    );
}

export default Inputs;
