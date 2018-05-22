import React from 'react';
import CourseRow from "../components/CourseRow";
import CourseService from "../services/CourseServices";


class CourseList extends React.Component {
    constructor() {
        super();
        this.courseService = CourseService.instance;
        this.createCourse = this.createCourse.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.findAllCourses = this.findAllCourses.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);

    }

    componentDidMount(){

        this.findAllCourses();

    }


    findAllCourses(){
        this.courseService.findAllCourses().then((courses)=>{
            //console.log(courses);
            this.setState({courses:courses});
        })

    }




    courseRows(){

        let courses =null;

            if (this.state){

              courses = this.state.courses.map(

                     (course) => {

                        return <CourseRow key={course.id}
                                          course={course}
                                          delete={this.deleteCourse}

                        />
                    }
                );

            }
            console.log(this.state);

        return (
            courses
        )



    }

    titleChanged(event){
        this.setState({

            course: {title: event.target.value}
        });


    }

    createCourse(){

        this.courseService
            .createCourse(this.state.course)
            .then(() => { this.findAllCourses(); });


    }
    deleteCourse(courseId) {
        this.courseService
            .deleteCourse(courseId)
            .then(()=>{this.findAllCourses()});

    }



    render() {
        return (
            <div>
             <h1>Course Manager</h1>
            <h3>Course List</h3>
        <table className="table">
            <thead>

            <tr>

                <th>Title</th>
                <th>Owned by</th>
                <th>Last Modified</th>

            </tr>
            <tr>
                <th><input className="form-control" id="titleFld"
                           placeholder="CS5600"
                           onChange={this.titleChanged}/></th>

                <th><button className="btn btn-primary"
                             onClick={this.createCourse}>Add</button></th>
            </tr>

            </thead>
            <tbody>
            {this.courseRows()}
           </tbody>
        </table>
        </div>


    )
    }
}
export default CourseList;
