import React from 'react';
import ModuleList from './ModuleList';
import LessonTabs from './LessonTabs';
import CourseService from "../services/CourseServices";

export default class CourseEditor extends React.Component {

    constructor(props){

        super(props);
        this.state = {courseId: '',
        courseTitle:''
        };
        this.selectCourse = this.selectCourse.bind(this);
        this.setCourseTitle = this.setCourseTitle.bind(this);
        this.courseService = CourseService.instance;


    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    componentDidMount() {
        this.selectCourse
        (this.props.match.params.courseId);
        this.setCourseTitle(this.props.match.params.courseId);
    }

    async setCourseTitle(courseId){



        let title = await Promise.resolve(this.courseService.findCoursesById(courseId))
            .then(function(response){
                return response.title;

            });


        console.log(title);

        this.setState({courseTitle: title });

    }


    render(){

        return(
            <div>

                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand">
                                <img alt="Courses " className="img-responsive"
                                     src="https://thumbs.dreamstime.com/s/letter-tg-logo-icon-design-initial-t-g-template-94304958.jpg"/>
                            </a>
                        </div>
                    </div>
                </nav>
                <h2>Editing course:{this.state.courseTitle}</h2>

            <div className="row">
                <div className="col-4">
                   <ModuleList courseId={this.state.courseId}/>
                </div>
                <div className="col-8">
                    <LessonTabs/>
                </div>
            </div>
            </div>

        );

    }
}