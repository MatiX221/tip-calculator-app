import React from "react";

function Results({ tip, people, bill, tipAmount, resetFunc }: any) {
    tipAmount = tipAmount / 100;
    var totalTip: any;
    var total: any;

    if (people > 0) {
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
            <p>
                {tip} {people} {bill} {tipAmount}
            </p>
            <div className="total__tip">{totalTip}</div>
            <div className="total__amount">{total}</div>
            <div className="resetBtn" onClick={() => resetFunc()}>
                <p>Reset</p>
            </div>
        </div>
    );
}

export default Results;
