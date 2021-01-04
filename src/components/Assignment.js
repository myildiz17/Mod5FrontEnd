import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { currentUser } from "../actions/auth";
import { fetchAssignments } from "../actions/index";
import AssignmentView from "./AssignmentView";
import { Card, Button, Table } from "react-bootstrap";
import imgc from "../img/myildiz.jpg";
// import { fetchTeachers } from '../actions/index.js'

class Assignment extends React.Component {
  constructor() {
    super();
    this.state = {
      section: "",
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("my_app_token");
    // debugger
    if (!token) {
      this.props.history.push("/login");
    } else {
      const reqObj = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      fetch("http://localhost:3000/current_user", reqObj)
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data)
          this.props.currentUser(data);
        });
        
        fetch("http://localhost:3000/assignments")
        .then((res) => res.json())
        .then((assignments) => {
          this.props.fetchAssignments(assignments);
  
          const allAssignment = this.props.assignments.filter(
            (assignment) =>
              assignment.section_id === parseInt(this.props.match.params.id)
          );
          // debugger
          const sectName = allAssignment[1].section.name;
          // const sectName = allAssignments[0]
          this.setState({
            section: sectName,
          });
          // debugger
        });
      
    }

    

    // fetch("http://localhost:3000/assignments")
    //   .then((res) => res.json())
    //   .then((assignments) => {
    //     this.props.fetchAssignments(assignments);
    //     // debugger
    //   });
    // debugger
    // const allAssignments = this.props.assignments.filter(assignment => assignment.section_id === parseInt(this.props.match.params.id))
    // const sectName = allAssignments[0].section.name
    // this.setState({
    //       section: sectName
    //     })
  }

  renderAssignments = () => {
    // console.log(this.props.assignments);
    // const sectName = this.props.assignments[0].section.name
    // const sectName = allAssignments[0]
    // this.setState({
    //   section: sectName
    // })
    // debugger
    const assignmentsNeeded = this.props.assignments.filter(
      (assignment) =>
        assignment.section_id === parseInt(this.props.match.params.id)
    );
    // const teacher = this.props.teachers.filter((t)=> t.sections[0].section.id === parseInt(this.props.match.params.id))
    // const teacherId = teacher[0].id
    // const teacherId = this.props.user.id
    // const tNeeded = this.props.teachers.filter(t => t.id === teacherId)

    // const sectionNeeded =tNeeded[0].sections.filter(s => s.section.id === parseInt(this.props.match.params.id))
    // const sectName = assignmentsNeeded[0].section.name

    // this.setState({
    //         section: sectName
    //       })
    // debugger
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
    // debugger

    return (
      //  <div style={{ width : 150, height : 250, marginLeft : 570, marginTop : 30 }}>
      
      <div class="container">
        {/* { this.state.section ? ( */}
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
                {/* <Button variant="primary">Go somewhere</Button> */}
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
         {/* ) : null} */}
      </div>
     

      // <div>
      //   <form class="form-inline">
      //     <div>
      //       <h1 style={{ marginLeft: 670 }}></h1>
      //       <h1 style={{ marginLeft: 670 }}>ASSIGNMENTS:</h1>
      //       <div className="items">{this.renderAssignments()}</div>
      //       <Link classname='item' to={`/sections/${this.props.match.params.id}/assignments/new`} >
      //           <button class="btn btn-outline-success"  >Add Assignment</button>
      //       </Link>
      //     </div>
      //   </form>
      // </div>
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

// this.props.teachers.filter((t)=> t.sections[0].section.id === 1)
