import {headingSizeChanged, headingTextChanged, headingNameChanged} from "../actions";
import {connect} from "react-redux";
import React from 'react';
import { Badge, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Heading = ({widget, preview, headingTextChanged, headingSizeChanged, headingNameChanged}) => {
    let selectElement;
    let inputElement;
    let inputName;

    return (

        <div>


            <div  hidden={preview}>
                <h2><Badge color="Light">{widget.name}</Badge></h2>



                <input  className="form-control input-lg" onChange={() => headingTextChanged(widget.id, inputElement.value)}
                       value={widget.text}
                       ref={node => inputElement =node}/>
                    <br/>
                <select  className="input-large form-control" onChange={() => headingSizeChanged(widget.id, selectElement.value)}
                       value={widget.size}
                       ref={node => selectElement = node}>
                    <option value="1">Heading size 1</option>
                    <option value="2">Heading size 2</option>
                    <option value="3">Heading size 3</option>
                </select>
                <br/>
                <input  className="form-control input-lg" onChange={() => headingNameChanged(widget.id, inputName.value)}
                        value={widget.name}
                        ref={node => inputName =node}/>
                <br/>
            </div>
            <div hidden={preview}>
                <h6>Preview</h6>
                {widget.size ==1 && <h1>{widget.text}</h1>}
                {widget.size ==2 && <h2>{widget.text}</h2>}
                {widget.size ==3 && <h3>{widget.text}</h3>}

            </div>
            <div hidden={!preview}>
            {widget.size ==1 && <h1>{widget.text}</h1>}
            {widget.size ==2 && <h2>{widget.text}</h2>}
            {widget.size ==3 && <h3>{widget.text}</h3>}

            </div>
        </div>

    )
};


const dispatchToPropsMapper = dispatch => ({

    headingTextChanged: (widgetId, newText) =>
        headingTextChanged(dispatch, widgetId, newText),

    headingSizeChanged: (widgetId, newSize) =>
        headingSizeChanged(dispatch, widgetId, newSize),

    headingNameChanged: (widgetId, newName)=>
        headingNameChanged(dispatch, widgetId, newName)
});


const stateToPropsMapper = state  =>({


    preview: state.preview


});

export const HeadingContainder = connect(stateToPropsMapper, dispatchToPropsMapper)(Heading);