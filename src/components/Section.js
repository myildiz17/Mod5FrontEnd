import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchTeachers } from '../actions/index.js'
import { currentUser } from "../actions/auth";
import { Table } from "react-bootstrap";



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
    
          fetch("http://gradesbook.herokuapp.com/current_user", reqObj)
            .then((resp) => resp.json())
            .then((data) => {
            
              this.props.currentUser(data);
            });
        }


        fetch('http://gradesbook.herokuapp.com/teachers')
        .then(res => res.json())
        .then(teachers => {
            this.props.fetchTeachers(teachers)  
            
      })
    }

  render() {
    // const noteStyle = {border: '1px solid black', padding: '29%', margin: '15px 100px 15px 100px'}

    return (
        <Table responsive="md" bordered>
          <tbody>
            <tr>
              <td class="tablerow">
              <Link classname='item' to={`/sections/${this.props.section.id}`} > 
                  <button class="btn btn-outline-danger" >{this.props.section.name}</button>
                </Link>
              </td>
            </tr>
          </tbody>  
           
        </Table>
    );
  }
}

const mapDispatchToProps = {

    fetchTeachers: fetchTeachers,
    currentUser: currentUser
}
export default connect(null, mapDispatchToProps)(Section)
