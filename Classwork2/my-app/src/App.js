import React from 'react';
import Display from './components/Display';
import Addcourse from './components/Addcourse'
import Delete from './components/DeleteCourse'
import './App.css';


class App extends React.Component {

  state = {
    courseDetails: [
      {title: 'React', details:'Best UI Lib', instructor:'jack'},
      {title: 'Node', details:'I/o event driven', instructor:'jack'},
      {title: 'MongoDB', details:'Non-sql database', instructor:'jane'},
    ]
  }

  addCourse = (course) => {
    console.log('Inside App.js', course);
    course.id = Math.ceil(Math.random() * 100);  
    let courseDetails = [...this.state.courseDetails, course];
    console.log('New Course Details Array', courseDetails);
    // re render happens
    this.setState({
     //  courseDetails: newCourseDetails
       courseDetails
    })
  }
  deleteCourse = (course) =>{
    

  }

  render(){
    
    return (
    <div className="App">
      <h1>Course Page</h1>
      <Display courseDetails = {this.state.courseDetails}/>
      <Addcourse addCourse = {this.addCourse}/>      
    </div>
  );
}
}

export default App;
