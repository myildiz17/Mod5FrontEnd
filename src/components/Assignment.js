import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { currentUser } from "../actions/auth"
import { fetchAssignments } from "../actions/index"
import AssignmentView from './AssignmentView'
// import { fetchTeachers } from '../actions/index.js'


class Assignment extends React.Component {

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
            
              this.props.currentUser(data);
            });
        }
        
            fetch('http://localhost:3000/assignments')
            .then(res => res.json())
            .then(assignments => {
                this.props.fetchAssignments(assignments)  
                // debugger
          })
        
      }
  
    renderAssignments = () => {
        // debugger
       const assignmentsNeeded = this.props.assignments.filter(assignment => assignment.section_id === parseInt(this.props.match.params.id))
        // const teacher = this.props.teachers.filter((t)=> t.sections[0].section.id === parseInt(this.props.match.params.id))
        // const teacherId = teacher[0].id
        // const teacherId = this.props.user.id
        // const tNeeded = this.props.teachers.filter(t => t.id === teacherId)
        
        // const sectionNeeded =tNeeded[0].sections.filter(s => s.section.id === parseInt(this.props.match.params.id))
        // // debugger
        
      return assignmentsNeeded.map((assignment) => {
        return <AssignmentView key={assignment.id} section={assignment.section_id} assignment={assignment} />;
      })
    };
  
    render() {
        
      return (
        //  <div style={{ width : 150, height : 250, marginLeft : 570, marginTop : 30 }}>
        <div>
          <form class="form-inline">
            <div>
              <h1 style={{ marginLeft: 670 }}></h1>
              <h1 style={{ marginLeft: 670 }}>ASSIGNMENTS:</h1>
              <div className="items">{this.renderAssignments()}</div>
              <Link classname='item' to={`/sections/${this.props.match.params.id}/assignments/new`} > 
                  <button class="btn btn-outline-success"  >Add Assignment</button>
              </Link>
            </div>
          </form>
        </div>
      );
    }
  }

const mapStateToProps = (state) => {
    return {
        teachers: state.teachers,
        assignments: state.assignments
    }
}

export default connect(mapStateToProps, { currentUser, fetchAssignments })(Assignment)


// this.props.teachers.filter((t)=> t.sections[0].section.id === 1)