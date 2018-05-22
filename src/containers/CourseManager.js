import React, {Component} from 'react';
import CourseCard from '../components/CourseCard';
import CourseEditor from './CourseEditor'
import CourseList from './CourseList'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LessonTabs from "./LessonTabs";
import ModuleList from "./ModuleList";



export default class CourseManager

    extends Component {

    render(){

        return (
            <Router>
            <div className="container-fluid">

                <Route path="/courses"
                       component={CourseList}/>

                <Route/>
                <Route path="/course/:courseId"
                       component={CourseEditor}>
                </Route>



            </div>
            </Router>

        )

    }

}

