import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Logo from "./components/svg/Logo";
import Results from "./components/Results";
import Inputs from "./components/Inputs";

function App() {
    const [tip, setTip] = useState(0);
    const [tipAmount, setTipAmount] = useState(0);
    const [bill, setBill] = useState(0);
    const [people, setPeople] = useState(0);

    const getPeopleAmount = (peopleAmount: any) => {
        peopleAmount = Math.round(peopleAmount * 1) / 1;
        setPeople(peopleAmount);
    };

    const getBillAmount = (billAmount: any) => {
        billAmount = Math.round(billAmount * 100) / 100;
        setBill(billAmount);
    };

    const getTipAmount = (tipAmount: any) => {
        tipAmount = Math.round(tipAmount * 1) / 1;
        setTip(tipAmount);
        setTipAmount(tipAmount);
    };

    const getClickedBtn = (buttonAmount: any) => {
        setTip(0);
        setTipAmount(buttonAmount);
    };

    const resetFunc = () => {
        setTip(0);
        setTipAmount(0);
        setPeople(0);
        setBill(0);
    };

    return (
        <>
            <Logo></Logo>
            <div className="calculator">
                <Inputs
                    tip={tip}
                    people={people}
                    bill={bill} //
                    getBillAmount={getBillAmount}
                    getPeopleAmount={getPeopleAmount}
                    getTipAmount={getTipAmount}
                    getClickedBtn={getClickedBtn}
                ></Inputs>
                <Results
                    tipAmount={tipAmount} //
                    people={people}
                    bill={bill}
                    resetFunc={resetFunc}
                ></Results>
            </div>
        </>
    );
}

export default App;
