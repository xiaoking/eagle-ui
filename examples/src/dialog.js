/**
 * Created by panqianjin on 15/11/4.
 */
import css from '../../lib/_include.less';
import React,{Component} from 'react';
import Dialog from '../../lib/Dialog.js';
import Button from '../../lib/Button.js';
import Grid from '../../lib/Grid.js';
import Row from '../../lib/Row.js';
import Col from '../../lib/Col.js';
let Demo= class Demo extends Component{

    static defaultProps = {
        show: false,
        type: "alert"
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            show: this.props.show,
            type: this.props.type
        }
    }
    render(){
        return (
         <Grid>
        <Row>
            <Col sm={3}><Button block radius egSize="sm" onClick={::this.showDialog}>dialog</Button></Col>
            <Col sm={3}><Button block radius egSize="sm" onClick={::this.showAlert}>alert</Button></Col>
            <Col sm={3}><Button block radius egSize="sm" onClick={::this.showConfirm}>confirm</Button></Col>
            <Col sm={3}><Button block radius egSize="sm" onClick={::this.showMsak}>mask</Button></Col>
        </Row>
            <Dialog type={this.state.type} show={this.state.show}>
            ahflaskdjflajsflajsdlf;jkasdfk
                adfkjasd;fkjas;dlf
                asdfkn;askdfnas
            </Dialog>
           </Grid>
        );
    }
    showDialog(){
        this.setState({
            show: true,
            type: 'dialog'
        })
    }
    showAlert(){
        this.setState({
            show: true,
            type: 'alert'
        })
    }
    showConfirm(){
        this.setState({
            show: true,
            type: 'confirm'
        })
    }
    showMsak(){
        this.setState({
            show: true,
            type: 'mask'
        })
    }
}

ReactDOM.render(
        <Demo  />
    ,document.getElementById('root'));