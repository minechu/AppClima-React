import React from 'react';

const Header = ({titulo}) => {
    return(
        <header>
            <nav className="nav-wrapper light-blue darken-2">
                <a href="#!" className="brand-logo">{titulo}</a>
            </nav>
        </header>
    );
}

export default Header;