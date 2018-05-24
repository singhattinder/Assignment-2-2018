import React from 'react';
import CourseList from "./CourseList";
import LessonTabs from "./LessonTabs";
import LessonService from "../services/LessonServices";
import Tabs from "../components/Tabs";
import ModuleList from "./ModuleList";
import CourseService from "../services/CourseServices";



class ModuleEditor extends React.Component{

    constructor(props) {
        super(props);
        this.setCourseId =
            this.setCourseId.bind(this);
        this.setModuleId =
            this.setModuleId.bind(this);

        this.findAllLessonsForModule = this.findAllLessonsForModule.bind(this);
        this.deleteLesson = this.deleteLesson.bind(this);
        this.createLesson = this.createLesson.bind(this);
        this.setCourseTitle = this.setCourseTitle.bind(this);


        this.lessonService = LessonService.instance;
        this.courseService = CourseService.instance;


        this.state = {
            moduleId: '',
            courseTitle:'',
            courseId: '',
            lesson: {title: 'New Lesson'},
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
        this.setCourseTitle(this.props.match.params.courseId);

    }

    componentWillReceiveProps(newProps) {
        this.setCourseId(
            newProps.match.params.courseId);

        this.setModuleId(
            newProps.match.params.moduleId);

    }

    async setCourseTitle(courseId){



        let title = await Promise.resolve(this.courseService.findCoursesById(courseId))
            .then(function(response){
                 return response.title;

            });


        console.log(title);

    this.setState({courseTitle: title });

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

    createLesson(){

        this.lessonService
            .createLesson(this.state.moduleId, this.state.lesson)
            .then(() => { this.findAllLessonsForModule(this.state.moduleId, this.state.courseId); });

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
                <h2>Editing course:{this.state.courseTitle}</h2>

                <div className="row">
                    <div className="col-4" style={{backgroundColor: "#F5F5F5"}}>
                        <ModuleList courseId={this.state.courseId}/>
                    </div>

                    <div className="col-8">

                        <ul className="nav nav-tabs">
                            {this.lessonTabs()}
                            <li className="nav-item" onClick={this.createLesson}>
                                <a className="nav-link active">
                                    +
                                </a>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>



            )
    }

}

export default ModuleEditor;