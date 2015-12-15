/**
 * Created by panqianjin on 15/11/4.
 */
import React,{Component} from 'react';
import Toast from '../../../lib/Toast.js';
import Button from '../../../lib/Button.js';
import Grid from '../../../lib/Grid.js';
import Row from '../../../lib/Row.js';
import Col from '../../../lib/Col.js';
let Demo= class Demo extends Component{

    static defaultProps = {
        show: false,
        type: "success"
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            show: this.props.show,
            type: this.props.type,
            overlay: true
        }
    }
    render(){
        return (
            <Grid>
                <Row>
                    <Col sm={4}><Button block radius egSize="sm" onClick={::this.showSuccess}>success</Button></Col>
                    <Col sm={4}><Button block radius egSize="sm" onClick={::this.showError}>error</Button></Col>
                    <Col sm={4}><Button block radius egSize="sm" onClick={::this.showLoading}>loading</Button></Col>
                </Row>
                <Toast type={this.state.type} show={this.state.show} overlay={this.state.overlay}>
                </Toast>
            </Grid>
        );
    }
    showSuccess(){
        this.setState({
            show: true,
            type: 'success'
        })
    }
    showError(){
        this.setState({
            show: true,
            type: 'error',
            overlay: false
        })
    }
    showLoading(){
        this.setState({
            show: true,
            type: 'loading'
        })
    }
};
export default Demo;