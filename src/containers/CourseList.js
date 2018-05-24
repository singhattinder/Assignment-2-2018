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
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand">
                                <img alt="Courses " class="img-responsive" src="https://thumbs.dreamstime.com/s/letter-tg-logo-icon-design-initial-t-g-template-94304958.jpg"/>
                            </a>
                        </div>
                    </div>
                </nav>
                <div className="table-responsive">

        <table className="table">
            <thead>

            <tr>
                <th><input className="form-control" id="titleFld"
                           placeholder="CS5600"
                           onChange={this.titleChanged}/></th>


                <th><button className="btn btn-primary"
                             onClick={this.createCourse}>Add</button></th>
</tr>

            <tr>

                <th scope="col">Title</th>
                <th scope="col">Last Modified</th>
                <th scope="col"></th>


            </tr>

            </thead>
            <tbody>

            {this.courseRows()}

           </tbody>
        </table>
                </div>
        </div>


    )
    }
}
export default CourseList;
