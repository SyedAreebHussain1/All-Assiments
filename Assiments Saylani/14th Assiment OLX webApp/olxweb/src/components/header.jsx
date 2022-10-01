import React, { Component } from "react";
import { Link } from "react-router-dom";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import Logoblue from "../images/olxbluelogo.png";
import Logoblack from "../images/olxblacklogo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import LoginModal from "./Login_modal/index.jsx";
class Top extends Component {
  render() {
    return (
      <div className="topNavBar">
        <div>
          <img src={Logoblue} alt="" width="40px" srcset="" />
        </div>

        <div className="directionsCarIcon">
          <DirectionsCarIcon />
          <span className="motorTxt">MOTORS</span>
        </div>
        <div className="mapsHomeWorkIcon">
          <MapsHomeWorkIcon />
          <span className="propertyTxt">PROPERTY</span>
        </div>
      </div>
    );
  }
}

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };
  }

  showHide_Modal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };
  render() {
    return (
      <div>
        <Top />
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={Logoblack} width="70px" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <select className="form-select" name="" id="">
                      <option value="-1">Pakistan</option>
                      <option value="az">Azad Kashmir,Pakistan</option>
                      <hr className="dropdown-divider" />
                      <option value="b">Balochistan,Pakistan</option>
                      <hr className="dropdown-divider" />
                      <option value="i">
                        Islamabad Capital Territory,Pakistan
                      </option>
                      <hr className="dropdown-divider" />
                      <option value="k">Khyber Pakhtunkhwa,Pakistan</option>
                      <hr className="dropdown-divider" />
                      <option value="n">Northern Areas,Pakistan</option>
                      <hr className="dropdown-divider" />
                      <option value="p">Punjab,Pakistan</option>
                      <hr className="dropdown-divider" />
                      <option value="s">Sindh,Pakistan</option>
                    </select>
                  </a>
                </li>
                <li className="nav-items d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Find Cars, Mobile Phones and more..."
                    aria-label="Search"
                  />
                  <a
                    className="nav-link"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle=""
                    aria-expanded="false"
                  >
                    <SearchIcon />
                  </a>
                </li>
                {this.state.showModal ? (
                  <LoginModal Close={this.showHide_Modal} />
                ) : null}

                <Link to={""} onClick={this.showHide_Modal}>
                  Login
                </Link>
                {/* <h6 className="login">Login</h6> */}
                {/*  */}
                <button className="sbtn">
                  <span className="plus">+</span>SELL
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

class Navbarword extends Component {
  render() {
    return (
      <div>
        <div id="navbarword">
          <ul className="navbarword">
            <li className="ALL-CATEGORIES">
              ALL CATEGORIES
              <img
                width="19px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyBi59VHLQXlb-1d_qUfnAbEq1Uynb3vgh3zbxgfB5rOonEAl6pQA9oobscoFsbkUu5aU&usqp=CAU"
                alt=""
                srcset=""
              />
            </li>
            <li className="list">Mobile Phones</li>
            <li className="list">Cars</li>
            <li className="list">Motorcycles</li>
            <li className="list">Houses</li>
            <li className="list">TV-Video-Audio</li>
            <li className="list">Tablets</li>
            <li className="list">Land & Plots</li>
          </ul>
        </div>
      </div>
    );
  }
}

export { Navbar, Navbarword };
