/**
 * Created by mac on 15/11/4.
 */
import css from '../../lib/_include.less';
import React from 'react';
import Table from '../../lib/Table/Table.js';
import Tr from '../../lib/Table/Tr.js';
import Td from '../../lib/Table/Td.js';
import Th from '../../lib/Table/Th.js';

ReactDOM.render(
    <Table>
        <thead>
            <Tr>
                <Th>数据类型</Th>
                <Th>数据项</Th>
                <Th>昨日</Th>
                <Th>本月</Th>
                <Th>上月</Th>
                <Th>本月城市排名</Th>
            </Tr>
        </thead>
        <tbody>
            <Tr>
                <Td rowSpan="4">过程指标</Td>
                <Td>消费交易额</Td>
                <Td>1876500</Td>
                <Td>1876500</Td>
                <Td>1876500</Td>
                <Td>200</Td>
            </Tr>
            <Tr>
                <Td arrow-up>消费交易额</Td>
                <Td arrow-down>1876500</Td>
                <Td>1876500</Td>
                <Td>1876500</Td>
                <Td>200</Td>
            </Tr>
            <Tr>
                <Td>消费交易额</Td>
                <Td>1876500</Td>
                <Td>1876500</Td>
                <Td>1876500</Td>
                <Td>200</Td>
            </Tr>
            <Tr split>
                <Td>消费交易额</Td>
                <Td>1876500</Td>
                <Td>1876500</Td>
                <Td arrow-down>1876500</Td>
                <Td>200</Td>
            </Tr>
            <Tr>
                <Td rowSpan="4">业绩</Td>
                <Td>消费交易额</Td>
                <Td>1876500</Td>
                <Td>1876500</Td>
                <Td>1876500</Td>
                <Td>200</Td>
            </Tr>
            <Tr>
                <Td>消费交易额</Td>
                <Td>1876500</Td>
                <Td>1876500</Td>
                <Td>1876500</Td>
                <Td>200</Td>
            </Tr>
            <Tr>
                <Td>消费交易额</Td>
                <Td>1876500</Td>
                <Td>1876500</Td>
                <Td>1876500</Td>
                <Td>200</Td>
            </Tr>
            <Tr>
                <Td>消费交易额</Td>
                <Td>1876500</Td>
                <Td>1876500</Td>
                <Td>1876500</Td>
                <Td>200</Td>
            </Tr>
        </tbody>
    </Table>
    ,document.getElementById('root'));