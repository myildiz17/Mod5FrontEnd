import React from 'react'
import { connect } from 'react-redux'
import { currentUser } from '../actions/auth'

class Home extends React.Component {
   

   render(){
       console.log('hi')
       
     return (
       <div style={{ width : 150, height : 250, marginLeft : 570, marginTop : 30 }}>
      <form class="form-inline"  >
        Home Page
        {/* <input class="form-control mr-2" type='text' placeholder= "Enter your username" />
        <input class="btn btn-outline-info" type='submit' /> */}
      </form>
       </div>
    
     )
   }
  }

  const mapStateToProps = (state) => {
      return {
          auth: state.auth
      }
  }
  
  export default connect(mapStateToProps, { currentUser })(Home)