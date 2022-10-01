import React, { Component } from "react";
import Appstore from "../images/appstore.jpg";
import Googleplay from "../images/googleplay.png";
import AppGaleryimg from "../images/appgallery.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InstagramIcon from "@mui/icons-material/Instagram";

class Footerfirst extends Component {
  render() {
    return (
      <div className="footerf">
        <div>
          <img
            src="https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp"
            alt=""
          />
        </div>
        <div className="footerftxt">
          <h1>TRY THE OLX APP</h1>
          <h6>
            Buy, sell and find just about anything using <br />
            the app on your mobile.
          </h6>
        </div>
        <div className="GET">
          GET YOUR APP TODAY
          <div className="appimg">
            <img
              className="img2"
              width="162px"
              height="40px"
              src={Googleplay}
              alt=""
            />
            <img
              className="img1"
              width="162px"
              height="40px"
              src={Appstore}
              alt=""
            />
            <img
              className="img3"
              width="162px"
              height="40px"
              src={AppGaleryimg}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

class Footers extends Component {
  render() {
    return (
      <div className="footerliss">
        <div>
          <div className="footerlis">
            <div>
              <ul>
                <h6 className="h6">POPULAR CATEGORIES</h6>
                {/* <br /> */}
                <li className="list">Cars</li>
                <li className="list">Flats for rent</li>
                <li className="list">Mobile Phones</li>
                <li className="list">Jobs</li>
              </ul>
            </div>
            <div>
              <ul>
                <h6 className="h6">TRENDING SEARCHES</h6>
                {/* <br /> */}

                <li className="list">Bikes</li>
                <li className="list">Watches</li>
                <li className="list">Books</li>
                <li className="list">Dogs</li>
              </ul>
            </div>
            <div>
              <ul>
                <h6 className="h6">ABOUT US</h6>
                {/* <br /> */}

                <li className="list">About EMPG</li>
                <li className="list">OLX Blog</li>
                <li className="list">Contact Us</li>
                <li className="list">OLX for Businesses</li>
              </ul>
            </div>
            <div>
              <ul>
                <h6 className="h6">OLX</h6>
                {/* <br /> */}
                <li className="list">Help</li>
                <li className="list">Sitemap</li>
                <li className="list">Terms of use</li>
                <li className="list">Privacy Policy</li>
              </ul>
            </div>
            <div className="follow_us">
              <div>FOLLLOW US</div>
              <div>
                <FacebookIcon className="mtui" /> <TwitterIcon className="mtui" /> <PlayArrowIcon className="mtui" />
                <InstagramIcon className="mtui" />
              </div>
              <div>
                <div className="appimg">
                  <img
                    className="img2"
                    width="100px"
                    height="30px"
                    src={Googleplay}
                    alt=""
                  />
                  <img
                    className="img1"
                    width="100px"
                    height="30px"
                    src={Appstore}
                    alt=""
                  />
                  <img
                    className="img3"
                    width="100px"
                    height="30px"
                    src={AppGaleryimg}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div id="footer">
          <div className="free">Free Classifieds in Pakistan</div> 
          <div className="div2006"> .@2006-2022 OLX</div>
        </div>
      </div>
    );
  }
}
export { Footerfirst, Footers, Footer };
