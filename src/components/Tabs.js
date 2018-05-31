import React from 'react';
import {Link } from 'react-router-dom';
import Time from 'react-time';
import {createStore} from 'redux';
import {widgetReducer} from "../reducers/widgetReducer";
import {Provider} from 'react-redux';
import {App} from "../containers/widgetList";


class Tabs extends React.Component {


    constructor(props){
        super(props);

    }


    componentDidMount() {

    }


    render() {
        let store = createStore(widgetReducer);
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


                    <Provider store={store}>

                        <div>
                            <App/>
                        </div>
                    </Provider>,

                </li>
            </div>

        )
    }






}



export default Tabs;
