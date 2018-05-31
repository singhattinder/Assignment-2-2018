import {
    ADD_WIDGET,
    DELETE_WIDGET,
    FIND_ALL_WIDGETS,
    SAVE,
    SELECT_WIDGET_TYPE,
    DEFAULT_TYPE_PARAGRAPH,
    HEADING_SIZE_CHANGED, HEADING_TEXT_CHANGED, PREVIEW,
    TEXT_AREA_CHANGED, LIST_AREA_CHANGED, LINK_AREA_CHANGED,
    IMAGE_LINK, HEADING_NAME_CHANGED,LIST_NAME_CHANGED,
    PARAGRAPH_NAME_CHANGED, IMAGE_NAME_CHANGED,
    LINK_NAME_CHANGED,
    HEROKU_SERVER
} from "../constants";
import React from 'react';


export const widgetReducer = (state = {widgets:[], preview: false }, action) =>{

    let newState;

    switch (action.type){


        case FIND_ALL_WIDGETS:
            newState = Object.assign({},state);
            newState.widgets = action.widgets;

            return newState;

        case ADD_WIDGET:
            return {
                widgets:[
                    ...state.widgets,
                    {   id:state.widgets.length + 1,
                        text:'new widget',
                        widgetType: DEFAULT_TYPE_PARAGRAPH,
                        size: '2',
                        name: 'widget name',
                        src: 'https://d3qya5s7r16pqu.cloudfront.net/features/made-for-google/made-for-google-g-suite.png?mtime=20171026113425'


                    }
                ]
            };

        case HEADING_TEXT_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id){
                        widget.text = action.text
                    }
                    return Object.assign({}, widget);
                })
            };

        case HEADING_SIZE_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id){
                        widget.size = action.size
                    }
                    return Object.assign({}, widget);
                })
            };

        case PARAGRAPH_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id){
                        widget.name = action.name
                    }
                    return Object.assign({}, widget);
                })
            };

        case LINK_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id){
                        widget.name = action.name
                    }
                    return Object.assign({}, widget);
                })
            };

        case IMAGE_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id){
                        widget.name = action.name
                    }
                    return Object.assign({}, widget);
                })
            };

        case HEADING_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id){
                        widget.name = action.name
                    }
                    return Object.assign({}, widget);
                })
            };

        case LIST_NAME_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id){
                        widget.name = action.name
                    }
                    return Object.assign({}, widget);
                })
            };



        case SELECT_WIDGET_TYPE:
            let newState = {
            widgets:state.widgets.filter((widget) => {
                if (widget.id === action.id)
                {
                    widget.widgetType = action.widgetType
                }
                return true;
            })};


            return JSON.parse(JSON.stringify(newState));


        case DELETE_WIDGET:
            return {widgets: state.widgets.filter(widget =>
                    (
                        widget.id !== action.id
                    ))};



        case SAVE:

            fetch(HEROKU_SERVER+'/api/widget/save',{
                method:'POST',
                body:JSON.stringify(state.widgets),
                headers:{
                    'content-type':'application/json'
                }

            });

            return state;

        case TEXT_AREA_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id){
                        widget.text = action.text
                    }
                    return Object.assign({}, widget);
                })
            };

        case LIST_AREA_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id){
                        widget.text = action.text
                    }
                    return Object.assign({}, widget);
                })
            };

        case LINK_AREA_CHANGED:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id){
                        widget.text = action.text
                    }
                    return Object.assign({}, widget);
                })
            };

        case IMAGE_LINK:
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.id){
                        widget.src = action.src
                    }
                    return Object.assign({}, widget);
                })
            };


        case PREVIEW:
            return {

                widgets: state.widgets,
                preview: !state.preview
            };

        default:
            return state
    }
};