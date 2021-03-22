import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { currentUser } from "../actions/auth";
import { fetchAssignments } from "../actions/index";
import AssignmentView from "./AssignmentView";
import { Card, Button, Table } from "react-bootstrap";
import imgc from "../img/myildiz.jpg";

class Assignment extends React.Component {
  constructor() {
    super();
    this.state = {
      section: "",
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
          console.log(data);
          this.props.currentUser(data);
        });

      fetch("http://gradesbook.herokuapp.com/assignments")
        .then((res) => res.json())
        .then((assignments) => {
          this.props.fetchAssignments(assignments);

          const allAssignment = this.props.assignments.filter(
            (assignment) =>
              assignment.section_id === parseInt(this.props.match.params.id)
          );

          const sectName = allAssignment[1].section.name;

          this.setState({
            section: sectName,
          });
        });
    }
  }

  renderAssignments = () => {
    const assignmentsNeeded = this.props.assignments.filter(
      (assignment) =>
        assignment.section_id === parseInt(this.props.match.params.id)
    );

    return assignmentsNeeded.map((assignment) => {
      return (
        <AssignmentView
          key={assignment.id}
          section={assignment.section_id}
          assignment={assignment}
        />
      );
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
                <tr class="tablehead">
                  <strong>{this.state.section} - All Assignments</strong>
                </tr>
              </Table>
              <Table responsive="md" bordered>
                <thead class="tableaHeadAssignment">
                  <tr>
                    <td class="tablehead">Assignment</td>
                    <td>Delete</td>
                    <td>Edit</td>
                  </tr>
                </thead>
                <tbody>{this.renderAssignments()}</tbody>
              </Table>
              <div className="items">
                <Link
                  classname="item"
                  to={`/sections/${this.props.match.params.id}/assignments/new`}
                >
                  <button class="btn btn-outline-success">
                    Add Assignment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    teachers: state.teachers,
    assignments: state.assignments,
  };
};

export default connect(mapStateToProps, { currentUser, fetchAssignments })(
  Assignment
);
