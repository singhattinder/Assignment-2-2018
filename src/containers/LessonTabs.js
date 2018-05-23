import React from 'react';


export default class LessonTabs
    extends React.Component {

    constructor(props){
        super(props);


        this.state = {moduleId: '',
            lesson: {title: ''},
            lessons: [
                {title: 'Lesson 1 - jQuery', id: 123},
                {title: 'Lesson 2 - React', id: 234}
            ]
        };



    }


    render() { return(
        <ul class="nav nav-tabs">
            <li class="nav-item"><a class="nav-link active"
                                    href="#">{this.state.title}</a></li>
            <li class="nav-item"><a class="nav-link"
                                    href="#">Another Tab</a></li>
        </ul>
    );}}
