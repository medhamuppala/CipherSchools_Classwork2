import React, {Component} from 'react';
import './addcourse.css'
class AddCourse extends Component{
    state = {
        title:"",
        details:"",
        instructor:""
    }

   handleChange = (event) =>{
    //    event.preventDefault();
    console.log(event.target.value)
    this.setState({
           [event.target.id]: event.target.value, 

    })
   }
   handleSubmit = (event) => {        
    event.preventDefault();
    this.props.addCourse(this.state);   
    this.setState({
        title: '',
        details: '',
        instructor: ''
    })    
}
    render(){
      
        return(
            <form className="add-form" onSubmit={this.handleSubmit}>
                <label htmlFor='title'>Course Name</label>
                <input type='text' id='title' placeholder='enter your name here.....' onChange={this.handleChange} value={this.state.title}></input><br></br>

                <label htmlFor='details'>Details</label>
                <input type='text' id='details' placeholder='enter course details here.....' onChange={this.handleChange} value={this.state.details}></input><br></br>

                <label htmlFor='instructor'>Instructor Name</label>
                <input type='text' id='instructor' placeholder='enter your instructor name here.....' onChange={this.handleChange} value={this.state.instructor}></input><br></br>

                <input type='submit' value="Add Course"></input>

            </form>
        )
    }
}

export default AddCourse;