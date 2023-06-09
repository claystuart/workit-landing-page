import './Header.css';
import logo from './assets/images/logo-light.svg';
import leftSwirls from './assets/images/bg-pattern-left.svg'
import rightSwirls from './assets/images/bg-pattern-right.svg'

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
            <img src={leftSwirls} className='leftSwirls'
                alt="swirls heading left" />
            <img src={rightSwirls} className='rightSwirls'
                alt="swirls heading right" />
        </header>
    );
}