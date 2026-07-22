import facebookIcon from '../assets/facebook.svg';
import mailIcon from '../assets/mail.svg';

function Footer () {
    return (
        <footer>
            <p className="logoText footerText">SGIS</p>
            <p className="copyrightText">© Copyright 2024. All rights reserved.</p>
            <div className="socialMediaLinks">
                <img src={facebookIcon} alt="facebook" />
                <img src={mailIcon} alt="mail" />
            </div>
        </footer>
    );
}

export default Footer;