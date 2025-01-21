function Hero() {
    return ( 
        <>
            <div className="container p-5 my-5">
                <div className="row text-center mt-5">
                    <img src="/images/homeHero.png" alt="" className="mb-5"/>
                    <h1 className="mt-5">Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"20%", margin : "0 auto"}}>Signup Now</button>
                </div>
            </div>
        </>
     );
}

export default Hero;