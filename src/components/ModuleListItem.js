import React from 'react';



export default class ModuleListItem extends React.Component{

    constructor(props){
        super(props);

        //this.delete = this.delete.bind(this);
        this.deleteModule = this.deleteModule(this);

    }


    render(){

        return(

            <li className="list-group-item">
                {this.props.module.title}
                <span className="float-right" >

                       <i className="fa fa-pencil"></i>


                    <i className="fa fa-trash-o" aria-hidden="true" ></i>


                </span>
            </li>
        );
    }

    deleteModule(){

        console.log("yoyo");
    }





}