import React from "react";
import twitter from "../assets/TwitterIcon.png";
import facebook from "../assets/FacebookIcon.png";
import instagram from "../assets/InstagramIcon.png";
import github from "../assets/GitHubIcon.png";

export default function Footer() {
    return (
        <footer className="footerSection">
            <div className="icons">
                <div className="twitter icon">
                    <a href="https://x.com/utuk_uwem"><img src={twitter} alt="twitter icon" /></a>                </div>
                <div className="facebook icon">
                    <a href="https://web.facebook.com/people/Uwem-Utuk/pfbid0uT7TRX3GSpBsMaFyeap4EZ3KyWUS3o9ZaRkceT3JyjLfP33o2nefBPRJAUoixqYTl/"><img src={facebook} alt="twitter icon" /></a>                </div>
                <div className="instagram icon">
                    <a href="https://www.instagram.com/uwem.utuk?igsh=aXVibzB6dzlydjF6&utm_source=qr"><img src={instagram} alt="twitter icon" /></a>                </div>
                <div className="github icon">
                    <a href="https://github.com/ultron-001"><img src={github} alt="twitter icon" /></a>                </div>
            </div>

        </footer>
    );
}