import React from 'react';

function App() {
  return (
    <div className="App">
      {/* Top Navigation Bar */}
      <nav className="bg-dark text-white py-2">
        <div className="container">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link text-white" href="#"><i className="bi bi-telephone me-1"></i> Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#"><i className="bi bi-geo-alt me-1"></i> Locations</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-primary text-white py-5 position-relative" style={{ background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?q=80&w=2070) center/cover' }}>
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Login Card */}
            <div className="col-lg-4">
              <div className="card shadow-lg p-4 text-dark" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                <div className="text-center mb-4">
                  <i className="bi bi-person-circle display-4 text-primary"></i>
                  <h3>Secure Login</h3>
                </div>
                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Username" />
                  </div>
                  <div className="mb-3">
                    <input type="password" className="form-control" placeholder="Password" />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Log In</button>
                </form>
              </div>
            </div>

            {/* Hero Text */}
            <div className="col-lg-8 ps-lg-5 mt-4 mt-lg-0">
              <h1 className="display-3 fw-bold">State Savings Bank</h1>
              <p className="lead">Your future, secured. Join thousands of members who trust us with their financial journey.</p>
              <button className="btn btn-outline-light btn-lg">Explore Services</button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links / CTAs */}
      <section className="container py-5 text-center">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 p-4 shadow-sm border-0">
              <i className="bi bi-rocket-takeoff text-primary display-5 mb-3"></i>
              <h5>Get Started</h5>
              <p>Open an account in minutes.</p>
              <a href="#" className="btn btn-link">Start Now</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 p-4 shadow-sm border-0">
              <i className="bi bi-credit-card text-success display-5 mb-3"></i>
              <h5>Credit Cards</h5>
              <p>Low rates and great rewards.</p>
              <a href="#" className="btn btn-link">See Cards</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 p-4 shadow-sm border-0">
              <i className="bi bi-shield-check text-info display-5 mb-3"></i>
              <h5>Fraud Protection</h5>
              <p>24/7 monitoring for your peace of mind.</p>
              <a href="#" className="btn btn-link">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;