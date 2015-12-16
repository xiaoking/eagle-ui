/**
 * Created by panqianjin on 15/11/18.
 */
import React, {Component, PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';
import Input from './Input.js';
import Row from './Row.js';
import Col from './Col.js';
import Grid from './Grid.js';

@ClassNameMixin
export default class Marquee extends Component {
    static defaultProps = {
        isNew: false,
        isChecked: false,
        src: 'http://img1.imgtn.bdimg.com/it/u=1825165654,1935296637&fm=21&gp=0.jpg',
        title: '吃吧小伙伴',
        content: '安化路492号',
        tips: '吃喝玩乐',
        classPrefix: 'marquee',
        componentTag: 'div'
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            isChecked: this.props.isChecked
        }
    }

    render() {
        return (
            <Grid className={classnames(
                this.getClassName('container'))}>
                <div className={classnames(
                this.getClassName('new-tip'))}>
                    <span className={classnames(
                        this.getClassName('new')
                    )}>新</span>
                </div>
                <div className={classnames(
                this.getClassName('check'))}>
                    <Input type="checkboxs" checked label=''/>
                </div>
                <img src={this.props.src} />
                <Row className={classnames(
                this.getClassName('title') )}>
                    {this.props.title}
                </Row>
                <Row className={classnames(
                this.getClassName('content'))}>
                    {this.props.content}
                </Row>
                <Row className={classnames(
                    this.getClassName('tips'))}>
                    <span className={classnames(
                        this.getClassName('bars',false))}>
                    </span>
                    {this.props.tips}
                </Row>
            </Grid>);
    }
}