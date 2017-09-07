import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <div className="top-header">
                <Link to="/"><img src="/images/logo.png" alt="NBA" /></Link>
                <Link to="/teams" className="teamLink">Teams</Link>
            </div>
            <div className="grey-div" style={{backgroundColor: '#efefef'}}>
            </div>
        </header>
    )
}

export default Header;