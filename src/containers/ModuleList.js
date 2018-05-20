import ModuleListItem from '../components/ModuleListItem';
import React from 'react';

export default class ModuleList extends React.Component{
    render(){

        return(

            <ul className="list-group">

                <ModuleListItem/>
                <ModuleListItem/>



            </ul>
        );
    }
}
