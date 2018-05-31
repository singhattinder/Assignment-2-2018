import {linkChanged , linkNameChanged} from "../actions";
import {connect} from "react-redux";
import React from 'react';

import { Badge, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Link = ({widget, preview, linkChanged, linkNameChanged}) => {

    let inputElement;
    let inputName;

    return (

        <div>
            <div hidden={preview}>
                <h2>{widget.name}</h2>
                <textarea className="form-control" onChange={()=> linkChanged(widget.id, inputElement.value)}
                          value={widget.src}
                          ref={node => inputElement =node}>.</textarea>
                <br/>

                <input placeholder="widget name" className="form-control input-lg" onChange={() => linkNameChanged(widget.id, inputName.value)}
                       value={widget.name}
                       ref={node => inputName =node}/>

            </div>
            <div hidden={!preview}>
                <a href={widget.src}>Link</a>
            </div>

        </div>


    )
};


const dispatchToPropsMapper = dispatch => ({

    linkChanged: (widgetId, src) => linkChanged(dispatch, widgetId, src),
    linkNameChanged: (widgetId, name) => linkNameChanged(dispatch, widgetId, name)

});

const stateToPropsMapper = state  =>({


    preview: state.preview


});


export const LinkContainder = connect(stateToPropsMapper, dispatchToPropsMapper)(Link);