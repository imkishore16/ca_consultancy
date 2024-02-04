// import { discount, robot, handshake, handshake2 } from "../assets";

const Hero = () => {
  return (
    <section id="home" style={{ flexDirection: "column", paddingTop: "2rem" }}>
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          padding: "0 1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h1
            style={{
              flex: "1",
              fontFamily: "Poppins",
              textAlign: "center",
              fontWeight: "600",
              fontSize: "32px",
              lineHeight: "55px",
            }}
          >
            Stratergic Excellence, Financial Finesse
            <br className="sm:block hidden" />{" "}
          </h1>
        </div>
        <h1
          style={{
            fontFamily: "Poppins",
            textAlign: "center",
            fontWeight: "600",
            fontSize: "32px",
            lineHeight: "55px",
          }}
        >
          Elevating Your Business in
          <span style={{ color: "#FF9F19" }}> Style.</span>{" "}
        </h1>
      </div>
      <div
        style={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            lineHeight: "30.8px",
            maxWidth: "770px",
            marginTop: "5px",
            color: "black",
            textAlign: "center",
            fontFamily: "Poppins",
          }}
        >
          We are business consultants, a company with a wide array of skills who
          assists business owners with their endeavors. Consultants are
          knowledgeable because of their education and previous experience.
        </p>
      </div>

      <div
        style={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          margin: "0",
          position: "relative",
          width: "100%",
        }}
      >
        <img
          src="src/images/handshake.svg"
          alt="handwshke"
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            zIndex: "5",
          }}
        />

        <div
          style={{
            position: "absolute",
            zIndex: "0",
            width: "50%",
            height: "50%",
            right: "20%",
            bottom: "20%",
            // background: "linear-gradient(to right, #3182CE, #319795)",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
