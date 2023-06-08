import "./Footer.css";
import founder from './assets/images/image-founder.webp';
import footerlogo from './assets/images/logo-dark.svg';
import facebook from './assets/images/icon-facebook.svg';
import twitter from './assets/images/icon-twitter.svg';
import instagram from './assets/images/icon-instagram.svg';

import { ReactSVG } from "react-svg";

export default function Footer() {
    return (
        <footer>
            <img src={founder} className="founder-image" alt="founder" />
            <article>
                <h1>Be the first to test</h1>
                <p>Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a
                    beta tester for our app and kickstart your company. Apply for access below and I&apos;ll be
                    in touch to schedule a call.</p>
                <button>Apply for access</button>
            </article>
            <div className="contact-area">
                <img src={footerlogo} alt="workit" className="footer-logo" />

                <div className="contact-icons">
                    <ReactSVG src={facebook} alt="facebook" />
                    <ReactSVG src={twitter} alt="twitter" />
                    <ReactSVG src={instagram} alt="instagram" />
                </div>
            </div>
        </footer>
    );
}