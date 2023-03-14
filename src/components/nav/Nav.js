import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    
    return (
        <nav>
            <ul>
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/beaches">Beaches</Link>
                <Link className='link' to="/mountains">Mountains</Link>
                 <Link className='link' to="/birds">Birds</Link>
                 <Link className='link' to="/foods">Foods</Link>
            </ul>
        </nav>
    );
}

export default Nav;