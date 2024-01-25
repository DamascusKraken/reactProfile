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
    <MDBFooter className="Footer text-center text-white   content-wrapper">
      <div className=" text-center">
        <a className="" href="https://www.NCanchola.com/">
          Nicholas Canchola
        </a>
        <div className=" text-center  iconsize">
          <a className="text-end footer-text ps-4" href="https://github.com/DamascusKraken">
            <FaGithub /> DamascusKraken        
          </a>

          <a
            className="footer-text text-end ps-4"
            href="www.linkedin.com/in/ncanchola27"
          >
            <FaLinkedin /> Nicholas Canchola           
          </a>

          <a className=" footer-text text-end ps-4 " href="mailto:nick.canchola.7.27@gmail.com">
            <FaMailBulk /> Nicholas Canchola
          </a>
        </div>
      </div>
    </MDBFooter>
  );
}
