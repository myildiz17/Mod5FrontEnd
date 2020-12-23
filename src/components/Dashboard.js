import React from "react";
import { connect } from "react-redux";
import { currentUser } from "../actions/auth";
import Section from "./Section";

class Dashboard extends React.Component {
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

  rendersections = () => {
      
    return this.props.auth.sections.map((section) => {
      return <Section key={section.id} section={section} />;
    });
  };

  render() {
    return (
      //  <div style={{ width : 150, height : 250, marginLeft : 570, marginTop : 30 }}>
      <div>
        <form class="form-inline">
          <div>
            <h1 style={{ marginLeft: 670 }}></h1>
            <h1 style={{ marginLeft: 670 }}>SECTIONS:</h1>
            <div className="items">{this.props.auth ?
            this.rendersections()
            :
            null}</div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { currentUser })(Dashboard);
