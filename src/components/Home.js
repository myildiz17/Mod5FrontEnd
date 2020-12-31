import React from "react";
import { connect } from "react-redux";
import { currentUser } from "../actions/auth";
import Carousel from "react-bootstrap/Carousel";
import imga from "../img/new1.png";
import imgb from "../img/new2.png";
import imgc from "../img/yeni3.png";
import imgd from "../img/welcome.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Home extends React.Component {
  render() {
    console.log("hi");

    return (
      //
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={imga} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={imgb} alt="Third slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={imgc} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* Welcome */}
        <section id="welcome">
          <div class="container">
            <div class="row">
              <div class="col text-center py-5">
                <h1 class="display-4">Welcome to Horizon School</h1>
                <p class="lead">
                  kshfj kfhkshfj fhskfh kshfksjfks fksjf skfjskfj ksjfksjfk
                  sjfsjfjsfkjskfjs fjs ksjsk d fdsjkfj skfh kshfksjfks fksjf
                  skfjskfj ksjfksjfk sjfsjfjsfkjskfjs fjs ksjsk d fdsjkfj
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* //District */}
        <section id="district" class="bg-light text-muted py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <img
                  src={imgd}
                  alt=""
                  class="img-fluid mb-3 rounded-circle"
                ></img>
              </div>
              <div class="col-md-6">
                <h3>Explore & Connect</h3>
                <p>
                  Selam kelam rakadagga Selam kelam rakadagga Selam kelam
                  rakadagga Selam kelam rakadagga Selam kelam rakadagga Selam
                  kelam rakadagga Selam kelam rakadagga Selam kelam rakadagga
                  Selam kelam rakadagga Selam kelam rakadagga Selam kelam
                  rakadagga Selam kelam rakadagga Selam kelam rakadagga Selam
                  kelam rakadagga Selam kelam rakadagga Selam kelam rakadagga
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Photo gallary */}
        <section id="gallery" class="py-5">
          <div class="container">
            <h1 class="text-center">Photo Galley</h1>
            <p class="text-center">Check out our photos</p>
            <div class="row mb-4">
              <div class="col-md-4">
                <a
                  href="https://source.unsplash.com/random/560x560"
                  data-toggle="lightbox"
                  data-gallery="img-gallery"
                  data-height="560"
                  data-width="560"
                >
                  <img
                    src="https://source.unsplash.com/random/560x560"
                    alt=""
                    class="img-fluid"
                  ></img>
                </a>
              </div>

              <div class="col-md-4">
                <a
                  href="https://source.unsplash.com/random/561x561"
                  data-toggle="lightbox"
                  data-gallery="img-gallery"
                  data-height="561"
                  data-width="561"
                >
                  <img
                    src="https://source.unsplash.com/random/561x561"
                    alt=""
                    class="img-fluid"
                  ></img>
                </a>
              </div>

              <div class="col-md-4">
                <a
                  href="https://source.unsplash.com/random/562x562"
                  data-toggle="lightbox"
                  data-gallery="img-gallery"
                  data-height="562"
                  data-width="562"
                >
                  <img
                    src="https://source.unsplash.com/random/562x562"
                    alt=""
                    class="img-fluid"
                  ></img>
                </a>
              </div>
            </div>

            <div class="row mb-4">
              <div class="col-md-4">
                <a
                  href="https://source.unsplash.com/random/563x563"
                  data-toggle="lightbox"
                  data-gallery="img-gallery"
                  data-height="563"
                  data-width="563"
                >
                  <img
                    src="https://source.unsplash.com/random/563x563"
                    alt=""
                    class="img-fluid"
                  ></img>
                </a>
              </div>

              <div class="col-md-4">
                <a
                  href="https://source.unsplash.com/random/564x564"
                  data-toggle="lightbox"
                  data-gallery="img-gallery"
                  data-height="564"
                  data-width="564"
                >
                  <img
                    src="https://source.unsplash.com/random/564x564"
                    alt=""
                    class="img-fluid"
                  ></img>
                </a>
              </div>

              <div class="col-md-4">
                <a
                  href="https://source.unsplash.com/random/565x565"
                  data-toggle="lightbox"
                  data-gallery="img-gallery"
                  data-height="565"
                  data-width="565"
                >
                  <img
                    src="https://source.unsplash.com/random/565x565"
                    alt=""
                    class="img-fluid"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials */}

        <section id="testimonials" class="p-4 bg-dark text-white">
          <div class="container">
            <h2 class="text-center">Testimonials</h2>
            <div class="row text-center">
              <div class="col">
                <div class="slider">
                  <Slider
                    dots={false}
                    slidesToShow={1}
                    slidesToScroll={1}
                    autoplay={true}
                    autoplaySpeed={4000}
                  >
                    <div>
                      <blockquote class="blockquote">
                        <p class="mb-0">
                          Lorem selam kelam vs hepberanet gmbejdj
                        </p>
                        <footer class="blockquote-footer">
                          {" "}
                          Metin Yildiz
                          <cite title="Parent 1">Parent 1</cite>
                        </footer>
                      </blockquote>
                    </div>

                    <div>
                      <blockquote class="blockquote">
                        <p class="mb-0">
                          Lorem selam kelam vs hepberanet gmbejdj
                        </p>
                        <footer class="blockquote-footer">
                          {" "}
                          Cetin Yildiz
                          <cite title="Parent 1">Parent 2</cite>
                        </footer>
                      </blockquote>
                    </div>

                    <div>
                      <blockquote class="blockquote">
                        <p class="mb-0">
                          Lorem selam kelam vs hepberanet gmbejdj
                        </p>
                        <footer class="blockquote-footer">
                          {" "}
                          Kenan Yildiz
                          <cite title="Parent 1">Parent 3</cite>
                        </footer>
                      </blockquote>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { currentUser })(Home);
