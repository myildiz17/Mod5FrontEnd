import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchAssignments } from "../actions/index.js";
import { deleteAssignment } from "../actions/index.js";

class AssignmentView extends React.Component {
  componentDidMount() {
    fetch("http://localhost:3000/assignments")
      .then((res) => res.json())
      .then((assignments) => {
        this.props.fetchAssignments(assignments);
        // debugger
      });
  }

  handleDelete = (id) => {
    // debugger

    fetch(`http://localhost:3000/assignments/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((assignment) => {
        // debugger
        console.log(assignment);
        this.props.deleteAssignment(id);
        // this.props.deleteNote(this.props.note.id)
      });
  };

  render() {
    // const noteStyle = {border: '1px solid black', padding: '29%', margin: '15px 100px 15px 100px'}
    // debugger
    return (
      // <div>
      //     <div >

      //         {/* <h4 class="text-justify"> {this.props.section.name}</h4> */}
      //         <Link classname='item' to={`/sections/${this.props.assignment.section_id}/assignments/${this.props.assignment.id}`} >
      //           <button class="btn btn-outline-danger"  >{this.props.assignment.name}</button>
      //         </Link>

      //     </div>
      // </div>
    
      
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
              {/* <td><button class="btn btn-outline-danger"  onClick={()=> {this.handleUpdate(grade.grade.id)}}>Edit</button></td> */}
              <Link classname="item" to={`/assignments/${this.props.assignment.id}/edit`}>
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
