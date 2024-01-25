import {
  FaGithub,
  FaLinkedin,
  FaFacebookSquare,
  FaInstagramSquare,
  FaMailBulk,
} from "react-icons/fa";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import React from "react";

export default function Footer() {
  return (
    <MDBFooter className="text-center text-white   content-wrapper">
      <div className="text-center  bg-dark ">
        

        <a className="text-white" href="https://www.NCanchola.com/">
          Nicholas Canchola
        </a>
        <div className="text-center iconsize">
          <a className="text-end" href="https://github.com/DamascusKraken">
            <FaGithub /> DamascusKraken        
          </a>

          <a
            className="text-end"
            href="N/A"
          >
            <FaLinkedin /> Nicholas Canchola           
          </a>

          <a className="text-end" href="mailto:nick.canchola.7.27@gmail.com">
            <FaMailBulk /> Nicholas Canchola
          </a>
        </div>
      </div>
    </MDBFooter>
  );
}
