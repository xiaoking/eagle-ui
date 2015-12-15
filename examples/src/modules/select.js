/**
 * Created by panqianjin on 15/11/4.
 */
import React,{Component,PropTypes}  from 'react';
import Select from '../../../lib/Select.js';
import Button from '../../../lib/Button.js';
import Grid from '../../../lib/Grid.js';
import Row from '../../../lib/Row.js';
import Col from '../../../lib/Col.js';
let Demo= class Demo extends Component{

    static defaultProps = {
        input: true,
        keys:'bei'
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            input: this.props.input
        }
    }
    render(){
        return (
            <Grid>
                <Row>
                    <Col sm={3}><Button block radius egSize="sm" onClick={::this.changeIn} >切换至限定值模式</Button></Col>
                <Col sm={8}>
                <Select keys={this.props.keys} callback={function(val,key){console.log(val+':'+key)}} input={this.state.input} >
                    <item value='bei'>北京</item>
                    <item value='shang'>上海</item>
                    <item value='nan'>南京</item>
                    <item value='3'>ssdd</item>
                    <item value='4'>sd饭否否</item>
                    <item value='5'>南京</item>
                    <item value='6'>ssdd</item>
                    <item value='7'>sd饭否否</item>
                    <item value='8'>北京</item>
                    <item value='9'>上海</item>
                    <item value='10'>南京</item>
                    <item value='11'>ssdd</item>
                    <item value='12'>sd饭否否</item>
                </Select>
                    </Col>
                </Row>
            </Grid>
        );
    }
    changeIn(){
        this.setState({
          input: false
        })
        alert('输入值必须为select之中的值');
    }
}

export default Demo;