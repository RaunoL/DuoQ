import React from 'react';

function Background (props){
    const { children } = props;
    return (
    <div className='bg'>{children}</div>
    )
}
export default Background