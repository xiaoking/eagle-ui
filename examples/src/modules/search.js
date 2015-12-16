/**
 * Created by panqianjin on 15/11/4.
 */
import React,{Component} from 'react';
import Search from '../../../src/Search.js';

export default class SearchCls extends Component{
    render(){
        return (
            <div>
                <Search callback={function(val){alert(val)}}>
                </Search>
            </div>
        );
    }
}