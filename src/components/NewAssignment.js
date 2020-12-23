import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addAssignment } from '../actions/index.js'
import { currentUser } from "../actions/auth";

// import { updateAssignments } from '../actions/index.js'


class NewAssignment extends React.Component {

  constructor(){
    super()
    this.state = {
      name: "",
      section_id: null
    }
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
        
          this.props.currentUser(data);
        });
    }
  }
  

  // componentDidMount(){
    
  //   // debugger
  //   const gradeIdToEdit = parseInt(this.props.match.params.id)
  //   const gradeToEdit =  this.props.grades.filter(g=>g.id === gradeIdToEdit)
  //   const studentFname = gradeToEdit[0].student.firstname
  //   const studentLname = gradeToEdit[0].student.lastname
  //   const fullName = studentFname + " " + studentLname
  //   const assignmentName = gradeToEdit[0].assignment.name
  //   const score = gradeToEdit[0].score

  //   // debugger
  //   this.setState({
  //     // id: gradeIdToEdit,
  //     name: "",
  //     section_id: this.props.match.params.id,
  //     // assignmentName: assignmentName

        
  //   })
  
  // }

  handleChange = (e) => {
    // e.preventDefault()
    // debugger
    this.setState({
      ...this.state,
    [e.target.name]: e.target.value,

  })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // debugger
    const reqObj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:  JSON.stringify(
          // this.state
         {
          name: this.state.name,
          section_id: parseInt(this.props.match.params.id)
         } 
        )
      }
  
  
      fetch(`http://localhost:3000/assignments`, reqObj)
      .then(resp => resp.json())
      .then(newAssignment => {
          // debugger
        // this.props.updateGrade(updatedGrade)
        this.props.addAssignment(newAssignment)
        
  
  
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
           
           {/* { this.state.id ?
            ( */}
            <div style={{ width : 750, height : 950, marginLeft : 570, marginTop : 30 }}>
                
            <form class="input-group" onSubmit={this.handleSubmit}  >
                <label for="name">Name: </label>
                <input class="form-control" type='text' name='name' onChange={this.handleChange} value={this.state.name} placeholder=""/>
                {/* <label for="name">Student Name: </label>
                <input class="form-control" type='text' name='student_id' onChange={this.handleChange} value={this.state.studentFname} placeholder=""/>
                <label for="name">Assignment Name: </label>
                <input class="form-control" type='text' name='assignment_id' onChange={this.handleChange} value={this.state.assignmentName} placeholder=""/> */}
                <input className= "btn btn-sm btn-primary" type='submit' />
            </form>
            </div>
            {/* )
            :
            null}   */}
       </div>
   )
 }
}

// const mapStateToProps = (state) => {
//     return {
//       grades: state.grades
//     }
//   }

//   const mapDispatchToProps = {
//     updateGrade: updateGrade,
//     updateAssignments: updateAssignments
//   }
  
export default connect(null,{ addAssignment, currentUser  })(NewAssignment)
