import React from "react";
import Dollar from "./svg/Dollar";

function Results({ people, bill, tipAmount, resetFunc }: any) {
    tipAmount = tipAmount / 100;
    var totalTip: any;
    var total: any;

    if (people > 0 && tipAmount >= 0) {
        totalTip = (bill * tipAmount) / people;
        total = (bill * tipAmount + bill) / people;
    } else {
        total = 0;
        totalTip = 0;
    }

    totalTip = totalTip.toFixed(2);
    total = total.toFixed(2);

    return (
        <div className="results">
            <div className="total__tip">
                <div className="per-person">
                    <p className="amount">Tip Amount</p>
                    <p className="person">/ person</p>
                </div>
                <div className="total">
                    <Dollar></Dollar>
                    {totalTip}
                </div>
            </div>
            <div className="total__amount">
                <div className="per-person">
                    <p className="amount">Tip Amount</p>
                    <p className="person">/ person</p>
                </div>
                <div className="total">
                    <Dollar></Dollar>
                    {total}
                </div>
            </div>
            <div className="reset-btn" onClick={() => resetFunc()}>
                <p>RESET</p>
            </div>
        </div>
    );
}

export default Results;
