import React from 'react';
import './Display.css';
import Loading from './Loading';


const Display = (props) =>{

    const courseList = props.courseDetails.length ? (props.courseDetails.map( (element,index) => {
        return(

        <div className ="course" key = {index+1}>
            <h3>CourseName: {element.title} </h3>
            <p>Details: {element.details}</p>
            <p>instructor: <i>{element.instructor}</i> </p>
            <button onClick={() => this.props.onDelete(this.id)}>Delete</button>
        </div> 

        )
    })) :(<Loading />)
    return(
        <div className="course-dispaly">
            {courseList}
        </div>
        
    )
}
export default Display;