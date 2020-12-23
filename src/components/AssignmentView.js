import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchAssignments } from '../actions/index.js'


class AssignmentView extends React.Component {


    componentDidMount(){
        fetch('http://localhost:3000/assignments')
        .then(res => res.json())
        .then(assignments => {
            this.props.fetchAssignments(assignments)  
            // debugger
      })
    }

  render() {
    // const noteStyle = {border: '1px solid black', padding: '29%', margin: '15px 100px 15px 100px'}
// debugger
    return (
        <div>
            <div >
           
                {/* <h4 class="text-justify"> {this.props.section.name}</h4> */}
                <Link classname='item' to={`/sections/${this.props.assignment.section_id}/assignments/${this.props.assignment.id}`} > 
                  <button class="btn btn-outline-danger"  >{this.props.assignment.name}</button>
                </Link>
                
            </div>
        </div>
    );
  }
}

const mapDispatchToProps = {

    fetchAssignments: fetchAssignments
}

export default connect(null, mapDispatchToProps)(AssignmentView)

