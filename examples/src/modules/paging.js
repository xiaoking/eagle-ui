/**
 * Created by mac on 15/11/4.
 */
import React, { Component ,PropTypes} from 'react';
import Paging from '../../../lib/Paging.js';
import Row from '../../../lib/Row.js';
import Col from '../../../lib/Col.js';
import querystring from 'querystring';


let page = 1;
function callback(page){
    page = page;
    window.location = location.origin+location.pathname+'?page='+page+'&pageSize='+pageSize;
}

function loadPageCallback(pageSize){
    window.location = location.origin+location.pathname+'?page='+page+'&pageSize='+pageSize;
}

page =location.search ? querystring.parse(location.search.substr(1) ).page*1 : 1;

var pageSize = location.search ? querystring.parse(location.search.substr(1) ).pageSize*1 : 20;


export default class PagingCls extends Component{
    render(){
        return (
            <Row>
                <Col sm={12}>
                    <Paging showItemsNumber={true} loadPageCallback={loadPageCallback} currentPage={page} pageSize={pageSize} pageCallback={callback} total={5024} />
                </Col>
            </Row>
        );
    }
}