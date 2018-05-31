import {textAreaChanged, paragraphNameChanged} from "../actions";
import {connect} from "react-redux";
import React from 'react';

import { Badge, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Paragraph = ({widget, preview, textAreaChanged, paragraphNameChanged}) => {

    let inputElement;
    let inputName;

    return (

        <div>
        <div hidden={preview}>
            <h2>{widget.name}</h2>
            <textarea placeholder="Lorem ipsum" className="form-control"  onChange={()=> textAreaChanged(widget.id, inputElement.value)}
                      value={widget.text}
                      ref={node => inputElement =node}>.</textarea>
            <br/>

            <input placeholder="widget name" className="form-control input-lg" onChange={() => paragraphNameChanged(widget.id, inputName.value)}
                    value={widget.name}
                    ref={node => inputName =node}/>

            <br/>
            <h5>preview</h5>
            <div hidden={preview}>
                {widget.text}
            </div>
        </div>

            <div hidden={!preview}>
                {widget.text}
            </div>

        </div>


    )
};


const dispatchToPropsMapper = dispatch => ({

    textAreaChanged: (widgetId, text)=> textAreaChanged(dispatch, widgetId, text),
    paragraphNameChanged: (widgetId, name)=> paragraphNameChanged(dispatch, widgetId, name)

});

const stateToPropsMapper = state  =>({


    preview: state.preview


});


export const ParagraphContainder = connect(stateToPropsMapper, dispatchToPropsMapper)(Paragraph);