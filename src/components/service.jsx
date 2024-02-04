import "../App.css";
const Service = () => {
  return (
    <>
      <div className="ser-cont">
        <div className="ser-black">
          <div className="ser-header">
            <img src="src\images\Line 10.svg" className="head-line" />
            <div className="hei-ser">
              <h1 className="ser-head-white">Services we&nbsp; </h1>
              <h1 className="ser-head-or">provide..</h1>
            </div>
          </div>
          <div className="ser-content">
            <div className="ser-content-es w">
              <h2 className="ser-content-es-w">
                Entity <span className="ser-content-es-or">Support</span>
              </h2>
              <div className="ser-content-text-es">
                <p>
                  Expert Income-tax compliances with Advance tax and Income Tax
                  Return filing.
                </p>
                <p>
                  Licensing Support: Trademark, Labour, and other legal
                  consultations.
                </p>
                <p>
                  Streamlined Payroll Services: Processing, PF, ESI, PT,
                  beneficial salary structuring.
                </p>
                <p>
                  Comprehensive Secretarial Compliances: MCA/ROC , Company/LLP
                  registration and filings.
                </p>
                <p>
                  Seamless GST Compliances: Registration, Monthly Filing,
                  Refunds and Tax Credit Opinions.
                </p>
              </div>
            </div>
            <img src="src\images\Line 14.png" className="single" />
            <div className="lap-hor-dir">
              <div className="ser-content-es esw w">
                <h2 className="ser-content-es-w">
                  Individual <span className="ser-content-es-or">Support</span>
                </h2>
                <div className="ser-content-text-es">
                  <p>Tax returns and compliances</p>
                  <p>Retirement and succession planning</p>
                  <p>Salary structuring (employer) </p>
                  <p>CPF With-drawl</p>
                </div>
              </div>
              <img
                className="dotwarrow"
                src="src\images\dotwarrow.png"
                alt="default"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
