function RightSection({ imgURL, productName, productDesc }) {
  return (
    <>
      <div className="container my-5">
        <div className="row mb-5">
          <div className="col-5 p-5 mt-5 align-bottom">
            <h1 className="">{productName}</h1>
            <p
              className="text-muted my-3"
              style={{ lineHeight: "1.8", fontSize: "1.2rem" }}
            >
              {productDesc}
            </p>
            <a href="" style={{ textDecoration: "none" }}>
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </a>  
          </div>
          <div className="col-1"></div>
          <div className="col-6 text-center">
            <img src={imgURL} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSection;
