/**
 * Created by panqianjin on 15/11/12.
 */
import React, {Component, PropTypes} from 'react';
import ClassNameMixin from './utils/ClassNameMixin';
import classnames from 'classnames';
import Input from './Input.js';
import Row from './Row.js';
import Col from './Col.js';
import Grid from './Grid.js';

@ClassNameMixin
export default
class Select extends Component {
    static defaultProps = {
        callback: null,
        name: 'select',
        id: '1',
        classPrefix: 'select',
        componentTag: 'div',
        show: false
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            show: this.props.show
        };
    }

    componentDidMount() {
        let _this = this;
        let selectContair = ReactDOM.findDOMNode(this.refs.selectContair);
        document.addEventListener('click', function (e) {
            if (_this.isParent(e.target, selectContair)) {
                console.dir('不要动');
            } else {
                _this.hideUl();
            }
        }, false);
    }

    isParent(obj, parentObj) {
        while (obj != undefined && obj != null) {
            if (obj == parentObj) {
                return true;
            }
            obj = obj.parentNode;
        }
        return false;
    }

    showUl() {
        this.setState({
            show: true
        })
    }
    showAutoUl(){
        this.setState({
            show: true
        })
        this.changeValue();
    }
    toogleUl() {
        this.setState({
            show: !this.state.show
        })
    }

    callBacks() {
        let val = ReactDOM.findDOMNode(this.refs.select).value;
        this.setState({
            show: false
        })
        this.props.callback && this.props.callback(val);
    }

    changeValue() {
        debugger
        clearTimeout(this.timeout);
        this.timeout = setTimeout(::this.callBacks, 2000);
    }

    chooseItem(event) {
        let input = this.props.name;
        let inputObj = ReactDOM.findDOMNode(this.refs.select);
        debugger
        inputObj.value = event.target.textContent;
        this.setState({
            show: !this.state.show
        })
        inputObj.focus();
        this.changeValue();
    }

    hideUl(event) {
        debugger
        this.setState({
            show: false
        })

    }

    renderSelect() {
        return (
            <Grid ref='selectContair' className={
                    classnames(
                        this.getClassNamesForArguments('container')
                    )
                }>
                <Input ref={this.props.name} id={this.props.id} onClick={::this.showUl} onChange={::this.changeValue}/>
                <i className={
                    classnames(
                        this.getClassName('arrow')
                    )
                } onClick={::this.toogleUl}></i>
                <ul ref='selectUl' className={classnames(
                    this.getClassNamesForArguments('ul'),
                    {
                        [this.getClassName('show')]: this.state.show
                    })
                }>
                    {this.props.children.map((item)=>
                    <li value={item.props.children} onClick={::this.chooseItem}>{item.props.children}</li>
                        )}
                </ul>
            </Grid>
        )
    }

    renderAuto() {
        return (
            <Grid className={
                    classnames(
                        this.getClassNamesForArguments('container')
                    )
                }>
                <Input ref={this.props.name} id={this.props.id} onChange={::this.showAutoUl}/>
                <ul className={classnames(
                    this.getClassNamesForArguments('ul'),
                    {
                        [this.getClassName('show')]: this.state.show
                    })
                }>
                    {this.props.children.map((item)=>
                    <li value={item.props.children} onClick={::this.chooseItem}>{item.props.children}</li>
                        )}
                </ul>
            </Grid>
        )
    }

    render() {
        return (
            this.props.auto ? this.renderAuto() : this.renderSelect()
        )
    }


}