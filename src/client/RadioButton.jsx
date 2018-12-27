import React from "react";

export const RadioButton = (props) => {
    return (
        <div className='radio-button'>
            <input type='radio' id={props.text} name='rating'/>
            <label className='radio-button-label'>{props.text}</label>
        </div>
    )
};