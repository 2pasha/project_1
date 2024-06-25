import { Link } from 'react-router-dom';

export const Homepage = () => {
  return (
    <section className="section">
      <div className="container has-text-centered">
        <h1 className="title">Welcome to the Home Page</h1>
        <p className="subtitle">This is the home page of the application.</p>
        
        <figure className="image is-3by2" style={{ margin: '0 auto', width: '400px' }}>
          <img src='./home_picture.jpg' alt="Home Page" />
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