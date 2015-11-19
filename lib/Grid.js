/**
 * Created by mac on 15/9/7.
 */
import React,{ PropTypes, Component } from 'react';

export default class Grid extends Component{

    static propTypes = {
    };


    render(){

        return (
            <div {...this.props}>
                {this.props.children}
            </div>
        );
    }
}