import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/auth";
import Bina from "../img/southwestlogo.png";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'


class MyNavbar extends React.Component {
  handleLogout = () => {
    localStorage.removeItem("my_app_token");
    this.props.logoutUser();
  };
  render() {
    // console.log(this.props)
    // const noteStyle = {border: '1px solid black', padding: '2%', margin: '15px 100px 15px 100px'}

    return (
      <body>
        
  <Navbar bg="light" expand="md" sticky="top" >
      <div class="resim">
            <Link class="nav-link" to="/home">
              <img src={Bina} width="auto" height="120" alt=""></img>
            </Link>
      </div>
 
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <div class="container">
    <Nav className="justify-content-center" style={{ flex: 1}} >
    <ul class="navbar-nav ml-auto">

                <li class="nav-item">
                  <Link class="nav-link" to="/home">
                    Home
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    About
                  </Link>
                </li>

                <li class="nav-item">
                  {this.props.auth ? (
                    <Link
                      className="nav-link"
                      to="/login"
                      onClick={this.handleLogout}
                    >
                      Log Out
                    </Link>
                  ) : (
                    <Link className="nav-link" to="/login">
                      Log In
                    </Link>
                  )}
                </li>
              </ul>
      {/* <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link> */}
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
    </div>
  </Navbar.Collapse>
</Navbar>
{/* 

        <nav class="navbar navbar-expand-sm navbar-light fixed-top py-4">
          <div class="container">
            <Link class="nav-link" to="/home">
              <img src={Bina} width="auto" height="150" alt=""></img>
            </Link>
            <button
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <Link class="nav-link" to="/home">
                    Home
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/home">
                    About
                  </Link>
                </li>

                <li class="nav-item">
                  {this.props.auth ? (
                    <Link
                      className="nav-link"
                      to="/login"
                      onClick={this.handleLogout}
                    >
                      Log Out
                    </Link>
                  ) : (
                    <Link className="nav-link" to="/login">
                      Log In
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav> */}

        {/* <section id="showcase">
          <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item carousel-image-1 active">
                <div class="container">
                  <div class="carousel-caption d-none d-sm-block text-right mb-5">
                    <h1 class="display-3">Heading One</h1>
                    <p class="lead">Text TextTextTextTextTextTextTextTextTextText TextTextText
                      TextText</p>
                    <a href="#" class="btn btn-danger btn-lg">Sign Up Now</a>
                  </div>
                </div>
              </div>

              <div class="carousel-item carousel-image-2 ">
                <div class="container">
                  <div class="carousel-caption d-none d-sm-block mb-5">
                    <h1 class="display-3">Heading Two</h1>
                    <p class="lead">Text TextTextTextTextTextTextTextTextTextText TextTextText
                      TextText</p>
                    <a href="#" class="btn btn-primary btn-lg">Learn</a>
                  </div>
                </div>
              </div>

              <div class="carousel-item carousel-image-3">
                <div class="container">
                  <div class="carousel-caption d-none d-sm-block text-right mb-5">
                    <h1 class="display-3">Heading Three</h1>
                    <p class="lead">Text TextTextTextTextTextTextTextTextTextText TextTextText
                      TextText</p>
                    <a href="#" class="btn btn-success btn-lg">Good School</a>
                  </div>
                </div>
              </div>
            </div>
            <a href="#myCarousel" data-slide="prev" class="carousel-control-prev">
              <span class="carousel-control-prev-icon"></span>
            </a>
            <a href="#myCarousel" data-slide="next" class="carousel-control-next">
              <span class="carousel-control-next-icon"></span>
            </a>
          </div>
        </section> */}
      </body>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, { logoutUser })(MyNavbar);
