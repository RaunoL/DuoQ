import React from 'react';

function Button (props){
    const { text } = props;
    const { id } = props;
    const { type } = props;
    return (
    <button type={type} id={id} class='button'>{text}</button>
    )
}

export default Button