function Hero() {
  return (
    <>
      <div
        className="container-fluid p-5"
        style={{ backgroundColor: "#387ed1", color: "#fff" }}
      >
        <div className="container mt-5">
          <div className="mt-5 p-5 mb-5" id="supportHero">
            <h3>Support Portal</h3>
            <p className="fs-5"><a href="" style={{textDecoration:"none"}} className="border-bottom">Track Tickets</a></p>
          </div>
          <div className="row">
            <div className="col-7">
              <h2 className="fs-3">
                Search for an answer or browse help topics to create a ticket
              </h2>
              <div className=" mt-4 mb-3 search-grp">
                <input
                  type="email"
                  className="form-control p-3 fs-5"
                  id="exampleFormControlInput1"
                  placeholder="Eg: how do i activate F&O, why is my order getting rejected..."
                />
                <span>
                    <img src="/images/search.png" alt="" />
                </span>
              </div>
              <div className="row" id="supportHero">
              <div className="col-4">
                <p className="fs-5"><a href="" style={{textDecoration:"none"}} className="border-bottom">Track account opening</a></p>
              </div>
              <div className="col-4">
                <p className="fs-5"><a href="" style={{textDecoration:"none"}} className="border-bottom"> Track segment activation</a></p>
              </div>
              <div className="col-4">
                <p className="fs-5"><a href="" style={{textDecoration:"none"}} className="border-bottom"> Intraday margins</a></p>
              </div>
              <div className="col-4">
                <p className="fs-5"><a href="" style={{textDecoration:"none"}} className="border-bottom">Kite user manual</a></p>
              </div>
              </div>
            </div>
            <div className="col-5" id="support-hero">
                    <h4 className="mb-3">Featured</h4>
                    <ol>
                        <p className="fs-5 mb-4"><li><a href="" style={{textDecoration:"none"}} className="border-bottom">Current Takeovers and Delisting - January 2025</a></li></p>
                        <p className="fs-5"><li><a href="" style={{textDecoration:"none"}} className="border-bottom">Rights Entitlements listing in January 2025</a></li></p>
                    </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
