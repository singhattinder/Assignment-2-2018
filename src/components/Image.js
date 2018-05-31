import {linkChanged , ImageLink, imageNameChanged} from "../actions";
import {connect} from "react-redux";
import React from 'react';


const Image = ({widget, preview, ImageLink, imageNameChanged}) => {

    let inputSrc;
    let inputName;

    return (

        <div>
            <div hidden={preview}>
                <h2>{widget.name}</h2>
                <textarea placeholder="URL" className="form-control" onChange={()=> ImageLink(widget.id, inputSrc.value)}
                          value={widget.src}
                          ref={node => inputSrc =node}>.</textarea>
                <br/>

                <input placeholder="widget name" className="form-control input-lg" onChange={() => imageNameChanged(widget.id, inputName.value)}
                       value={widget.name}
                       ref={node => inputName =node}/>


            </div>
            <br/>
            <h5>preview</h5>
            <br></br>
            <div hidden={preview}>
                <img className="img-fluid" alt="Chania" width="100" height="100" src={widget.src}></img>
            </div>

            <div hidden={!preview}>
                <img className="img-fluid" alt="Chania" width="300" height="300" src={widget.src}></img>
            </div>

        </div>


    )
};


const dispatchToPropsMapper = dispatch => ({

    ImageLink: (widgetId, newSrc)=> ImageLink(dispatch, widgetId, newSrc),
    imageNameChanged: (widgetId, name)=> imageNameChanged(dispatch, widgetId, name)

});

const stateToPropsMapper = state  =>({


    preview: state.preview


});


export const ImageContainder = connect(stateToPropsMapper, dispatchToPropsMapper)(Image);