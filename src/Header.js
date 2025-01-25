import React from 'react';
import './Header.css';

function Header({ heading ="Todo List"}) {
    return (
        <div className="header">
            <h1>{heading}</h1>
        </div>
    );
}

/*Header.defaultProps = {
    heading: "hello",
}; this is not working*/

export default Header;