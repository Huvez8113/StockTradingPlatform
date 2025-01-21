function Team() {
  return (
    <>
      <div className="container">
        <div className="row p-5 border-top">
          <h1 className="text-center">People</h1>
        </div>
        <div className="row p-5">
          <div className="col-6 text-center">
            <img
              src="/images/nithinKamath.jpg"
              alt=""
              style={{ borderRadius: "100%", width: "60%" }}
            />
            <h4 className="mt-3">Nithin Kamath</h4>
            <h6 className="fs-6">Founder, CEO</h6>
          </div>
          <div
            className="col-6"
            style={{ lineHeight: "1.8", fontSize: "1.2rem" }}
          >
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p>
              Connect on{" "}
              <a href="" style={{ textDecoration: "none", fontWeight: "500" }}>
                Homepage
              </a>{" "}
              /{" "}
              <a href="" style={{ textDecoration: "none", fontWeight: "500" }}>
                TradingQnA
              </a>{" "}
              /{" "}
              <a href="" style={{ textDecoration: "none", fontWeight: "500" }}>
                Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
