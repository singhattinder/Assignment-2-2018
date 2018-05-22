import React from 'react';
import ModuleListItem from '../components/ModuleListItem';
import ModuleService from '../services/ModuleService';


class ModuleList extends React.Component{

    constructor(props) {
        super(props);

        this.deleteModule = this.deleteModule.bind(this);
        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
        this.setCourseId = this.setCourseId.bind(this);
        this.moduleService = ModuleService.instance;


        this.state = {courseId: '',
            module: {title: ''},
            modules: [
                {title: 'Module 1 - jQuery', id: 123},
                {title: 'Module 2 - React', id: 234},
                {title: 'Module 3 - Redux', id: 345},
                {title: 'Module 4 - Angular', id: 456},
                {title: 'Module 5 - Node.js', id: 567},
                {title: 'Module 6 - MongoDB', id: 678},]
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
        let modules =
            this.state.modules.map(function (module) {
                return <ModuleListItem key={module.id}
                                       module={module}
                                      // delete={this.deleteModule}
                />
            });
        return modules;
    }



    render(){

        return(
            <div>
                <h3>Module List for Course:{this.state.courseId}</h3>

                <br/>
                <input className="form-control" placeholder="title"

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