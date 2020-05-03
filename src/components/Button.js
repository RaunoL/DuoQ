import React from 'react';

function Button (props){
    const { text } = props;
    const { id } = props;
    const { handleEvent } = props;
    return (
    <button id={id} class='button' onClick={handleEvent}>{text}</button>
    )
}

export default Button