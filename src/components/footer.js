import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return(
        <footer>
            <div>
                <Link to="/"><img src="/images/logo.png" alt="NBA" /></Link>
            </div>
        </footer>
    )
}

export default Footer;