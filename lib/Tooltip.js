/**
 * Created by panqianjin on 15/11/17.
 */
import React,{Component,PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';
import Button from './Button.js';
import Row from './Row.js';
import Col from './Col.js';
import Grid from './Grid.js';

@ClassNameMixin
export default class Tooltip extends Component {
    static defaultProps = {
        show: false,
        direction: 'down',
        msg: '我也不知道这个tips这么麻烦',
        classPrefix: 'tooltip',
        conponentTag: 'div'
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            show: this.props.show,
            direction: this.props.direction
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            show : nextProps.show
        });
    }
    render() {
        debugger
        return (
            <Grid className={classnames(
                this.getClassName('wraper'),
                {
                      [this.getClassName('show')]:this.state.show
                }
            )}>
                <Row className={classnames(
                    this.getClassName('tooltip')
                )}>
                    <Row className={classnames(
                    this.getClassName('arrow')
                )}></Row>
                    <Row className={classnames(
                    this.getClassName('content')
                )}>
                        {this.props.msg}
                    </Row>
                </Row>
            </Grid>
        );
    }
}