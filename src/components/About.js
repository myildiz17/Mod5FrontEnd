import React from "react";
import { connect } from "react-redux";
import { currentUser } from "../actions/auth";
import imgd from "../img/welcome.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class About extends React.Component {
  render() {
    console.log("hi");

    return (
      //
      <div>
        <section id="contact" class="py-3">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="card-body">
                  <h4>Get In Touch</h4>
                  <p>
                    {" "}
                    Pleae visit the school for more information and open house
                    dates
                  </p>
                  <h4>Address</h4>
                  <p>255 Western Ave, Chicago IL</p>
                  <h4>Email</h4>
                  <p>info@horizonschool.org</p>
                  <h4>Phone</h4>
                  <p>(255) 444-4444</p>
                </div>
              </div>

              <div class="col-md-8">
                <div class="cardd p-4">
                  <div class="card-body">
                    <h3 class="text-center">Please fill out this form to contact us</h3>
                    <hr></hr>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="First Name"></input>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Last Name"></input>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Email"></input>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Phone Number"></input>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <textarea class="form-control" placeholder="Message"></textarea>
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input type="submit" value="Submit" class="btn btn-outline-danger btn-block"></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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

export default connect(mapStateToProps, { currentUser })(About);
