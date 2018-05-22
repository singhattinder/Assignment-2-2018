import React from 'react';
import {Link } from 'react-router-dom';
import Time from 'react-time';


class CourseRow extends React.Component {

    constructor(props){
        super(props);

        //this.deleteCourse = this.deleteCourse.bind(this);
        this.timeFormatting = this.timeFormatting.bind(this);



    }

    render() {
        return (
            <tr><td>

                <Link to={`/course/${this.props.course.id}`}>
                    {this.props.course.title}
                </Link>
                <span >

                    <ins>{this.timeFormatting(this.props.course.created)}</ins>

                </span>

                <span className="float-right">
                    <button onClick={() =>
                    {this.props.delete(this.props.course.id)}}>
                        Delete
                    </button>

                </span>
            </td></tr>
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
