import React from "react";
import { connect } from "react-redux";
import { currentUser } from "../actions/auth";
import Carousel from "react-bootstrap/Carousel";
import Gmap from "./Gmap";
import imga from "../img/new1.png";
import imgb from "../img/new2.png";
import imgc from "../img/yeni3.png";
import imgd from "../img/welcome.png";
import { Card, Button, Table, Accordion } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class Home extends React.Component {
  render() {
    console.log("hi");

    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={imga} alt="First slide" />
            <Carousel.Caption>
              <h3>STEM Oriented Education</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={imgb} alt="Third slide" />
            <Carousel.Caption>
              <h3>Individual Attention</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={imgc} alt="Third slide" />
            <Carousel.Caption>
              <h3>Enriched Curriculum</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <section id="welcome">
          <div class="container">
            <div class="row">
              <div class="col text-center py-5">
                <h1 class="display-4">Welcome to Horizon School</h1>
                <p class="lead">
                  Horizon fosters an environment of inquiry and a love of
                  learning so students are prepared to excel in STEM-focused
                  K-12 school, higher, and the whole world.
                </p>
              </div>
            </div>
          </div>
        </section>

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
              <div class="col-md-6 text-left dist">
                <br />
                <br />
                <br />
                <h5>Common Core Standard Based Curriculum</h5>
                <br />
                <h5>Individualized Instruction</h5>
                <br />
                <h5>State Art labs</h5>
                <br />
                <h5>Technology oriented teaching design</h5>
              </div>
            </div>
          </div>
        </section>

        <Accordion defaultActiveKey="1">
          <h3>Information Section</h3>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Distance Learning
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body class="text-left">
                <p>
                  Horizon School is utilizing the most effective instructional
                  sofwares and programs to teach students.
                </p>
                Here are some of the online programs that are being used by the
                teachers
                <br />
                - Khan Academy
                <br />
                - Schoolgy
                <br />
                - AtoZ
                <br />
                - Canvas
                <br />
                - EdModo
                <br />
                - Google Classroom
                <br />
                - Kahoot!
                <br />
                - Seesaw
                <br />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Teaching Resources
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                BACK-TO-SCHOOL ADVICE AND CHECKLISTS
                <br />
                19 Meaningful Questions You Should Ask Your Child’s Teacher:
                Mine this list for inspiration before talking with your
                children’s teachers. (Edutopia, updated 2016) 9 Back to School
                Tips for Parents: Explore these simple tips for helping your
                kids return to the classroom ready to learn. After the
                back-to-school rush, use this month-by-month guide to enhance
                your kids’ school experience throughout the year. (Department of
                Education, 2016) 5-Minute Film Festival: Building a Parent
                Toolkit: Watch curated videos on topics like stress reduction,
                healthy eating, homework, and more. (Edutopia, 2015) 15
                Questions to Replace ‘How Was School Today?’: Questions to ask
                to gain deeper insights into your kids’ learning experiences.
                (Edutopia, 2016) Back-to-School Health and Safety Tips: Browse
                advice about issues like backpack safety, transportation,
                bullying prevention, nutrition, before- and after-school child
                care.
                <br /> https://www.edutopia.org/
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                COVID-19
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body class="text-left">
                "To help prevent the spread of COVID-19, everyone should:
                <br />
                Clean your hands often, either with soap and water for 20
                seconds or a hand sanitizer that contains at least 60% alcohol.
                Avoid close contact with people who are sick.
                <br />
                Put distance between yourself and other people (at least 6
                feet).
                <br />
                Cover your mouth and nose with a mask when around others.
                <br />
                Cover your cough or sneeze with a tissue, then throw the tissue
                in the trash.
                <br />
                Clean and disinfect frequently touched objects and surfaces
                daily.
                <br />
                CDC recommends that people wear masks in public settings and
                when around people outside of their household, especially when
                other social distancing measures are difficult to maintain.
                <br />
                Masks may help prevent people who have COVID-19 from spreading
                the virus to others." cdc.gov
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        <section id="district" class="bg-light text-muted py-5">
          <div class="container">
            <h3>District School Locations</h3>
            <div class="row">
              <div class="col-md-8">
                <Gmap />
              </div>
              <div class="col-md-4 text-left dist">
                <a href="https://www.cps.edu/">North Horizon</a>
                <p>215 Nort St. Chicago, IL</p>
                <a href="https://www.cps.edu/">West Horizon</a>
                <p>512 West St. Chicago, IL</p>
                <a href="https://www.cps.edu/">South Horizon</a>
                <p>152 South St. Chicago, IL</p>
                <a href="https://www.cps.edu/">East Horizon</a>
                <p>125 East St. Chicago, IL</p>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" class="py-5">
          <div class="container">
            <h1 class="text-center">School Activities</h1>
            <p class="text-center">Please volunteer as a chaperone</p>
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

        <section id="testimonials" class="p-4 bg-dark text-white">
          <div class="container">
            <h2 class="text-center">Parent Testimonials</h2>
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
                          Horizon is the best school my kids have ever attended.
                        </p>
                        <footer class="blockquote-footer">Karen Rich</footer>
                      </blockquote>
                    </div>

                    <div>
                      <blockquote class="blockquote">
                        <p class="mb-0">
                          I appreciate how teachers are supporting students. I
                          recommend Horion to all families.
                        </p>
                        <footer class="blockquote-footer">Mary Hope</footer>
                      </blockquote>
                    </div>

                    <div>
                      <blockquote class="blockquote">
                        <p class="mb-0">
                          I am happy to have such a good school in our
                          neighborhood.
                        </p>
                        <footer class="blockquote-footer">Tim React</footer>
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
