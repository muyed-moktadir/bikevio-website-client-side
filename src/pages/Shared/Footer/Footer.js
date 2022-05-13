import React from 'react';
import "./Footer.css"
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer'>
           <div>
           <h3>Bikevio</h3>
            <h4><small>copyright @ {year} </small></h4>
           </div>
           <div>
               <h4 style={{marginBottom:"0px"}}>facebook</h4>
               <h4 style={{marginTop:'0px',marginBottom:"0px"}}>google</h4>
               <h4 style={{marginTop:'0px'}}>twitter</h4>
           </div>
        </footer>
    );
};

export default Footer;