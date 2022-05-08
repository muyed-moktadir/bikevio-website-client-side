import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
            <h3>Bikevio</h3>
            <h4><small>copyright @ {year} </small></h4>
        </footer>
    );
};

export default Footer;