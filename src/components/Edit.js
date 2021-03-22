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
      id: null,
      score: "",
      assignmentName: "",
      studentFname: "",
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

    const gradeIdToEdit = parseInt(this.props.match.params.id);
    const gradeToEdit = this.props.grades.filter((g) => g.id === gradeIdToEdit);
    const studentFname = gradeToEdit[0].student.firstname;
    const studentLname = gradeToEdit[0].student.lastname;
    const fullName = studentFname + " " + studentLname;
    const assignmentName = gradeToEdit[0].assignment.name;
    const score = gradeToEdit[0].score;

    this.setState({
      id: gradeIdToEdit,
      score: score,
      studentFname: fullName,
      assignmentName: assignmentName,
    });
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
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        score: this.state.score,
      }),
    };

    fetch(
      `http://gradesbook.herokuapp.com/grades/${this.props.match.params.id}`,
      reqObj
    )
      .then((resp) => resp.json())
      .then((updatedGrade) => {
        this.props.updateAssignments(updatedGrade);

        this.props.history.goBack();
      });
  };

  render() {
    return (
      <header id="edit-section">
        <div class="edit-backg">
          {this.state.id ? (
            <div class="forms">
              <form onSubmit={this.handleSubmit} controlId="formGroupEmail">
                <Form.Row>
                  <Form.Label column="lg" lg={2}>
                    Score:{" "}
                  </Form.Label>
                  <Col>
                    <input
                      class="form-control"
                      type="text"
                      name="score"
                      onChange={this.handleChange}
                      value={this.state.score}
                      placeholder=""
                    />
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Form.Label column="lg" lg={1.5}>
                    Student:{" "}
                  </Form.Label>
                  <Col>
                    <input
                      class="form-control"
                      type="text"
                      name="student_id"
                      onChange={this.handleChange}
                      value={this.state.studentFname}
                      placeholder=""
                    />
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Form.Label column="lg" lg={4}>
                    Assignment:{" "}
                  </Form.Label>
                  <Col>
                    <input
                      class="form-control"
                      type="text"
                      name="assignment_id"
                      onChange={this.handleChange}
                      value={this.state.assignmentName}
                      placeholder=""
                    />
                  </Col>
                </Form.Row>
                <input className="btn btn-sm btn-primary" type="submit" />
              </form>
            </div>
          ) : null}
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    grades: state.grades,
  };
};

const mapDispatchToProps = {
  updateGrade: updateGrade,
  fetchGrades: fetchGrades,
  updateAssignments: updateAssignments,
  currentUser: currentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
