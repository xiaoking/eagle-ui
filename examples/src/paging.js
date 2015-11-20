/**
 * Created by mac on 15/11/4.
 */
import css from '../../lib/_include.less';
import React from 'react';
import Paging from '../../lib/Paging.js';
import Row from '../../lib/Row.js';
import Col from '../../lib/Col.js';
import querystring from 'querystring';


function callback(page){
    window.location = location.origin+location.pathname+'?page='+page;
}

var page =location.search ? querystring.parse(location.search.substr(1) ).page*1 : 1;

ReactDOM.render(
    <Row>
        <Col sm={12}>
            <Paging currentPage={page} pageCallback={callback} total={5024} />
        </Col>
    </Row>
    ,document.getElementById('root'));