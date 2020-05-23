import React from 'react';
function Input(props){
    const {id} = props;
    const {placeholder}= props;
    const {type}= props;
    const {width}= props;
    const widthStyle = {
        width: width
    }
    return(
        <input style={widthStyle} className="input" type={type} id={id} placeholder={placeholder}></input>
    )
}
export default Input