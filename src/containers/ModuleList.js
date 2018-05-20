import React from 'react';
import ModuleListItem from '../components/ModuleListItem';


class ModuleList extends React.Component{

    constructor(props) {
        super(props);

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

        this.titleChanged = this.titleChanged.bind(this);
        this.createModule = this.createModule.bind(this);
        this.setCourseId = this.setCourseId.bind(this);


    }

    setCourseId(courseId){

        this.setState({courseId:courseId})


    }

    componentDidMount(){

        this.setCourseId(this.props.courseId)
    }

    componentWillReceiveProps(newProps){

        this.setCourseId(newProps.courseId);
    }


    renderListOfModules() {
        let modules =   this.state.modules.map(function (module) {
            return <ModuleListItem key={module.id} title={module.title}/>
        });


        return modules;
    }

    titleChanged(event){
        console.log(event.target.value);
        this.setState({module:{title: event.target.value}});


    }

    createModule(){

        console.log(this.state.module);



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

                    {this.renderListOfModules()}

                </ul>
            </div>
        );


    }


}

export default ModuleList;