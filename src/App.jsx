import Header from './Header';
import SellingPoints from './SellingPoints';
import Footer from './Footer';
import phone from './assets/images/image-phone.webp';
import "./Phone.css";

export default function App() {

  return (
    <div className='container'>
      <Header />
      <img src={phone} className='img__phone' alt="phone" />
      <SellingPoints />
      <Footer />
    </div>
  )
}