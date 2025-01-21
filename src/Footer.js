import React from 'react';
import './Footer.css';
function Footer(){
    const year=new Date();
return(
    <div className='footer'>
        <p>Copyyright &copy;{year.getFullYear()}</p>
    </div>)
}
export default Footer;