import React from 'react';
import {BrowserRouter as Router, Route, Link}
    from 'react-router-dom'
import ModuleEditor from "../containers/ModuleEditor";



export default class ModuleListItem extends React.Component{

    constructor(props){
        super(props);


    }


    render(){

        return(
            <div>

            <li className="list-group-item">
                <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
                    {this.props.module.title}
                    </Link>

                <span className="float-right" onClick={() =>
                {this.props.delete(this.props.module.id)}}>
                    <i className="fa fa-times-circle" aria-hidden="true"></i>

                </span>
            </li>
            </div>
        );
    }







}