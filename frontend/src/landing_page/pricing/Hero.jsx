function Hero() {
  return (
    <>
      <div className="container mt-5 p-5">
        <div className="row text-center mt-5 mb-5 p-5 border-bottom">
          <h1 className="mt-5">Charges</h1>
          <h5 className="text-muted mt-3 mb-5">List of all charges and taxes</h5>
        </div>
        <div className="row text-center" >
            <div className="col-4 p-5">
              <img src="/images/pricing-eq.svg" alt="" />
              <h3 className="mt-4">Free equity delivery</h3>
              <h6 className="text-muted mt-4" style={{lineHeight:"1.8"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</h6>
            </div>
            <div className="col-4 p-5">
            <img src="/images/other-trades.svg" alt="" />
              <h3 className="mt-4">Intraday and F&O trades</h3>
              <h6 className="text-muted mt-4" style={{lineHeight:"1.8"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</h6>
            </div>
            <div className="col-4 p-5" >
            <img src="/images/pricing-eq.svg" alt="" />
              <h3 className="mt-4">Free direct MF</h3>
              <h6 className="text-muted mt-4" style={{lineHeight:"1.8"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</h6>
            </div>
          </div>
      </div>
    </>
  );
}

export default Hero;
