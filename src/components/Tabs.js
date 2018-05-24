import React from 'react';
import {Link } from 'react-router-dom';
import Time from 'react-time';


class Tabs extends React.Component {

    constructor(props){
        super(props);
        console.log(this.props);





    }

    render() {
        return (

            <div>
                <li className="nav-item">
                    <span className="float-right"
                          onClick={() => {if(window.confirm('Delete the Lesson?')) {this.props.delete(this.props.lesson.id)};}}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                        </span>
                    <a className="nav-link active">
                        {this.props.lesson.title}
                        </a>

                </li>
            </div>

        )
    }






}



export default Tabs;
