import React, { Component } from "react";

class Carousel extends Component {
  render() {
    return (
      <div>
        <div className="">
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval={10000}>
                <img src="https://images.olx.com.pk/thumbnails/245178240-800x600.webp" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval={2000}>
                <img src="https://images.olx.com.pk/thumbnails/245178240-800x600.webp" className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src="https://images.olx.com.pk/thumbnails/245178240-800x600.webp" className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
