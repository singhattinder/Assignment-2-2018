import React from 'react';
import ModuleList from './ModuleList';
import LessonTabs from './LessonTabs';

export default class CourseEditor extends React.Component {

    constructor(props){

        super(props);
        this.state = {courseId: ''};
        this.selectCourse = this.selectCourse.bind(this);


    }

    selectCourse(courseId) {
        this.setState({courseId: courseId});
    }

    componentDidMount() {
        this.selectCourse
        (this.props.match.params.courseId);
    }




    render(){

        return(
            <div>
                <h2>Editing course:{this.state.courseId}</h2>

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