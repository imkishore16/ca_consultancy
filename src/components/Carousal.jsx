import { Carousel } from "rsuite";
import Profile from "./avatar1";
import Rating from "@mui/material/Rating";
import "../css/carousal.css";

const Carousal = () => (
  <Carousel
    style={{
      maxWidth: "70%",
      marginLeft: "15%",
      borderRadius: "20px",
      marginTop: "20px",
      maxHeight: "300px",
      color: "gray",
    }}
    autoplay
    className="custom-slider"
  >
    <div style={{ background: "black" }}>
      <div className="nameheader">
        <div style={{ marginInlineStart: "30%" }}>
          <Profile></Profile>
        </div>

        <p className="nameheader-name">Ram Kumar</p>
      </div>
      <div className="rat">
        <Rating
          readOnly
          className="rating"
          name="half-rating"
          defaultValue={5}
          precision={0.5}
          size="small"
        />
      </div>
      <p className="content">
        Exceptional CSR expertise! GreenEdge Consulting collaborative approach
        tailored a perfect CSR strategy, aligning seamlessly with our goals.
        Their commitment to sustainability and proactive service is commendable
      </p>
    </div>

    <div style={{ background: "black" }}>
      <div className="nameheader">
        <div style={{ marginInlineStart: "30%" }}>
          <Profile></Profile>
        </div>

        <p className="nameheader-name">Priya Sharma</p>
      </div>
      <div className="rat">
        <Rating
          readOnly
          className="rating"
          name="half-rating"
          defaultValue={4.5}
          precision={0.5}
          size="small"
        />
      </div>
      <p className="content">
        GreenEdge Consulting delivers outstanding CSR solutions! Their expertise
        and dedication shine through in every project. Their support has been
        invaluable in enhancing our company reputation and impact.
      </p>
    </div>

    <div style={{ background: "black" }}>
      <div className="nameheader">
        <div style={{ marginInlineStart: "30%" }}>
          <Profile></Profile>
        </div>

        <p className="nameheader-name">Amit Verma</p>
      </div>
      <div className="rat">
        <Rating
          readOnly
          className="rating"
          name="half-rating"
          defaultValue={4}
          precision={0.5}
          size="small"
        />
      </div>
      <p className="content">
        The CSR services offered are exemplary! Their innovative approach and
        attention to detail greatly contribute to our CSR success. Their
        responsiveness and professionalism are commendable.
      </p>
    </div>

    <div style={{ background: "black" }}>
      <div className="nameheader">
        <div style={{ marginInlineStart: "30%" }}>
          <Profile></Profile>
        </div>

        <p className="nameheader-name">Deepika Nair</p>
      </div>
      <div className="rat">
        <Rating
          name="half-rating-read"
          defaultValue={4.5}
          precision={0.5}
          readOnly
          size="small"
        />
      </div>
      <p className="content">
        Exceeded expectations! The CSR solutions resonate with our values. The
        commitment to sustainability and exceptional service make them our
        trusted CSR partner.
      </p>
    </div>
    {/* <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1" height="250" />
    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2" height="250" />
    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3" height="250" />
    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4" height="250" />
    <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5" height="250" /> */}
  </Carousel>
);

export default Carousal;
