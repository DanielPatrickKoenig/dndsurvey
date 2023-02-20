import React from "react";

const Button = () => {

    function clickHandler(){
        console.log('clicked');
    }

    return(
        <button className="button" onClick={clickHandler}>CTA Text</button>
    )
}

export default Button;