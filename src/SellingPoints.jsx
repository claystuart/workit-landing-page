import "./SellingPoints.css";
import phone from './assets/images/image-phone.webp';

export default function Center() {
    return (
        <main>
            <img src={phone} className='img__phone' alt="phone" />
            <article>
                <h1>1</h1>
                <h2>Actionable insights</h2>
                <p> Optimize your products, improve customer satisfaction and stay ahead of the competition
                    with our product data analytics.</p>
            </article>
            <article>
                <h1> 2</h1>
                <h2>Data-driven decisions</h2>
                <p>Make data-driven decisions with our product data analytics. Our AI-generated reports help
                    you unlock insights hidden in your product data.</p>
            </article>
            <article>
                <h1>3</h1>
                <h2>Always affordable</h2>
                <p>Always affordable pricing that scales with your business. Get top-quality product data
                    analytics services without hidden costs or unexpected fees. </p>
            </article>
        </main>
    );

}