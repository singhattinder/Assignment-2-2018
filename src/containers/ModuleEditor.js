import React from 'react';
import CourseList from "./CourseList";
import LessonTabs from "./LessonTabs";
import LessonService from "../services/LessonServices";
import Tabs from "../components/Tabs";
import ModuleList from "./ModuleList";



class ModuleEditor extends React.Component{

    constructor(props) {
        super(props);
        this.setCourseId =
            this.setCourseId.bind(this);
        this.setModuleId =
            this.setModuleId.bind(this);

        this.findAllLessonsForModule = this.findAllLessonsForModule.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);


        this.lessonService = LessonService.instance;


        this.state = {
            moduleId: '',
            courseId: '',
            lesson: {title: ''},
            lessons: [

            ]
        };

    }

    componentDidMount() {
        this.setCourseId(
            this.props.match.params.courseId);

        this.setModuleId(
            this.props.match.params.moduleId);

        this.findAllLessonsForModule(this.props.match.params.moduleId, this.props.match.params.courseId);

    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(
            newProps.match.params.courseId);

        this.setModuleId(
            newProps.match.params.moduleId);

    }




    setCourseId(courseId) {
        this.setState
        ({courseId: courseId});
    }
    setModuleId(moduleId) {
        this.setState
        ({moduleId: moduleId});
    }


    findAllLessonsForModule(moduleId, courseId){
        this.lessonService.findAllLessonsForModule(moduleId, courseId)
            .then((lessons)=>{
                this.setState({lessons:lessons});
            })

    }

    deleteLesson(lessonId) {
        this.lessonService
            .deleteLesson(lessonId)
            .then(()=>{this.findAllLessonsForModule(this.state.moduleId, this.state.courseId)});

    }



    lessonTabs(){

        let less = this.state.lessons.map(

                (lesson) => {

                    return <Tabs key={lesson.id}
                                 lesson={lesson}
                                 delete={this.deleteLesson}

                    />
                }
            );

        return less};


    render(){

        return(<div>
                <h2>Editing course:{this.state.courseId}</h2>

                <div className="row">
                    <div className="col-4">
                        <ModuleList courseId={this.state.courseId}/>
                    </div>
                    <div className="col-8">
                        <ul className="nav nav-tabs">
                            {this.lessonTabs()}
                        </ul>
                    </div>
                </div>
            </div>



            )
    }

}

export default ModuleEditor;