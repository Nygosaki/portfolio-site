import React from 'react';
import '../styling/terminal.css';

function Privacy(){
    return (
        <div class='terminal'>
            <p class='legalText'>
                <h2>Privacy Policy</h2>
                <h3>Privacy Assurance:</h3>
                We prioritize and respect the privacy of our users.<br />
                We do not track our users, sell any personal information, or identify users in any way.<br />

                <h3>External Services:</h3>
                While we do not engage in user tracking or data selling, some external services integrated into our website may have their own privacy policies.<br />
                We encourage users to review these policies for a comprehensive understanding.<br />

                <h3>Data Collection:</h3>
                We do not collect personally identifiable information about our users.<br />
                Any data collected is for the sole purpose of improving user experience and is handled with the utmost confidentiality.<br />

                <h3>Cookies:</h3>
                Our website may use cookies for functionality purposes only.<br />
                These cookies do not store personal information and are used to enhance user experience.<br />

                <h3>Third-Party Links:</h3>
                Our website may contain links to external sites.<br />
                We are not responsible for the privacy practices or content of these sites.<br />
                Users are encouraged to review the privacy policies of linked websites.<br />

                <h3>Updates to Privacy Policy:</h3>
                This policy may be updated periodically.<br />
                Users will not be notified of any changes.<br /></p>
        </div>
    )
}

export default Privacy;