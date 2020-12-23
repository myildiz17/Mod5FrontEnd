import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteGrade } from '../actions/index.js'
import { updateGrade } from '../actions/index.js'
import { fetchAssignments } from '../actions/index.js'
import { fetchGrades } from '../actions/index.js'
import { currentUser } from "../actions/auth";

// import { fetchStudents } from '../actions/index.js'


class StudentView extends React.Component {


    componentDidMount(){

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

      fetch('http://localhost:3000/grades')
      .then(res => res.json())
      .then(grades => {
          this.props.fetchGrades(grades)  
          // debugger
    })

    
        fetch('http://localhost:3000/assignments')
        .then(res => res.json())
        .then(assignments => {
            this.props.fetchAssignments(assignments)  
            
      })
    }

    renderGrades = () => {
      // console.log(this.props.assignments)
      
      // debugger
      const assignmentId = parseInt(this.props.match.params.id)
      // debugger

      const assignmentNeeded = this.props.assignments.find(a=> a.id === assignmentId)
      if (assignmentNeeded) {
        return assignmentNeeded.grades.map(grade => {
          return (
              <tr>
                <td>{grade.student.firstname}</td>
                <td>{grade.grade.score}</td>
                <td><button class="btn btn-outline-danger"  onClick={()=> this.handleDelete(grade.grade.id)} >Delete</button></td>
                {/* <td><button class="btn btn-outline-danger"  onClick={()=> {this.handleUpdate(grade.grade.id)}}>Edit</button></td> */}
                <Link classname='item' to={`/grades/${grade.grade.id}/edit`} > 
                <td><button class="btn btn-outline-danger"  >Edit</button></td>
                </Link>
              </tr>
          )  
        }) 
      } else {
        return null
      }
      
      // debugger
      //find assignment by the id
      //map over assignment.grades
      //for each grade create a new tabel row with a table data of student name and table data of student grade
      //<tr>
  //     <td>Student Name</td>
  //     <td>Student Grade</td>
  // </tr>
      // return this.props.assignments.sections.map((section) => {
        // return <Section key={section.id} section={section} />;
      // });
    };

    handleDelete = (id) => {
      // debugger
      
      fetch(`http://localhost:3000/grades/${id}`, {method: 'DELETE'})
      .then(res => res.json())
      .then(grade => {
        // debugger
        console.log(grade)
        this.props.deleteGrade([id,this.props.match.params.id] )
        // this.props.deleteNote(this.props.note.id)
    }) 
    }

  render() {
    // const noteStyle = {border: '1px solid black', padding: '29%', margin: '15px 100px 15px 100px'}
    return (
        <div>

            <div >
           
            <table>
              <tr>
                    <th>Student Name</th>
                    <th>Grade</th>
                    <th></th>
                    <th></th>
              </tr>
              
                { this.props.assignments ?
                this.renderGrades()
              :
              null }
             
          
                    
            </table>
                
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    assignments: state.assignments,
    grades: state.grades
  };
};

const mapDispatchToProps = {
  deleteGrade: deleteGrade,
  updateGrade: updateGrade,
  fetchGrades: fetchGrades,
  fetchAssignments: fetchAssignments,
  currentUser: currentUser
  // handleView: handleView
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentView)

