
import './App.css';
import React from 'react';
import MyNavbar from './components/MyNavbar';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Gmap from './components/Gmap';
import StudentView from './components/StudentView';
import Assignment from './components/Assignment';
import NewAssignment from './components/NewAssignment';
import Edit from './components/Edit';
import AssignmentEdit from './components/AssignmentEdit';
import { connect } from 'react-redux'
import { currentUser } from './actions/auth'
import { Route, Switch, withRouter } from 'react-router-dom'
// import { connect } from 'react-redux'

class App extends React.Component {

//   componentDidMount(){
//     const token = localStorage.getItem('my_app_token')

//     if (!token){
//         this.props.history.push('/login')
//     } else {

//       const reqObj = {
//           method: 'GET',
//           headers: {
//               Authorization: `Bearer ${token}`
//           }
//       }

//       fetch('http://localhost:3000/current_user', reqObj) 
//       .then(resp => resp.json())
//       .then(data => {    
//            this.props.currentUser(data)
//           })
//     }
// }

  render(){
    return (
      <div className="App">
        <MyNavbar icon="paint brush" title="Painterest" description="out app" />
        <Switch>
          <Route exact component={Dashboard} path='/dashboard'  />
          <Route exact component={Login} path='/login'  />
          <Route exact component={Home} path='/home'  />
          <Route exact component={Home} path='/'  />
          <Route exact component={About} path='/about'  />
          <Route exact component={Gmap} path='/map'  />
          <Route exact component={Assignment} path='/sections/:id'  />
          <Route exact component={NewAssignment} path='/sections/:id/assignments/new'  />
          <Route exact component={StudentView} path='/sections/:id/assignments/:id'  />
          <Route exact component={Edit} path='/grades/:id/edit'  />
          <Route exact component={AssignmentEdit} path='/assignments/:id/edit'  />
        </Switch>
      </div>
    );
  }
  
};

export default connect(null, { currentUser }) (withRouter(App))
