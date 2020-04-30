import React from 'react';

function Background (props){
    const { children } = props;
    return (
    <div class='bg'>{children}</div>
    )
}
export default Background