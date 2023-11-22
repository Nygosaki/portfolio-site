import React from 'react';
import '../styling/terminal.css';

function Legal() {
    return (
        <div className='terminal'>
            <p>legal@Server2-Law ~ $ <a href='/legal/cookies'>CookiePolicy</a></p>
            <p>legal@Server2-Law ~ $ <a href='/legal/privacy'>PrivacyPolicy</a></p>
            <p>legal@Server2-Law ~ $ <a href='/legal/tos'>TermsOfService</a></p>
            <p>legal@Server2-Law ~ $ <a href='/legal/copyright'>Copyright</a></p>
        </div>
    )
}

export default Legal;