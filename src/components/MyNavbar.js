import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/auth";
import Bina from "../img/southwestlogo.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class MyNavbar extends React.Component {
  handleLogout = () => {
    localStorage.removeItem("my_app_token");
    this.props.logoutUser();
  };
  render() {
    return (
      <body>
        <Navbar bg="light" expand="md" sticky="top">
          <div class="resim">
            <Link class="nav-link" to="/home">
              <img src={Bina} width="auto" height="120" alt=""></img>
            </Link>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div class="container">
              <Nav className="justify-content-center" style={{ flex: 1 }}>
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
                        Grade Book
                      </Link>
                    )}
                  </li>
                </ul>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
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
