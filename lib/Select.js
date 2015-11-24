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
        value: '',
        show: false,
        target: '0'
    }

    constructor(props, context) {
        super(props, context);
        this.state = {
            show: this.props.show,
            value:this.props.value
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
        let val = this.state.value;
        this.setState({
            show: false
        })
        this.props.callback && this.props.callback(val);
    }
    handlerValue(event){
        this.setState({
            value: event.target.value
        })
        this.changeValue();
    }
    changeValue() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(::this.callBacks, 2000);
    }

    chooseItem(event) {
        //debugger
        //react 避免直接取dom
        //这么写的原因在于Input是外层包了div，直接拿不到input。。
        let inputObj = ReactDOM.findDOMNode(this.refs.select);
        //inputObj.value = event.target.textContent;
        this.setState({
            show: !this.state.show,
            value: event.target.textContent
        })
        inputObj.focus();
        this.changeValue();
    }

    hideUl() {
        this.setState({
            show: false
        })

    }
    keyIn(event){
        //debugger
        if(event.keyCode == 40){
            this.setState({
                show: true
            })
            let _this = this;
            let selectUl = ReactDOM.findDOMNode(this.refs.selectUl);
            if(_this.isParent(event.target,selectUl)){
                event.target.nextSibling? event.target.nextSibling.focus():event.target.focus();
            }else{
                selectUl.children[0].focus();
            }
        }else if(event.keyCode == 13){
            this.setState({
                show: false
            })
            this.changeValue();
        }
    }
    keyInUl(e){
        debugger
        if(e.charCode == 13){
            this.setState({
                show: false
            })
            this.chooseItem();
            this.changeValue();
        }
    }
    renderSelect() {
        return (
            <Grid ref='selectContair' className={
                    classnames(
                        this.getClassNamesForArguments('container')
                    )
                }>
                <Input ref={this.props.name} value={this.state.value}  onClick={::this.showUl} onChange={::this.handlerValue} onKeyDown={::this.keyIn}/>
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
                } onKeyPress={::this.keyInUl}>
                    {this.props.children.map((item)=>
                    <li value={item.props.children}  onClick={::this.chooseItem}>{item.props.children}</li>
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
                <Input ref={this.props.name} value={this.state.value} onChange={::this.showAutoUl}/>
                <ul className={classnames(
                    this.getClassNamesForArguments('ul'),
                    {
                        [this.getClassName('show')]: this.state.show
                    })
                }>
                    {this.props.children.map((item)=>
                    <li value={item.props.children} onKeyPress={::this.keyInUl} onClick={::this.chooseItem}>{item.props.children}</li>
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