
import React from 'react';

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../actions/auth'

class Navbar extends React.Component {

    handleLogout = () => {
        localStorage.removeItem('my_app_token')
        this.props.logoutUser()
    }
  render() {
    // console.log(this.props)
    // const noteStyle = {border: '1px solid black', padding: '2%', margin: '15px 100px 15px 100px'}
    return (
      <div class="navbar navbar-expand-sm navbar-dark bg-primary mb-1">
        {/* <a className="navbar-brand" href="#">FlatNote</a> */}
         <ul class="navbar-nav"> 
           <li class="nav-item">
             <Link class="nav-link" to='/home'>
            Home                
          </Link>
          </li>
         
          {/* <li class="nav-item">
          <Link class="nav-link" to='/notes'>
            All Notes         
          </Link>
          </li> */}
          
          <li class="nav-item">
              { this.props.auth ? 
                <Link className="nav-link" to='/login' onClick={this.handleLogout}>
                Log Out
                 </Link>
              :
                <Link className="nav-link" to='/login'>
                 Log In
                </Link>
              }

          </li>
          
           </ul> 
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, { logoutUser })(Navbar);