import React from 'react';
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleService';
import CourseService from "../services/CourseServices";


class ModuleList extends React.Component{

    constructor(props) {
        super(props);

        this.deleteModule = this.deleteModule.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.moduleService = ModuleService.instance;
        this.courseService = CourseService.instance;


        this.state = {courseId: '',
            module: {title: ''},
            date:'',
            modules: [
                ]
        };




    }
    setCourseId(courseId){

        this.setState({courseId:courseId})


    }

    findAllModulesForCourse(courseId) {
        this.moduleService
            .findAllModulesForCourse(courseId)
            .then((modules) => {this.setModules(modules)});
    }


    setModules(modules) {
        this.setState({modules: modules})
    }


    componentDidMount(){

        this.setCourseId(this.props.courseId)
    }

    componentWillReceiveProps(newProps){

        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId)
    }




    titleChanged(event){
        console.log(event.target.value);
        this.setState({module:{title: event.target.value}});


    }

    createModule(){

        this.moduleService.createModule(this.state.courseId,this.state.module)
            .then(()=> {
                this.findAllModulesForCourse(this.state.courseId);
            });

    }

    deleteModule(moduleId) {
        this.moduleService
            .deleteModule(moduleId)
            .then(() => {
                this.findAllModulesForCourse
                (this.state.courseId)
            });
    }






    renderModules() {
        let modu =
            this.state.modules.map( (module) =>{
                return <ModuleListItem key={module.id}
                                       module={module}
                                       courseId={this.state.courseId}
                                       delete={this.deleteModule}
                />
            });
        return modu;
    }



    render(){

        return(
            <div>
                <div class="container-fluid">
                <h3>Module List</h3>
                </div>

                <br/>
                <input className="form-control" placeholder="Add Module"

                       onChange={this.titleChanged}

                />

                <button onClick={this.createModule}
                        className="btn btn-primary btn-block">
                    <i className="fa fa-plus">
                    </i>
                </button>
                <ul className="list-group">

                    {this.renderModules()}

                </ul>
            </div>
        );


    }


}

export default ModuleList;