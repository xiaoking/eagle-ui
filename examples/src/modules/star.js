/**
 * Created by slashhuang on 15/12/21.
 */
import React, { Component ,PropTypes} from 'react';
import Star from '../../../src/Star.js';

export default class StarDemo extends Component {
    render(){
        return(
            <div>
                <Star rate={50} size={15}/><br/>
                <Star rate={60} size={16}/><br/>
                <Star rate={70} size={17}/><br/>
                <Star rate={80} size={18}/><br/>
                <Star rate={90} size={19}/><br/>
                <Star rate={10} size={14}/><br/>
                <Star rate={20} size={13}/><br/>
                <Star rate={30} size={12}/><br/>
                <Star rate={40} size={11}/><br/>
                <Star rate={50} size={10}/><br/>
            </div>
        )
    }
}

