import "../App.css";
const About = () => {
  return (
    <>
      <div className="ser-cont">
        <div className="ser-black">
          <div className="ser-header">
            <img src="src\images\paperplane.svg" className="head-line" />
            <div className="hei-ser">
              <h1 className="ser-head-white">About&nbsp; </h1>
              <h1 className="ser-head-or">us..</h1>
            </div>
          </div>
          <div className="ser-content">
            <div className="ser-content-es w">
              <h2 className="ser-content-es-w">
                {/* Entity <span className="ser-content-es-or">Support</span> */}
              </h2>
              <div className="ser-content-text-es">
                <p>
                  Hey, we are Chaithanya & Sadagopan, During our stint with
                  different clienteles, working with large corporates &
                  individuals who run any entity.
                </p>
                <p>
                  Being the most passionate entrepreneurs, noticed that there is
                  huge gap between operation & management in the finance &
                  compliance functions.
                </p>
                <p>
                  Being entrepreneurs ourselves, we have built our business
                  around solving these problems for other entrepreneurs.
                </p>
                <p>
                  Our services & scope has been specifically designed with the
                  objective of making the business owners work toward their
                  goals.
                </p>
                <p>
                  If you are an entrepreneur who is looking to leave your mark
                  in this world, we would love to work with you.
                </p>
              </div>
            </div>
            <img src="src\images\Line 14.png" className="single" />
            <div className="lap-hor-dir">
              <div className="ser-content-es esw w">
                <h2 className="ser-content-es-w">
                  {/* Individual <span className="ser-content-es-or">Support</span> */}
                </h2>
                <div className="ser-content-text-es">
                  <p>Sadagopan M S</p>
                  <p>
                    Expertizing in GST & Income-tax, he loves management
                    consulting as his prime cup of tea, leveraging all his
                    acumen.
                  </p>
                  <p>He loves imparting financial literacy. </p>
                  {/* <p>CPF With-drawl</p> */}
                </div>
              </div>
              <img
                className="dotwarrow"
                src="src\images\dotwarrow.png"
                // src="src\images\dottedline.svg"
                alt="default"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
