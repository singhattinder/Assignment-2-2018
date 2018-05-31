import {DELETE_WIDGET, SELECT_WIDGET_TYPE} from "../constants";
import React from 'react';
import {connect} from "react-redux";
import {headingSizeChanged, headingTextChanged, preview} from "../actions";

import { Badge, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {HeadingContainder} from "./Heading";
import {ParagraphContainder} from "./Paragraph";
import {ListContainder} from "./List";
import {LinkContainder} from "./Link";
import {ImageContainder} from "./Image";
import './widget.css'




const Widget =({widget, preview, dispatch}) =>{

    let selectElement;


   return( <li className="mainBorder">

       <div className="float-left" hidden={preview}>



       </div>

       <div hidden={preview}>
           <div  className="float-right">
               <Button outline color="danger" onClick={e =>(
                   dispatch({type:DELETE_WIDGET, id:widget.id})
               )}>Delete</Button>
           </div>
           <div  className="float-right">
               <Button outline color="warning">Up</Button>
           </div>
           <div  className="float-right">
               <Button outline color="warning">Down</Button>
           </div>


       <div className="float-right">
           <select className="form-control" value={widget.widgetType}  onChange={e =>dispatch(

               {   type:SELECT_WIDGET_TYPE,
                   id:widget.id,
                   widgetType: selectElement.value
               }
           )} ref={node => selectElement = node}>


               <option>Heading</option>
               <option>Paragraph</option>
               <option>List</option>
               <option>Image</option>
               <option>Link</option>
           </select>
       </div>

       </div>




       <div>
           {widget.widgetType === 'Heading' && <HeadingContainder widget={widget}/>}
           {widget.widgetType === 'Paragraph' && <ParagraphContainder widget={widget}/>}
           {widget.widgetType === 'List' && <ListContainder widget={widget}/>}
           {widget.widgetType === 'Link' && <LinkContainder widget={widget}/>}
           {widget.widgetType === 'Image' && <ImageContainder widget={widget}/>}
       </div>
    </li>)
};


export const WidgetContainer =  connect(
    state => ({
        preview: state.preview
    })

)(Widget);