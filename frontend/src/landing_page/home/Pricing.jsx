function Pricing() {
  return (
    <>
      <div className="container p-5 mt-5">
        <div className="row">
          <div className="col-4">
            <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
            <p>
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a href="" style={{ textDecoration: "none" }}>
              See Pricing <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="col-8">
            <div className="row p-5">
              <div className="col-4 d-flex align-items-center">
                <img src="/images/pricing-eq.svg" alt="" className="w-50" />
                <p className="text-muted">Free account opening</p>
              </div>
              <div className="col-4 d-flex align-items-center">
                <img src="/images/pricing-eq.svg" alt="" className="w-50" />
                <p className="text-muted">
                  Free equity delivery and direct mutual funds
                </p>
              </div>
              <div className="col-4 d-flex align-items-center">
                <img src="/images/other-trades.svg" alt="" className="w-50" />
                <p className="text-muted fs-6">Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
