import React from "react";
import { connect } from "react-redux";
import { currentUser } from "../actions/auth";
import person3 from "../img/person3.jpg";
import person2 from "../img/person2.jpg";
import person1 from "../img/person1.jpg";
import person4 from "../img/person4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import emailjs from "emailjs-com";

class About extends React.Component {
  sendEmail = (e) => {
    e.preventDefault();
// debugger
    emailjs.sendForm('service_dqyips9', 'template_83udi88', e.target, 'user_m5Gk1KYwOLPEE4qKil1I2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  render() {
    console.log("hi");

    return (
      //
      <div>
        <section id="contact" class="py-3">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="carddd">
                  <h4>Get In Touch</h4>
                  <p>
                    {" "}
                    Pleae visit the school for more information and open house
                    dates. 
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
                    <h3 class="text-center">
                      Please fill out this form to contact us
                    </h3>
                    <hr></hr>
                    {/* <div class="container">
                      <form onSubmit={this.sendEmail}>
                        <div class="col-md-6 form-group mx-auto">
                          <input type="text" class="form-control" placeholder="Name" name="name"/>
                        </div> 
                        <div class="col-md-6 form-group mx-auto">
                          <input type="text" class="form-control" placeholder="Email Address" name="email"/>
                        </div> 
                        <div class="col-md-6 form-group mx-auto">
                          <input type="text" class="form-control" placeholder="Subject" name="subject"/>
                        </div> 
                        <div class="col-md-6 form-group mx-auto">
                          <textarea  class="form-control" placeholder="Your message" name="message"></textarea>
                        </div> 
                        <div class="col-md-6 mx-auto">
                          <input type="submit" class="btn btn-info" value="Send Message"></input>
                        </div> 
                      </form>
                    </div> */}

                    <form onSubmit={this.sendEmail}>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="First Name"
                              name="name"
                            ></input>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Last Name"
                              name="lname"
                            ></input>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Email"
                              name="email"
                            ></input>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Phone Number"
                              name="phone"
                            ></input>
                          </div>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <textarea
                              class="form-control"
                              placeholder="Message"
                              name="message"
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="submit"
                              value="Submit"
                              class="btn btn-outline-danger btn-block"
                            ></input>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Staff */}
        <section id="staff" class="py-5 text-center bg-dark text-white">
          <div class="container">
            {/* <h1>Main Office</h1>
            <hr></hr> */}
            <div class="row">
              <div class="col-md-3">
                <img src={person3} alt="" class="img-fluid rounded-circle mb-2"></img>
                <h4>Tom Dee</h4>
                <small>Director</small>
                <hr></hr>
                <small>dee@horizon.org</small>
              </div>
              <div class="col-md-3">
                <img src={person2} alt="" class="img-fluid rounded-circle mb-2"></img>
                <h4>Mary Lee</h4>
                <small>Assistant Director</small>
                <hr></hr>
                <small>lee@horizon.org</small>
              </div>
              <div class="col-md-3">
                <img src={person4} alt="" class="img-fluid rounded-circle mb-2"></img>
                <h4>Robert Hick</h4>
                <small>Dean of Student</small>
                <hr></hr>
                <small>hick@horizon.org</small>
              </div>
              <div class="col-md-3">
                <img src={person1} alt="" class="img-fluid rounded-circle mb-2"></img>
                <h4>Jone Globe</h4>
                <small>Secretary</small>
                <hr></hr>
                <small>globe@horizon.org</small>
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
