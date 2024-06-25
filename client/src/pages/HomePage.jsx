import { Link } from 'react-router-dom';
import image from '../img/image.webp';

export const HomePage = () => {
  return (
    <section className="section">
      <div className="container has-text-centered">
        <h1 className="title">Welcome to the Personal Financial Manager</h1>
        
        <figure className="image is-3by2" style={{ margin: '0 auto', width: '400px' }}>
          <img src={image} alt="Small mem" />
        </figure>
        
        <div className="buttons is-centered" style={{ marginTop: '40px' }}>
          <Link to="/category" className="button is-primary">
            Go to Categories
          </Link>
          <Link to="/transaction" className="button is-link">
            Go to Transactions
          </Link>
          <Link className="button is-danger" disabled>
            Go to Statistics
          </Link>
        </div>
      </div>
    </section>
  );
}; 