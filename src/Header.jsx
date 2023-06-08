import './Header.css';
import logo from './assets/images/logo-light.svg';

export default function Header() {
    return (
        <header>
            <div className="titleBar">
                <img src={logo} className="img__logo" alt="logo" />
                <h2 className='underline'>Apply for access</h2>
            </div>
            <div className='centerSection'>
                <h1>Data <span className='underline'>tailored</span> to your needs.</h1>
                <button>Learn more</button>
            </div>
        </header>
    );
}