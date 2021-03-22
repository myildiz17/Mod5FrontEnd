import React from "react";
import { connect } from "react-redux";
import { currentUser } from "../actions/auth";
import Section from "./Section";
import { fetchAssignments } from "../actions/index";
import { Card, Button, Table } from "react-bootstrap";
import imgc from "../img/myildiz.jpg";

class Dashboard extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem("my_app_token");

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

    fetch("http://gradesbook.herokuapp.com/assignments")
      .then((res) => res.json())
      .then((assignments) => {
        this.props.fetchAssignments(assignments);
      });
  }

  rendersections = () => {
    return this.props.auth.sections.map((section) => {
      return <Section key={section.id} section={section} />;
    });
  };

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-3 teacher">
            <Card style={{ width: "17rem", marginLeft: 0 }}>
              <Card.Img variant="top" src={imgc} />
              <Card.Body>
                <Card.Title>Muhammet Yildiz</Card.Title>
                <Card.Text>
                  <strong>Subject:</strong> Mathematics Teacher
                </Card.Text>
                <Card.Text>
                  <strong>Motto:</strong> "Educating the mind without educating
                  the heart is no education at all"
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div class="col-md-9 sections">
            <div>
              <Table responsive="md" bordered variant="secondary">
                <thead>
                  <tr>
                    <th class="tablehead">Sections</th>
                  </tr>
                </thead>
              </Table>
              <div className="items">
                {this.props.auth ? this.rendersections() : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { currentUser, fetchAssignments })(
  Dashboard
);
