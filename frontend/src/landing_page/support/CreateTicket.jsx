function CreateTicket() {
    return ( 
        <>
            <div className="container mt-5">
                <div className="row mt-5 p- mb-5">
                    <h3 className="text-muted">To create a ticket, select a relevant topic :</h3>
                    <div className="col-4 p-4 mt-5">
                        <h5 className="support-header"><i className="fa-solid fa-circle-plus"></i>&nbsp;&nbsp;&nbsp;Account Opening</h5>
                        <ul className="support-links mt-4">
                            <li><a href="">Getting started</a></li>
                            <li><a href="">Online</a></li>
                            <li><a href="">Offline</a></li>
                            <li><a href="">Charges</a></li>
                            <li><a href="">Company, Partnership and HUF</a></li>
                            <li><a href="">Non Resident Indian (NRI)</a></li>
                        </ul>
                    </div>
                    <div className="col-4 p-4 mt-5">
                    <h5 className="support-header"><i className="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;Your Zerodha Account</h5>
                        <ul className="support-links mt-4">
                            <li><a href="">Login credentials</a></li>
                            <li><a href="">Your Profile</a></li>
                            <li><a href="">Account modification and segment addition</a></li>
                            <li><a href="">CMR & DP ID</a></li>
                            <li><a href="">Nomination</a></li>
                            <li><a href="">Transfer and conversion of shares</a></li>
                        </ul>
                    </div>
                    <div className="col-4 p-4 mt-5">
                    <h5 className="support-header"><i className="fa-solid fa-signal"></i>&nbsp;&nbsp;&nbsp;Trading and Markets</h5>
                        <ul className="support-links mt-4">
                            <li><a href="">Trading FAQs</a></li>
                            <li><a href="">Kite</a></li>
                            <li><a href="">Margins</a></li>
                            <li><a href="">Product and order types</a></li>
                            <li><a href="">Corporate actions</a></li>
                            <li><a href="">Kite features</a></li>
                        </ul>
                    </div>
                    <div className="col-4 p-4">
                    <h5 className="support-header"><i className="fa-solid fa-credit-card"></i>&nbsp;&nbsp;&nbsp;Funds</h5>
                        <ul className="support-links mt-4">
                            <li><a href="">Fund withdrawal</a></li>
                            <li><a href="">Adding funds</a></li>
                            <li><a href="">Adding bank accounts</a></li>
                            <li><a href="">eMandates</a></li>
                        </ul>
                    </div>
                    <div className="col-4 p-4">
                    <h5 className="support-header"><i className="fa-solid fa-compact-disc"></i>&nbsp;&nbsp;&nbsp;Console</h5>
                        <ul className="support-links mt-4">
                            <li><a href="">IPO</a></li>
                            <li><a href="">Portfolio</a></li>
                            <li><a href="">Funds statement</a></li>
                            <li><a href="">Profile</a></li>
                            <li><a href="">Reports</a></li>
                            <li><a href="">Referral program</a></li>
                        </ul>
                    </div>
                    <div className="col-4 p-4">
                    <h5 className="support-header"><i className="fa-regular fa-circle"></i>&nbsp;&nbsp;&nbsp;Coin</h5>
                        <ul className="support-links mt-4">
                            <li><a href="">Understanding mutual funds and Coin</a></li>
                            <li><a href="">Coin app</a></li>
                            <li><a href="">Coin web</a></li>
                            <li><a href="">Transactions and reports</a></li>
                            <li><a href="">National Pension Scheme (NPS)</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
     );
}

export default CreateTicket;