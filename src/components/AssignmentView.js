import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAssignments } from "../actions/index.js";
import { deleteAssignment } from "../actions/index.js";

class AssignmentView extends React.Component {
  componentDidMount() {
    fetch("http://gradesbook.herokuapp.com/assignments")
      .then((res) => res.json())
      .then((assignments) => {
        this.props.fetchAssignments(assignments);
      });
  }

  handleDelete = (id) => {
    fetch(`http://gradesbook.herokuapp.com/assignments/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((assignment) => {
        console.log(assignment);
        this.props.deleteAssignment(id);
      });
  };

  render() {
    return (
      <tr>
        <td class="tablerow">
          <Link
            classname="item"
            to={`/sections/${this.props.assignment.section_id}/assignments/${this.props.assignment.id}`}
          >
            <a class="">{this.props.assignment.name}</a>
          </Link>
        </td>
        <td>
          <Link>
            <i
              class="fas fa-twitter"
              size="sm"
              onClick={() => this.handleDelete(this.props.assignment.id)}
            >
              Delete
            </i>
          </Link>
        </td>
        <td>
          <Link
            classname="item"
            to={`/assignments/${this.props.assignment.id}/edit`}
          >
            <i class="fas fa-twitter" size="sm">
              Edit
            </i>
          </Link>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = {
  fetchAssignments: fetchAssignments,
  deleteAssignment: deleteAssignment,
};

export default connect(null, mapDispatchToProps)(AssignmentView);
