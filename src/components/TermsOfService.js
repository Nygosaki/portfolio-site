import React from 'react';
import '../styling/terminal.css';

function TOS(){
    return (
        <div className='terminal'>
            <p className='legalText'>
                <h2>Terms of Service</h2>
                By accessing and using this website, you agree to comply with and be bound by the following terms and conditions:<br />
                <h3>1. Security:</h3>
                - Do not attempt to exploit or breach the security of the website.<br />
                - Any unauthorized access or attempt to harm the website will be subject to legal action.<br />
                <h3>2. Copyright License:</h3>
                - Users are required to follow the copyright license outlined in the legal section of the website.<br />
                <h3>3. User Conduct:</h3>
                - Respectful and constructive behavior is expected in any interactions on the website.<br />
                - Do not engage in any activities that may harm the website's reputation.<br />
                <h3>4. Privacy:</h3>
                - Your privacy is important. Information collected is used only for the intended purpose and is not shared without consent.<br />
                <h3>5. Intellectual Property:</h3>
                - All intellectual property rights related to the website's content and design are reserved.<br />
                <h3>6. Third-Party Links:</h3>
                - The website may contain links to third-party websites. We are not responsible for the content or privacy practices of these sites.<br />
                <h3>7. Termination:</h3>
                - We reserve the right to terminate access to the website for violations of these terms.<br /><br />
                By using this website, you acknowledge that you have read, understood, and agreed to these terms.</p>
        </div>
    )
}

export default TOS;