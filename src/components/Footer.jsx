import React from "react";
import { NavLink } from "react-router-dom";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FiInstagram } from "react-icons/fi";
import { FiLinkedin, FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <div style={{ marginTop: "100px" }}>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="letter">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="space text-uppercase fw-light mb-4">
                  <i className=" fas fa-gem me-3"></i>TANNER GOODS
                </h6>
                <p>
                  In a world where we are overwhelmed by products made to break
                  down or go out of style, we aim to go against that grain.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="space text-uppercase fw-light mb-4">SUPPORT</h6>
                <p>
                  <NavLink to="#!" className="text-reset">
                    Shipping
                  </NavLink>
                </p>
                <p>
                  <NavLink to="#!" className="text-reset">
                    Return & Exchange
                  </NavLink>
                </p>
                <p>
                  <NavLink to="#!" className="text-reset">
                    Replacement & Repair
                  </NavLink>
                </p>
                <p>
                  <NavLink to="#!" className="text-reset">
                    Carrers
                  </NavLink>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="space text-uppercase fw-light mb-4">SHOP</h6>
                <p>
                  <NavLink to="#!" className="text-reset">
                    Mazama
                  </NavLink>
                </p>
                <p>
                  <NavLink to="#!" className="text-reset">
                    BestSellers
                  </NavLink>
                </p>
                <p>
                  <NavLink to="#!" className="text-reset">
                    Wallet & Belt
                  </NavLink>
                </p>
                <p>
                  <NavLink to="#!" className="text-reset">
                    Final Sale
                  </NavLink>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="space text-uppercase fw-light mb-4">
                  STAY IN THE LOOP
                </h6>
                <p>
                  <i className="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4">
          © 2021 Copyright:
          <NavLink className="text-reset fw-bold" to="https://tannergoods.com/">
            TannerGoods.com
          </NavLink>
        </div>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <NavLink to="" className="me-4 text-reset">
              <FiFacebook />
            </NavLink>
            <NavLink to="" className="me-4 text-reset">
              <FiTwitter />
            </NavLink>
            <NavLink to="" className="me-4 text-reset">
              <FcGoogle />
            </NavLink>
            <NavLink to="" className="me-4 text-reset">
              <FiInstagram />
            </NavLink>
            <NavLink to="" className="me-4 text-reset">
              <FiLinkedin />
            </NavLink>
            <NavLink to="" className="me-4 text-reset">
              <FiGithub />
            </NavLink>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
