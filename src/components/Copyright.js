import React from 'react';
import '../styling/terminal.css';

function CopyrightLicense(){
    return (
        <div className='terminal'>
            <p className='legalText'>
            <h2>Website and Code Copyright License</h2>
            This website and its associated code are protected by copyright law.<br />
            All rights are reserved. No part of the code or content may be copied, modified, sold, or used without<br /> explicit written permission from the website administrator.<br />

            <h3>Restrictions:</h3>
            The code, including but not limited to scripts, stylesheets, and markup, may not be reproduced or distributed without permission.<br />
            The name, icons, and text of the website are proprietary and may not be reused without explicit written consent.<br />
            <h3>Exceptions:</h3>
            Exceptions to these restrictions may be granted by the website administrator on a case-by-case basis.<br />
            Requests for exceptions should be submitted in writing.<br /><br />
            Unauthorized use or reproduction of the website or its code may result in legal action.</p>
        </div>
    )
}

export default CopyrightLicense;