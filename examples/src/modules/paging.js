/**
 * Created by mac on 15/11/4.
 */
import React, { Component ,PropTypes} from 'react';
import Paging from '../../../src/Paging.js';
import Row from '../../../src/Row.js';
import Col from '../../../src/Col.js';
import querystring from 'querystring';


let page = 1;
function callback(page){
    page = page;
    window.location = location.href.replace(/\?.*/,'')+'?page='+page+'&pageSize='+pageSize;
}

function loadPageCallback(pageSize){
    window.location = location.href.replace(/\?.*/,'')+'?page='+page+'&pageSize='+pageSize;
}
var pageSize = 20;


export default class PagingCls extends Component{

    render(){
        let query = this.props.location.query,
        page = query.page*1 ||0,
        pageSize = query.pageSize*1 || 20;
        return (
            <Row>
                <Col sm={12}>
                    <Paging showItemsNumber={true} loadPageCallback={loadPageCallback} currentPage={page} pageSize={pageSize}
                            pageCallback={callback} total={5024} />
                </Col>
            </Row>
        );
    }
}