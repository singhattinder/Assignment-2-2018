import {addWidget, findAllWidgets, save, preview} from "../actions";
import React from "react";
import {WidgetContainer} from "../components/widget";
import {connect} from "react-redux";
import { Button, Badge, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './widgetList.css'


 class WidgetList extends React.Component {

    constructor(props)
    {
        super(props);
        this.props.findAllWidgets();


    }

    render(){

        return(

            <div>
               <h1><Badge color="light">Total widgets:{this.props.widgets.length}</Badge></h1>

                <Button className="float-right"
                        outline color="primary"
                        hidden={this.props.previewMode}
                        onClick={this.props.save}>Save</Button>

                <Button className="float-right"
                        outline color="success"
                        onClick={this.props.preview}>Preview</Button>
                <br/>
                <br/>
                <ul className="mainBorder">


                    {this.props.widgets.map(widget => (
                        <WidgetContainer widget={widget}
                                         key={widget.id}
                                         preview={this.props.previewMode}

                        />

                    ))}
                </ul>

                <Button className="float-right"
                        outline color="primary"
                        onClick={this.props.addWidget}>Add widget
                </Button>

            </div>

        )
    }
}



const stateToPropsMapper = (state) => (

    {
        widgets: state.widgets,
        previewMode: state.preview,
    }
);


const dispatcherToPropsMapper = dispatch => (
    {
        findAllWidgets: () => findAllWidgets(dispatch),
        addWidget: () => addWidget(dispatch),
        save: () => save(dispatch),
        preview: () =>preview(dispatch)
    }
);

export const App = connect(stateToPropsMapper, dispatcherToPropsMapper)(WidgetList);
