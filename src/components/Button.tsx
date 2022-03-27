import React from "react";

function Button({ value, getClickedBtn }: any) {
    return (
        <button
            onClick={() => {
                getClickedBtn(value);
            }}
        >
            {value}%
        </button>
    );
}

export default Button;
