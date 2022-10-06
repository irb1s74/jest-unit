import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (<div>
            <Link to="/" data-testid="link-main"> main </Link>
            <Link to="/about" data-testid="link-about"> about </Link>
            <Link to="/user" data-testid="link-users"> users </Link>
        </div>);
};

export default Navbar;
