import React from 'react';
import notfoundpage from "../../../images/notfoundpage.png"
import "./NotFound.css"

const NotFound = () => {
    return (
        <div className='notFoundPage'>
            <img src={notfoundpage} alt="" />
        </div>
    );
};

export default NotFound;