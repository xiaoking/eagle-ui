/**
 * Created by panqianjin on 15/11/4.
 */
import React,{Component} from 'react';
import {ButtonGroup,Toast,Col,Row,Grid,Button,Dialog,Panel,PanelHeader,PanelContent,PanelFooter,FormGroup,Input,RadioGroup,CheckboxGroup,Select} from '../../../src/index';
let Demo= class Demo extends Component{

    static defaultProps = {
        show: false,
        type: "success"
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            isMask:true
        }
    }

    showToast(){
        let msg = arguments[0].getAttribute('data-message');

        this.setState({
            type:arguments[0].getAttribute('data-value'),
            message:msg,
            isMask:msg=='无遮罩加载成功' ?false:true
        });
        Dialog.mask('toast');
    }

    render(){

        return (
            <Grid>
                <ButtonGroup egType="justify" activeCallback={::this.showToast}>
                    <Button data-value="success" data-message="数据载入成功">显示success</Button>
                    <Button data-value="error"  data-message="数据加载失败">显示error</Button>
                    <Button data-value="loading"  data-message="加载中...">显示loading</Button>
                    <Button data-value="success"  data-message="无遮罩加载成功">无遮罩toast</Button>
                </ButtonGroup>

                <Dialog id="toast" isClose={false} isMask={this.state.isMask}>
                    <Toast type={this.state.type}>{this.state.message}</Toast>
                </Dialog>
            </Grid>
        );
    }
};
export default Demo;