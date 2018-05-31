import {ADD_WIDGET,
    FIND_ALL_WIDGETS,
    SAVE,HEADING_SIZE_CHANGED,
    HEADING_TEXT_CHANGED, PREVIEW,
    TEXT_AREA_CHANGED, LIST_AREA_CHANGED,
    LINK_AREA_CHANGED, IMAGE_LINK,
    HEADING_NAME_CHANGED, LIST_NAME_CHANGED,
    PARAGRAPH_NAME_CHANGED, IMAGE_NAME_CHANGED,
    LINK_NAME_CHANGED,HEROKU_SERVER} from "../constants";


export const headingSizeChanged = (dispatch, widgetId, newSize) => (

    dispatch({
    type:HEADING_SIZE_CHANGED,
    id:widgetId,
    size: newSize
}));



export const headingNameChanged = (dispatch, widgetId, name) => (

    dispatch({
        type:HEADING_NAME_CHANGED,
        id:widgetId,
        name: name
    }));


export const paragraphNameChanged = (dispatch, widgetId, name) => (

    dispatch({
        type:PARAGRAPH_NAME_CHANGED,
        id:widgetId,
        name: name
    }));



export const imageNameChanged = (dispatch, widgetId, name) => (

    dispatch({
        type:IMAGE_NAME_CHANGED,
        id:widgetId,
        name: name
    }));

export const listNameChanged = (dispatch, widgetId, name) => (

    dispatch({
        type:LIST_NAME_CHANGED,
        id:widgetId,
        name: name
    }));

export const linkNameChanged = (dispatch, widgetId, name) => (

    dispatch({
        type:LINK_NAME_CHANGED,
        id:widgetId,
        name: name
    }));


export const headingTextChanged = (dispatch, widgetId, newText) => (

    dispatch({
        type:HEADING_TEXT_CHANGED,
        id:widgetId,
        text: newText
    }));

export const textAreaChanged = (dispatch, widgetId, text) => (

    dispatch({
        type:TEXT_AREA_CHANGED,
        id:widgetId,
        text: text
    }));



export const listAreaChanged = (dispatch, widgetId, text) => (

    dispatch({
        type:LIST_AREA_CHANGED,
        id:widgetId,
        text: text
    }));



export const linkChanged = (dispatch, widgetId, src) => (

    dispatch({
        type:LINK_AREA_CHANGED,
        id:widgetId,
        src: src
    }));


export const ImageLink = (dispatch, widgetId, newSrc) => (

    dispatch({
        type:IMAGE_LINK,
        id:widgetId,
        src: newSrc
    }));

export const findAllWidgets = dispatch => {

    fetch(HEROKU_SERVER+'/api/widget')
        .then(response => (response.json()))
        .then(widgets => dispatch(
            {
                type: FIND_ALL_WIDGETS,
                widgets: widgets
            }
        ))
};

export const addWidget = dispatch => (
    dispatch({type: ADD_WIDGET})
);

export const save = dispatch => (
    dispatch({type: SAVE})
);

export const preview = dispatch => (
  dispatch({type: PREVIEW})
);