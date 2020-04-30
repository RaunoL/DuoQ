import React from 'react';
function Container (props) {
    const { children } = props;
    return(
    <div class='container'>{children}</div>
    )
}
export default Container