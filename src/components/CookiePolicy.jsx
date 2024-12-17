import React from 'react';
import '@styling/terminal.css';

function Cookie(){
    return (
        <div class='terminal'>
            <h2>Cookie Policy</h2>
            <p class='legalText'>This website uses cookies to ensure its smooth operation and provide you with the best possible user experience.<br />
            By continuing to browse this site, you agree to our use of essential cookies.<br />
            <h3>Essential Cookies:</h3>
            These cookies are necessary for the website to function properly.<br />
            They enable core functionalities such as page navigation and access to secure areas.<br />
            The website cannot function properly without these cookies.

            <h3>External Cookies:</h3>
            Some pages on this site may include third-party content or services beyond our control, such as embedded videos or social media feeds. <br />
            Please be aware that these external parties may use their own cookies over which we have no control.<br />
            For more information on how these external parties use cookies, please refer to their respective privacy and cookie policies.<br />
            You can manage your cookie preferences through your browser settings. <br />
            Please note that restricting essential cookies may impact the functionality of the website.
            Thank you for visiting our site.</p>
        </div>
    )
}

export default Cookie;