import React from "react";
import { connect } from "react-redux";
import { loginSuccess } from "../actions/auth";

class Login extends React.Component {
  state = {
    username: "tom",
    password: "tmath",
    error: null,
  };

  handleChange = (e) => {
    // debugger
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    //   this.props.history.push(`/notes`)

    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    };

    fetch("http://localhost:3000/auth", reqObj)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
          this.setState({
            error: data.error,
          });
        } else {
          localStorage.setItem("my_app_token", data.token);
          this.props.loginSuccess(data);
          this.props.history.push("/dashboard");
        }
        // debugger
      });
  };

  render() {
    return (
      //  <div style={{ width : 150, height : 250, marginLeft : 570, marginTop : 30 }}>
      //      {this.state.error ? <h4 style={{color: 'red'}}>{this.state.error}</h4> : null}
      // <form class="form-inline"  onSubmit={this.handleSubmit}>
      //   Login Page
      //   <input name={'username'} class="form-control mr-2" onChange={this.handleChange} value={this.state.username} placeholder= "Enter your username" />
      //   <input name={'password'} class="form-control mr-2" onChange={this.handleChange} value={this.state.password} placeholder= "Enter your password" />
      //   <input class="btn btn-outline-info" type='submit' value='login'/>
      // </form>
      //  </div>

      <header id="home-section">
        <div class="dark-overlay">
          <div class="home-inner container">
              <div class="card bg-primary text-center card-form">
              {this.state.error ? <h4 style={{color: 'red'}}>{this.state.error}</h4> : null}
                <div class="card-body" >
                  <h3>Grade Book Login</h3>
                  <form class="form" onSubmit={this.handleSubmit}>
                    <div class="form-group">
                      <input
                        name={"username"}
                        class="form-control form-control-lg"
                        onChange={this.handleChange}
                        value={this.state.username}
                        placeholder="Enter your username"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        name={"password"}
                        class="form-control form-control-lg"
                        onChange={this.handleChange}
                        value={this.state.password}
                        placeholder="Enter your password"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        class="btn btn-outline-light btn-block"
                        type="submit"
                        value="submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = {
  loginSuccess: loginSuccess,
};

export default connect(null, mapDispatchToProps)(Login);
