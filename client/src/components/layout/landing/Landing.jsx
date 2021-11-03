import "./landing.css";

const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large' id='title'>
            WebLog
          </h1>
          <p className='lead'>
            Create a developer profile and share posts with other developers
          </p>
          <div className='buttons'>
            <a href='/' className='btn btn-primary'>
              Sign Up
            </a>
            <a href='/' className='btn btn-light'>
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
