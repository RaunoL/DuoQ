import React from 'react';

function Button (props){
    const { text } = props;
    const { id } = props;
    const { type } = props;
    const {action} = props;
    return (
    <button type={type} id={id} onClick={action} class='button'>{text}</button>
    )
}

export default Button