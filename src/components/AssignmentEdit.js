import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateGrade } from "../actions/index.js";
import { fetchGrades } from "../actions/index.js";
import { updateAssignments } from "../actions/index.js";
import { currentUser } from "../actions/auth";
import { Form, Col } from "react-bootstrap";

class Edit extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      id: null,
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

    const assignmentId = parseInt(this.props.match.url.split("/")[2]);
    const assignmentToEdit = this.props.assignments.filter(
      (a) => a.id === assignmentId
    );
    const assignmentName = assignmentToEdit[0].name;

    this.setState({
      id: assignmentId,
      name: assignmentName,
    });
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      name: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const reqObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
      }),
    };

    fetch(
      `http://gradesbook.herokuapp.com/assignments/${this.state.id}`,
      reqObj
    )
      .then((resp) => resp.json())
      .then((updatedAssignment) => {
        console.log(updatedAssignment);

        this.props.history.goBack();
      });
  };

  render() {
    return (
      <header id="edit-section">
        {this.state.id ? (
          <div class="edit-backg">
            <div class="forms">
              <form class="input-group" onSubmit={this.handleSubmit}>
                <Form.Label column="lg" lg={3}>
                  Assignment:
                </Form.Label>
                <Col>
                  <input
                    class="form-control"
                    type="text"
                    name="score"
                    onChange={this.handleChange}
                    value={this.state.name}
                    placeholder=""
                  />
                </Col>

                <div>
                  <input className="btn btn-sm btn-primary" type="submit" />
                </div>
              </form>
            </div>
          </div>
        ) : null}
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    assignments: state.assignments,
  };
};

const mapDispatchToProps = {
  updateGrade: updateGrade,
  fetchGrades: fetchGrades,
  updateAssignments: updateAssignments,
  currentUser: currentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
