/**
 * Created by panqianjin on 15/11/4.
 */
import React,{Component, PropTypes, ReactDOM} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';
import Input from './Input.js';
import Button from './Button.js';
import Row from './Row.js';
import Col from './Col.js';
import Grid from './Grid.js';
/**
 * 搜索按钮组件
 * 参数： id/callBack/placeholder 均可不传
 * @class Select
 * */
@ClassNameMixin
export default class Search extends Component {
    static defaultProps = {
        id: '1',
        callBack: null,
        placeholder: '请输入',
        classPrefix: 'search',//类名前前缀
        componentTag: 'div'
    }
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: this.props.value
        }
    }

    render() {
        return (
            <Grid>
                <Row className={
                    classnames(
                        this.getClassNamesForArguments('wrapper','icon')
                        )}>
                    <Input ref={this.props.name} id={this.props.id} placeholder={this.props.placeholder}
                           onChange={::this.changeValue}/>
                </Row>
                <Button radius egSize="xs" onClick={::this.submitSearch}>搜索</Button>
            </Grid>
        );
    }
    /**
     * @method change input value
     * @param none
     * @return setState
     * */
    changeValue(event) {
        this.setState({
            value: event.target.value
        });
    }
    /**
     * @method submit search
     * @param none
     * @return get value calback if exist
     * */
    submitSearch() {
        let val = this.state.value;
        this.props.callBack && this.props.callBack(val);
    }
}