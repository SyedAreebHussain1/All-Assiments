import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <React.Fragment>
      <div className="footer flex">
        <div className="block flex flex-col">
          <h2 className="title s16 fontb color">POPULAR CATEGORIES</h2>
          <Link to="/" className="noul noulh font s14 color">
            Cars
          </Link>
          <Link to="/" className="noul noulh font s14 color">
            Flats for rent
          </Link>
          <Link to="/" className="noul noulh font s14 color">
            Jobs
          </Link>
          <Link to="/" className="noul noulh font s14 color">
            Mobile phones
          </Link>
        </div>
        <div className="block flex flex-col">
          <h2 className="title s16 fontb color">TRENDING SEARCHES</h2>
          <Link to="/" className="noul noulh font s14 color">
            Bikes
          </Link>
          <Link to="/" className="noul noulh font s14 color">
            Watches
          </Link>
          <Link to="/" className="noul noulh font s14 color">
            Books
          </Link>
          <Link to="/" className="noul noulh font s14 color">
            Dogs
          </Link>
        </div>
        <div className="block flex flex-col">
          <h2 className="title s16 fontb color">ABOUT US</h2>
          <Link to="/" className="noul noulh font s14 color">
            About EMPG
          </Link>
          <Link to="/" className="noul noulh font s14 color">
            OLX Blog
          </Link>
          <Link to="/" className="noul noulh font s14 color">
            Contact Us
          </Link>
          <Link to="/" className="noul noulh font s14 color">
            OLX for Businesses
          </Link>
        </div>
        <div className="block flex flex-col">
          <h2 className="title s16 fontb color">OLX</h2>
          <Link to="/" className="noul noulh font s14 color">
            Help
          </Link>
          <Link to="/" className="noul noulh font s14 color">
            Sitemap
          </Link>
          <Link to="/" className="noul noulh font s14 color">
            Terms of use
          </Link>
          <Link to="/" className="noul noulh font s14 color">
            Privacy policy
          </Link>
        </div>
      </div>
      <div className="footerb flex">
        <h2 className="r cff font s14">Free Classifieds in Pakistan . © 2006-2022 OLX</h2>
      </div>
    </React.Fragment>
  );
}
export default Footer;
