import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchTeachers } from '../actions/index.js'
import { currentUser } from "../actions/auth";



class Section extends React.Component {

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


        fetch('http://localhost:3000/teachers')
        .then(res => res.json())
        .then(teachers => {
            this.props.fetchTeachers(teachers)  
            
      })
    }

  render() {
    // const noteStyle = {border: '1px solid black', padding: '29%', margin: '15px 100px 15px 100px'}

    return (
        <div>
            <div >
           
                {/* <h4 class="text-justify"> {this.props.section.name}</h4> */}
                <Link classname='item' to={`/sections/${this.props.section.id}`} > 
                  <button class="btn btn-outline-danger" >{this.props.section.name}</button>
                </Link>
                
            </div>
        </div>
    );
  }
}

const mapDispatchToProps = {

    fetchTeachers: fetchTeachers,
    currentUser: currentUser
}
export default connect(null, mapDispatchToProps)(Section)
