import React from 'react';
import {Link } from 'react-router-dom';
import Time from 'react-time';


class CourseRow extends React.Component {

    constructor(props){
        super(props);
        this.timeFormatting = this.timeFormatting.bind(this);



    }

    render() {
        return (
            <tr>
                <td>
                <Link to={`/course/${this.props.course.id}`}>
                    {this.props.course.title}
                </Link>
                </td>
                <td>
                <span >

                    <ins>{this.timeFormatting(this.props.course.created)}</ins>

                </span>
                </td>

                <span className="float-right"
                      onClick={() => {if(window.confirm('Delete the Course?')) {this.props.delete(this.props.course.id)};}}>
                    <i className="fa fa-times-circle" aria-hidden="true"></i>

                </span>
            </tr>
        )
    }



    timeFormatting(unformattedTime){
        let timeFormatted = new Date(unformattedTime);
        return (

                <Time value={timeFormatted}  format="YYYY-MM-DD" />

        )


    }


}
export default CourseRow;
