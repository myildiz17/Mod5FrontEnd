import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateGrade } from '../actions/index.js'
import { fetchGrades } from '../actions/index.js'
import { updateAssignments } from '../actions/index.js'
import { currentUser } from "../actions/auth";



class Edit extends React.Component {

  constructor(){
    super()
    this.state = {
      id: null,
      score:"",
      assignmentName:"",
      studentFname: ""
    }
  }

  

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
   

    // debugger
    const gradeIdToEdit = parseInt(this.props.match.params.id)
    const gradeToEdit =  this.props.grades.filter(g=>g.id === gradeIdToEdit)
    const studentFname = gradeToEdit[0].student.firstname
    const studentLname = gradeToEdit[0].student.lastname
    const fullName = studentFname + " " + studentLname
    const assignmentName = gradeToEdit[0].assignment.name
    const score = gradeToEdit[0].score

    // debugger
    this.setState({
      id: gradeIdToEdit,
      score: score,
      studentFname: fullName,
      assignmentName: assignmentName

        
    })
    
  }

  handleChange = (e) => {
    // e.preventDefault()
    // debugger
    this.setState({
      ...this.state,
    [e.target.name]: e.target.value
  })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // debugger
    const reqObj = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body:  JSON.stringify(
          // this.state
         {
          score: this.state.score
         } 
        )
      }
  
  
      fetch(`http://localhost:3000/grades/${this.props.match.params.id}`, reqObj)
      .then(resp => resp.json())
      .then(updatedGrade => {
        //   debugger
        // this.props.updateGrade(updatedGrade)
        this.props.updateAssignments(updatedGrade)
        
  
  
        // this.setState({
        //   title: '',
        //   content: '',
        //   // user_id: null,
        //   // id: null,
        // })

        this.props.history.goBack()
       
      })

  }

 render(){
    //  debugger
   return (
       <div>
           
           { this.state.id ?
            (
            <div style={{ width : 750, height : 950, marginLeft : 570, marginTop : 30 }}>
                
            <form class="input-group" onSubmit={this.handleSubmit}  >
                <label for="name">Score: </label>
                <input class="form-control" type='text' name='score' onChange={this.handleChange} value={this.state.score} placeholder=""/>
                <label for="name">Student Name: </label>
                <input class="form-control" type='text' name='student_id' onChange={this.handleChange} value={this.state.studentFname} placeholder=""/>
                <label for="name">Assignment Name: </label>
                <input class="form-control" type='text' name='assignment_id' onChange={this.handleChange} value={this.state.assignmentName} placeholder=""/>
                <input className= "btn btn-sm btn-primary" type='submit' />
            </form>
            </div>
            )
            :
            null}  
       </div>
   )
 }
}

const mapStateToProps = (state) => {
    return {
      grades: state.grades
    }
  }

  const mapDispatchToProps = {
    updateGrade: updateGrade,
    fetchGrades: fetchGrades,
    updateAssignments: updateAssignments,
    currentUser: currentUser
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Edit)
