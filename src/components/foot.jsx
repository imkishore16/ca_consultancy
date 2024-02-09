import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "../css/foot.css";

export default function Foot() {
  return (
    <MDBFooter
      style={{ maxWidth: "70%", marginLeft: "15%" }}
      className="text-center text-lg-start text-muted"
    >
      <MDBContainer
        style={{
          background: "black",
          color: "white",
          borderRadius: "20px",
          marginBottom: "20px",
          padding: "5px",
        }}
        className="text-center text-md-start mt-5"
      >
        <MDBRow className="mt-4" >
          <MDBCol className="mx-auto mb-4" style={{ padding: "0 15px" }}>
            <div className="qq1" >
              <p>20+</p>
              <p style={{ color: "#DA916D" }}>PROJECTS</p>
              <p>COMPLETED</p>
            </div>
          </MDBCol>
          <MDBCol className="mx-auto mb-4" style={{ padding: "0 15px" }}>
            <div className="qq2">
              <p>10+</p>
              <p style={{ color: "#DA916D" }}>ACTIVE</p>
              <p>CLIENTS</p>
            </div>
          </MDBCol>

          <MDBCol
            className="mx-auto mb-md-0 mb-4"
            style={{ padding: "0 15px" }}
          >
            <div className="qq3">
              <p>15+</p>
              <p style={{ color: "#DA916D" }}>CUPS OF</p>
              <p>COFFEE</p>
            </div>
          </MDBCol>
          <MDBCol
            className="mx-auto mb-md-0 mb-4"
            style={{ padding: "0 15px" }}
          >
            <div className="qq4">
              <p>20+</p>
              <p style={{ color: "#DA916D" }}>HAPPY</p>
              <p>CLIENTS</p>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}