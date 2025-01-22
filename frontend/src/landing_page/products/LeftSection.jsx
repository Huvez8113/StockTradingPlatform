function LeftSection({ imgURL, productName, productDesc }) {
  return (
    <>
      <div className="container my-5">
        <div className="row mb-5">
          <div className="col-6 text-center">
            <img src={imgURL} alt="" />
          </div>
          <div className="col-1"></div>
          <div className="col-5 p-5">
            <h1 className="">{productName}</h1>
            <p
              className="text-muted my-3"
              style={{ lineHeight: "1.8", fontSize: "1.2rem" }}
            >
              {productDesc}
            </p>
            <a href="" style={{ textDecoration: "none" }}>
              Try Demo <i className="fa-solid fa-arrow-right"></i>
            </a>
            <a href="" className="ms-5" style={{ textDecoration: "none" }}>
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </a>
            <div className="mt-4">
              <img src="/images/googlePlayBadge.svg" alt="" />
              <img src="/images/appstoreBadge.svg" alt="" className="ms-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection;
