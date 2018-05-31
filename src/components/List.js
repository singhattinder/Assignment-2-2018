import {listAreaChanged, listNameChanged } from "../actions";
import {connect} from "react-redux";
import React from 'react';

import { Badge, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const List = ({widget, preview, listAreaChanged, listNameChanged}) => {

    let inputElement;
    let selectOption;
    let lines;
    let x='1';
    let inputName;


    return (

        <div>
            <br/>
            <div hidden={preview}>
                <h2>{widget.name}</h2>
                <textarea className="form-control" onChange={()=> listAreaChanged(widget.id, inputElement.value) }
                          value={widget.text}
                          ref={node => inputElement =node}>.</textarea>
                <br/>
                <select className="input-large form-control" ref={node => this.selectOption = node}
                onChange={() => {this.x=this.selectOption.value}}>
                    <option value='1'>Ordered</option>
                    <option value='2'>UnOrdered</option>

                </select>
                <br/>
                <input  className="form-control input-lg" onChange={() => listNameChanged(widget.id, inputName.value)}
                        value={widget.name}
                        ref={node => inputName =node}/>
            </div>


            <div hidden={preview}>

                <h5>preview</h5>

                {

                    this.lines = widget.text.split("\n")
                }

                { this.x ==='1'&& <ol>{this.lines.map(l => <li>{l}</li>)}</ol>}
                { this.x ==='2'&&<ul>{this.lines.map(l => <li>{l}</li>)}</ul>}

            </div>



            <div hidden={!preview}>


                {

                    this.lines = widget.text.split("\n")
                }

                { this.x ==='1'&& <ol>{this.lines.map(l => <li>{l}</li>)}</ol>}
                { this.x ==='2'&&<ul>{this.lines.map(l => <li>{l}</li>)}</ul>}

            </div>

        </div>

    )
};


const dispatchToPropsMapper = dispatch => ({

    listAreaChanged: (widgetId, text)=> listAreaChanged(dispatch, widgetId, text),
    listNameChanged: (widgetId, text)=> listNameChanged(dispatch, widgetId, text)


});

const stateToPropsMapper = state  =>({


    preview: state.preview



});


export const ListContainder = connect(stateToPropsMapper, dispatchToPropsMapper)(List);