import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import propTypes from 'prop-types';
class CoursesPage extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     course: { title: ""}
  //   }

  //   // this.handleChange = this.handleChange.bind(this); // binding in the constructor
  //   // here the fuction is bound only once so wont be reallocated on every render.
  // }

  state = {
    course: { title: ""}
  }
  // handleChange(event) + needs binding
  handleChange = (event) => { 
    // arrow function inherit the binding context of their enclosing scope
    const course = { ...this.state.course, title: event.target.value };
    this.setState({course});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch(courseActions.createCourse(this.state.course))
    // alert(this.state.course.title)
  }

  render() { 
    return (
      <div>
        <form onSubmit={this.handleSubmit} method="post">
          <h2>Courses</h2>
          <h3>Add Course</h3>
          {/*  <input type="text" onChange={this.handleChange.bind(this)} value={this.state.course.title} name="title" id="title"/> */}
          <input type="text" onChange={this.handleChange} value={this.state.course.title} name="title" id="title"/>
          <input type="submit" value="save"/>
        </form>
        {this.props.courses.map( course => {
          return <div key={course.title}>{course.title}</div>
        })}
      </div>
    );
  }
}

CoursesPage.propTypes = {
  dispatch: propTypes.func.isRequired,
  courses: propTypes.array.isRequired
};

function mapStateToProps(state){
  return {
    courses: state.courses
  }
}

// function mapDispatchProps(){
// for later 
// }

export default connect(mapStateToProps)(CoursesPage);