import React from 'react';

function Button (props){
    const { text } = props;
    const { id } = props;
    return (
    <button id={id} class='button'>{text}</button>
    )
}

export default Button