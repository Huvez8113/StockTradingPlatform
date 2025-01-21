function Education() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <img src="/images/education.svg" alt="" className="w-70" />
          </div>
          <div className="col-6 my-5">
            <h1 className="fs-2">Free and open market education</h1>
            <p className="my-3">
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="" style={{ textDecoration: "none" }}>
              Varsity <i className="fa-solid fa-arrow-right"></i>
            </a>
            <p className="my-4">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
            <a href="" style={{ textDecoration: "none" }}>
              TradingQ&A <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
