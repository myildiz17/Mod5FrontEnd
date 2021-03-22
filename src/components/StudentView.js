import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteGrade } from "../actions/index.js";
import { updateGrade } from "../actions/index.js";
import { fetchAssignments } from "../actions/index.js";
import { fetchGrades } from "../actions/index.js";
import { currentUser } from "../actions/auth";
import { Card, Button, Table } from "react-bootstrap";
import imgc from "../img/myildiz.jpg";

class StudentView extends React.Component {
  constructor() {
    super();
    this.state = {
      aName: "",
      loading: true,
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

    fetch("http://gradesbook.herokuapp.com/grades")
      .then((res) => res.json())
      .then((grades) => {
        this.props.fetchGrades(grades);
      });

    fetch("http://gradesbook.herokuapp.com/assignments")
      .then((res) => res.json())
      .then((assignments) => {
        this.props.fetchAssignments(assignments);
        const assignmentId = parseInt(this.props.match.params.id);
        const assignmentNeeded = assignments.find((a) => a.id === assignmentId);

        this.setState({
          aName: assignmentNeeded.name,
          loading: false,
        });
      });
  }

  renderGrades = () => {
    const assignmentId = parseInt(this.props.match.params.id);

    const assignmentNeeded = this.props.assignments.find(
      (a) => a.id === assignmentId
    );

    if (assignmentNeeded) {
      return assignmentNeeded.grades.map((grade) => {
        return (
          <tr>
            <td>{grade.student.firstname + " " + grade.student.lastname}</td>
            <td>{grade.grade.score}</td>
            <td>
              <Link>
                <i
                  class="fas fa-twitter"
                  size="sm"
                  onClick={() => this.handleDelete(grade.grade.id)}
                >
                  Delete
                </i>
              </Link>
            </td>
            <td>
              <Link classname="item" to={`/grades/${grade.grade.id}/edit`}>
                <i class="fas fa-twitter" size="sm">
                  Edit
                </i>
              </Link>
            </td>
          </tr>
        );
      });
    } else {
      return null;
    }
  };

  handleDelete = (id) => {
    fetch(`http://gradesbook.herokuapp.com/grades/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((grade) => {
        console.log(grade);
        this.props.deleteGrade([id, this.props.match.params.id]);
      });
  };

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-3 teacher">
            <Card style={{ width: "17rem", marginLeft: 0 }}>
              <Card.Img variant="top" src={imgc} />
              <Card.Body>
                <Card.Title>Muhammet Yildiz</Card.Title>
                <Card.Text>
                  <strong>Subject:</strong> Mathematics Teacher
                </Card.Text>
                <Card.Text>
                  <strong>Motto:</strong> "Educating the mind without educating
                  the heart is no education at all"
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div class="col-md-9 sections">
            <div>
              <Table>
                <tr>
                  <strong>Assignment Name: </strong> {this.state.aName}
                </tr>
              </Table>
              <Table responsive="md" bordered>
                <thead class="tableaHeadAssignment">
                  <tr>
                    <td class="tablehead">Student Name </td>
                    <td class="tablehead">Grade</td>
                    <td>Delete</td>
                    <td>Edit</td>
                  </tr>
                </thead>
                <tbody>
                  {this.props.assignments ? this.renderGrades() : null}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    assignments: state.assignments,
    grades: state.grades,
  };
};

const mapDispatchToProps = {
  deleteGrade: deleteGrade,
  updateGrade: updateGrade,
  fetchGrades: fetchGrades,
  fetchAssignments: fetchAssignments,
  currentUser: currentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentView);
