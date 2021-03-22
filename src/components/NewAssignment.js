import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addAssignment } from "../actions/index.js";
import { currentUser } from "../actions/auth";
import { Form, Col } from "react-bootstrap";

class NewAssignment extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      section_id: null,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("my_app_token");

    if (!token) {
      this.props.history.push("/login");
    } else {
      const reqObj = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      fetch("http://gradesbook.herokuapp.com/current_user", reqObj)
        .then((resp) => resp.json())
        .then((data) => {
          this.props.currentUser(data);
        });
    }
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        section_id: parseInt(this.props.match.params.id),
      }),
    };

    fetch(`http://gradesbook.herokuapp.com/assignments`, reqObj)
      .then((resp) => resp.json())
      .then((newAssignment) => {
        this.props.addAssignment(newAssignment);

        this.props.history.goBack();
      });
  };

  render() {
    return (
      <header id="edit-section">
        <div class="edit-backg">
          <div class="forms">
            <form onSubmit={this.handleSubmit} controlId="formGroupEmail">
              <Form.Row>
                <Form.Label column="lg" lg={3}>
                  Assignment:{" "}
                </Form.Label>
                <Col>
                  <input
                    class="form-control"
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.name}
                    placeholder=""
                  />
                </Col>
              </Form.Row>

              <input className="btn btn-sm btn-primary" type="submit" />
            </form>
          </div>
        </div>
      </header>
    );
  }
}

export default connect(null, { addAssignment, currentUser })(NewAssignment);
