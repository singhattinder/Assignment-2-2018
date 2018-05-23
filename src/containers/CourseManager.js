import React, {Component} from 'react';
import CourseEditor from './CourseEditor'
import CourseList from './CourseList'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import ModuleEditor from "./ModuleEditor";



export default class CourseManager

    extends Component {

    render(){

        return (
            <Router>
            <div className="container-fluid">

                <Route exact={true} path="/course"
                       component={CourseList}/>

                <Route/>
                <Route exact={true} path="/"
                       component={CourseList}/>

                <Route/>
                <Route exact={true} path="/course/:courseId"
                       component={CourseEditor}>

                </Route>
                <Route path="/course/:courseId/module/:moduleId"
                       component={ModuleEditor}/>


            </div>
            </Router>

        )

    }

}

