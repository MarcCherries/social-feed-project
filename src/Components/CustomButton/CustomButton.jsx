import React, { useState, useEffect } from 'react';
import "./CustomButton.css"


const CustomButton = (props) => {

    const [buttonClassUp, setButtonClassUp] = useState ("inactive")
    const [buttonClassDown, setButtonClassDown] = useState ("inactive")

    function handleClickUp (){
        if (buttonClassUp === "inactive" && buttonClassDown === "inactive"){
            setButtonClassUp("active")
        }
        else {
            setButtonClassUp("inactive")
        }
    }
    function handleClickDown (){
        if (buttonClassDown === "inactive" && buttonClassUp === "inactive"){
            setButtonClassDown("active-down")
        }
        else {
            setButtonClassDown("inactive")
        }
    }


    return ( <div>
        <img src={require('./images/icons8-thumbs-up-50.png')} alt="Thumbs up" width="25" className={buttonClassUp} onClick={handleClickUp}/>
        <img src={require('./images/icons8-thumbs-down-50.png')} alt="Thumbs down" width="25" className={buttonClassDown} onClick={handleClickDown}/>
    </div> );
}
 
export default CustomButton;